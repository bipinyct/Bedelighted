import React, { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import RenderHTML from 'react-native-render-html';

const ProductPage = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      const username = 'ck_5bcc0f744a83dee987717ff0e392dfe64ab1816e';
      const password = 'cs_ea362dca506ded042d99a09696c06b0e676be588';
      const auth = 'Basic ' + btoa(username + ':' + password);

      const response = await axios.get(
        `https://dev.bedelighted.afucent.com/wp-json/wc/v2/products/${productId}`,
        {
          headers: {
            Authorization: auth,
          },
        }
      );

      setProduct(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centeredContainer}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  const { width } = Dimensions.get('window');

  return (
    <ScrollView style={styles.container}>
      {product && (
        <>
          <Image
            source={{ uri: product.images[0].src }}
            style={styles.productImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.productTitle}>{product.name}</Text>
            <Text style={styles.productPrice}>₹ {product.price}</Text>
            <RenderHTML
              contentWidth={width}
              source={{ html: product.description }}
              tagsStyles={htmlStyles}
            />
            <Text style={styles.productCategory}>Category: {product.categories.map(cat => cat.name).join(', ')}</Text>
            <Text style={styles.productReviews}>Reviews: {product.rating_count}</Text>
            <Text style={styles.productAttributes}>
              {product.attributes.map(attr => `${attr.name}: ${attr.options.join(', ')}`).join('\n')}
            </Text>
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F6',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  productPrice: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  productCategory: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
  productReviews: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
  productAttributes: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
});

const htmlStyles = {
  p: {
    fontSize: 16,
    marginBottom: 10,
  },
  h4: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 10,
  },
  a: {
    color: '#3498db',
  },
  img: {
    width: '100%',
    height: 'auto',
    resizeMode: 'contain',
    marginVertical: 10,
  },
  ul: {
    marginTop: 10,
    marginBottom: 10,
  },
  li: {
    fontSize: 16,
    marginBottom: 5,
  },
};

export default ProductPage;
