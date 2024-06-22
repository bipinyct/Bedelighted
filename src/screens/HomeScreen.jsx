import React, { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ScrollView,
  ImageBackground,
  Button,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import axios from 'axios';
import Logo from '../assets/bedelighted-logo.png';

const HomeScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      const username = 'ck_57108566e3f4d4facbc61bbda4f859d111cb2a43';
      const password = 'cs_1aa90fcf28e75013ebf854f41f04bcfca33a0796';
      const auth = 'Basic ' + btoa(username + ':' + password);

      const response = await axios.get(
        'https://native.bedelighted.afucent.com/wp-json/wc/v2/products/categories',
        {
          headers: {
            Authorization: auth,
          },
        }
      );

      const selectedCategories = response.data.slice(0, 4);
      setCategories(selectedCategories);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    try {
      const username = 'ck_57108566e3f4d4facbc61bbda4f859d111cb2a43';
      const password = 'cs_1aa90fcf28e75013ebf854f41f04bcfca33a0796';
      const auth = 'Basic ' + btoa(username + ':' + password);

      const response = await axios.get(
        'https://native.bedelighted.afucent.com/wp-json/wc/v2/products',
        {
          headers: {
            Authorization: auth,
          },
        }
      );

      setProducts(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.catContainer}>
      {item.image && item.image.src ? (
        <Image source={{ uri: item.image.src }} style={styles.catImage} />
      ) : (
        <View style={styles.catImagePlaceholder}>
          <Text>No Image</Text>
        </View>
      )}
      <Text style={styles.catText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('Product', { productId: item.id })}
    >
      {item.images && item.images[0] && item.images[0].src ? (
        <Image source={{ uri: item.images[0].src }} style={styles.categoryImages} />
      ) : (
        <View style={styles.catImagePlaceholder}>
          <Text>No Image</Text>
        </View>
      )}
      <View style={styles.textContainer}>
        <Text>₹ {item.price}</Text>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
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
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Image style={styles.logo} source={Logo} />
          <View style={styles.iconContainer}>
            <Ionicons name="person-outline" size={24} color="#3F6065" />
            <SimpleLineIcons name="handbag" size={24} color="#3F6065" />
          </View>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="I'm shopping for..."
          />
          <Ionicons
            name="search"
            size={24}
            color="#3F6065"
            style={styles.searchIcon}
          />
        </View>
      </View>
      <Image
        source={{
          uri: 'https://i.pinimg.com/474x/3d/8a/0f/3d8a0f264ea32ac3b235c0ba086ae795.jpg',
        }}
        style={styles.carouselImage}
      />
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/2537930/pexels-photo-2537930.jpeg?auto=compress&cs=tinysrgb&w=600',
        }}
        style={styles.bannerImage}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          paddingHorizontal: 10,
          padding: 10,
        }}
      >

  Deals of the Day
</Text>

<View style={styles.categoryContainer}>
  {products.slice(0, 2).map(product => (
    <TouchableOpacity
      style={styles.itemContainer}
      key={product.id}
      onPress={() => navigation.navigate('Product', { productId: product.id })}
    >
      {product.images && product.images[0] && product.images[0].src ? (
        <Image source={{ uri: product.images[0].src }} style={styles.categoryImages} />
      ) : (
        <View style={styles.catImagePlaceholder}>
          <Text>No Image</Text>
        </View>
      )}
      <View style={styles.textContainer}>
        <Text>₹ {product.price}</Text>
        <Text style={styles.itemText}>{product.name}</Text>
      </View>
    </TouchableOpacity>
  ))}
  </View>

      <View style={styles.banner2Container}>
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/2537930/pexels-photo-2537930.jpeg?auto=compress&cs=tinysrgb&w=600',
          }}
          style={styles.banner2Image}
          imageStyle={{ borderRadius: 4 }}
        >
          <View style={styles.buttonContainer}>
            <Button
              title="Click Me"
              onPress={() => alert('Button Pressed!')}
              color="#3F6065"
            />
          </View>
        </ImageBackground>
      </View>
      {categories.map(category => (
        <View key={category.id}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{category.name}</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>
          <FlatList
            data={products.filter(product => product.categories.some(cat => cat.id === category.id)).slice(0, 2)}
            renderItem={renderProductItem}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryContainer}
          />
        </View>
      ))}
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </ScrollView>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F6',
  },
  headerContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: 50,
    width: 150,
    resizeMode: 'contain',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  searchInput: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    fontSize: 16,
    flex: 1,
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
  },
  carouselImage: {
    width: '100%',
    height: Dimensions.get('window').height * 0.3,
    marginTop: 10,
  },
  bannerImage: {
    width: '100%',
    height: Dimensions.get('window').height * 0.2,
    marginTop: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10,
  },
  itemContainer: {
    width: Dimensions.get('window').width / 2 - 20,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  categoryImages: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  banner2Container: {
    margin: 10,
  },
  banner2Image: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '80%',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 16,
    color: '#3F6065',
  },
  catContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '50%',
    padding: 10,
  },
  catImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  catImagePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  catText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
