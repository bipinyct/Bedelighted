import React from 'react';
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
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// import Carousel from 'react-native-snap-carousel';
import Logo from '../assets/bedelighted-logo.png';

const categories = [
  {
    id: '1',
    title: 'Electronics',
    image:
      'https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '2',
    title: 'Clothing',
    image:
      'https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '3',
    title: 'Computers',
    image:
      'https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '4',
    title: 'Home & Kitchen',
    image:
      'https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '5',
    title: 'Health & Beauty',
    image:
      'https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '6',
    title: 'Jewelry & Watch',
    image:
      'https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const HomeScreen = () => {
  const renderItem = ({item}) => (
    <View style={styles.catContainer}>
      <Image source={{uri: item.image}} style={styles.catImage} />
      <Text style={styles.catText}>{item.title}</Text>
    </View>
  );
  // const images = [
  //   {
  //     uri: 'https://i.pinimg.com/474x/3d/8a/0f/3d8a0f264ea32ac3b235c0ba086ae795.jpg',
  //   },
  //   {
  //     uri: 'https://i.pinimg.com/474x/c1/c1/99/c1c199acd872966c6b7a82b468fb1900.jpg',
  //   },
  //   {
  //     uri: 'https://i.pinimg.com/564x/28/60/07/286007f9f181ef42a310fb5ef7d9e36e.jpg',
  //   },
  // ];

  // const renderItem = ({item}) => (
  //   <View style={styles.carouselItem}>
  //     <Image source={{uri: item.uri}} style={styles.carouselImage} />
  //   </View>
  // );

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
        {/* Carousal */}
      </View>
      {/* <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth * 0.8}
      /> */}
      <Image
        source={{
          uri: 'https://i.pinimg.com/474x/3d/8a/0f/3d8a0f264ea32ac3b235c0ba086ae795.jpg',
        }}
        style={styles.carouselImage}
      />

      {/* Banner */}
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/2537930/pexels-photo-2537930.jpeg?auto=compress&cs=tinysrgb&w=600',
        }}
        style={styles.bannerImage}
      />
      {/* Deals of the day */}
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          paddingHorizontal: 10,
          padding: 10,
        }}>
        Deals of the Day
      </Text>
      <View style={styles.categoryContainer}>
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/3d/8a/0f/3d8a0f264ea32ac3b235c0ba086ae795.jpg',
            }}
            style={styles.categoryImages}
          />
          <View style={styles.textContainer}>
            <Text>₹ 300</Text>
            <Text style={styles.itemText}>Lipstick</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/3d/8a/0f/3d8a0f264ea32ac3b235c0ba086ae795.jpg',
            }}
            style={styles.categoryImages}
          />
          <View style={styles.textContainer}>
            <Text>₹ 300</Text>
            <Text style={styles.itemText}>Lipstick</Text>
          </View>
        </View>
      </View>
      {/* Banner2 */}
      <View style={styles.banner2Container}>
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/2537930/pexels-photo-2537930.jpeg?auto=compress&cs=tinysrgb&w=600',
          }}
          style={styles.banner2Image}
          imageStyle={{borderRadius: 4}}>
          <View style={styles.buttonContainer}>
            <Button
              title="Click Me"
              onPress={() => alert('Button Pressed!')}
              color="#3F6065"
            />
          </View>
        </ImageBackground>
      </View>
      {/* Main Categories */}
      <View style={styles.container}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
        />
      </View>
      {/* SkinCare categories */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            padding: 10,
          }}>
          Skin Care
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            padding: 10,
          }}>
          View All
        </Text>
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/3d/8a/0f/3d8a0f264ea32ac3b235c0ba086ae795.jpg',
            }}
            style={styles.categoryImages}
          />
          <View style={styles.textContainer}>
            <Text>₹ 300</Text>
            <Text style={styles.itemText}>Lipstick</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/3d/8a/0f/3d8a0f264ea32ac3b235c0ba086ae795.jpg',
            }}
            style={styles.categoryImages}
          />
          <View style={styles.textContainer}>
            <Text>₹ 300</Text>
            <Text style={styles.itemText}>Lipstick</Text>
          </View>
        </View>
      </View>
      {/* Hair Care */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            padding: 10,
          }}>
          Hair Care
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            padding: 10,
          }}>
          View All
        </Text>
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/3d/8a/0f/3d8a0f264ea32ac3b235c0ba086ae795.jpg',
            }}
            style={styles.categoryImages}
          />
          <View style={styles.textContainer}>
            <Text>₹ 300</Text>
            <Text style={styles.itemText}>Lipstick</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/3d/8a/0f/3d8a0f264ea32ac3b235c0ba086ae795.jpg',
            }}
            style={styles.categoryImages}
          />
          <View style={styles.textContainer}>
            <Text>₹ 300</Text>
            <Text style={styles.itemText}>Lipstick</Text>
          </View>
        </View>
      </View>
      {/* Fragrance */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            padding: 10,
          }}>
          Fragrance
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            padding: 10,
          }}>
          View All
        </Text>
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/3d/8a/0f/3d8a0f264ea32ac3b235c0ba086ae795.jpg',
            }}
            style={styles.categoryImages}
          />
          <View style={styles.textContainer}>
            <Text>₹ 300</Text>
            <Text style={styles.itemText}>Lipstick</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/3d/8a/0f/3d8a0f264ea32ac3b235c0ba086ae795.jpg',
            }}
            style={styles.categoryImages}
          />
          <View style={styles.textContainer}>
            <Text>₹ 300</Text>
            <Text style={styles.itemText}>Lipstick</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#C6DDED',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  logo: {
    height: 100,
    width: 100,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 15,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 10,
    width: '100%',
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
  searchIcon: {
    padding: 6,
    color: 'white',
    backgroundColor: '#3F6065',
  },
  carouselItem: {
    // borderRadius: 10,
    // overflow: 'hidden',
  },
  carouselImage: {
    width: '100%',
    height: 350,
    margin: 10,
    // marginRight: 20,
    borderRadius: 4,
  },
  bannerImage: {
    width: '100%',
    height: 250,
    borderRadius: 4,
    margin: 10,
  },
  categoryContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemContainer: {
    alignItems: 'center',
  },
  categoryImages: {
    height: 190,
    width: 190,
    borderRadius: 4,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: '#007FFF',
  },
  banner2Image: {
    width: '100%',
    height: 250,
    borderRadius: 4,
    margin: 10,
  },
  banner2Container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner2Image: {
    width: '100%',
    height: 250,
    borderRadius: 4,
    margin: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    // paddingHorizontal: 20,
  },
  buttonContainer: {
    // backgroundColor: '#3F6065',
    borderRadius: 4,
    padding: 5,
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  catContainer: {
    // flex: 1,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  catImage: {
    width: 150,
    height: 180,
    borderRadius: 8,
  },
  catText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});
