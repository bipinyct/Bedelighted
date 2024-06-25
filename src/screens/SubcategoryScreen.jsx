import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const SubcategoryScreen = ({ route, navigation }) => {
  const { subcategoryId, subcategoryName } = route.params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const username = 'ck_5bcc0f744a83dee987717ff0e392dfe64ab1816e';
      const password = 'cs_ea362dca506ded042d99a09696c06b0e676be588';
      const auth = 'Basic ' + btoa(username + ':' + password);
      let allProducts = [];
      let page = 1;
      let response;
      do {
        response = await axios.get(
          `https://dev.bedelighted.afucent.com/wp-json/wc/v2/products?category=${subcategoryId}&page=${page}&per_page=100`,
          {
            headers: {
              Authorization: auth,
            },
          }
        );
        allProducts = [...allProducts, ...response.data];
        page++;
      } while (response.data.length > 0);

      setProducts(allProducts);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => navigation.navigate('ProductPage', { productId: item.id })}
    >
      <Image source={{ uri: item.images[0].src }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>₹ {item.price}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.grid}
    />
  );
};

export default SubcategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  productItem: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
  },
});
