import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const ProductList = ({ route, navigation }) => {
  const { categoryId, categoryName } = route.params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const username = 'ck_5bcc0f744a83dee987717ff0e392dfe64ab1816e';
      const password = 'cs_ea362dca506ded042d99a09696c06b0e676be588';
      const auth = 'Basic ' + btoa(username + ':' + password);

      const response = await axios.get(
        `https://dev.bedelighted.afucent.com/wp-json/wc/v2/products?category=${categoryId}`,
        {
          headers: {
            Authorization: auth,
          },
        }
      );

      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
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

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductPage', {
          productId: item.id,
        })
      }
      style={styles.productContainer}
    >
      <Image source={{ uri: item.images[0].src }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>₹ {item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.productList}
    />
  );
};

export default ProductList;

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productList: {
    padding: 10,
  },
  productContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
});
