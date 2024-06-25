import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Collapsible from 'react-native-collapsible';
import axios from 'axios';

const CategoryScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const username = 'ck_5bcc0f744a83dee987717ff0e392dfe64ab1816e';
      const password = 'cs_ea362dca506ded042d99a09696c06b0e676be588';
      const auth = 'Basic ' + btoa(username + ':' + password);

      const response = await axios.get(
        'https://dev.bedelighted.afucent.com/wp-json/wc/v2/products/categories',
        {
          headers: {
            Authorization: auth,
          },
        }
      );

      setCategories(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

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
    <ScrollView style={styles.container}>
      {categories.map((category) => (
        <Accordion
          key={category.id}
          title={category.name}
          categoryId={category.id}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
};

const Accordion = ({ title, categoryId, navigation }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSubcategories = async () => {
    setLoading(true);
    try {
      const username = 'ck_5bcc0f744a83dee987717ff0e392dfe64ab1816e';
      const password = 'cs_ea362dca506ded042d99a09696c06b0e676be588';
      const auth = 'Basic ' + btoa(username + ':' + password);

      const response = await axios.get(
        `https://dev.bedelighted.afucent.com/wp-json/wc/v2/products/categories?parent=${categoryId}`,
        {
          headers: {
            Authorization: auth,
          },
        }
      );

      setSubcategories(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handlePress = () => {
    setIsCollapsed(!isCollapsed);
    if (isCollapsed) {
      fetchSubcategories();
    }
  };

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity onPress={handlePress} style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.toggleIcon}>{isCollapsed ? '+' : '-'}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.content}>
          {loading ? (
            <Text>Loading...</Text>
          ) : error ? (
            <Text>Error: {error}</Text>
          ) : (
            subcategories.map((subcategory) => (
              <TouchableOpacity
                key={subcategory.id}
                onPress={() =>
                  navigation.navigate('SubcategoryScreen', {
                    subcategoryId: subcategory.id,
                    subcategoryName: subcategory.name,
                  })
                }
                style={styles.subItem}
              >
                <Text>{subcategory.name}</Text>
              </TouchableOpacity>
            ))
          )}
        </View>
      </Collapsible>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  accordionContainer: {
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 16,
  },
  toggleIcon: {
    fontSize: 16,
  },
  content: {
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  subItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
