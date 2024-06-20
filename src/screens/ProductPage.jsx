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
      const username = 'ck_57108566e3f4d4facbc61bbda4f859d111cb2a43';
      const password = 'cs_1aa90fcf28e75013ebf854f41f04bcfca33a0796';
      const auth = 'Basic ' + btoa(username + ':' + password);

      const response = await axios.get(
        `https://native.bedelighted.afucent.com/wp-json/wc/v2/products/${productId}`,
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
