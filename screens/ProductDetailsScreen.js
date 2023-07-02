import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import styles from './styles';

export default function App() {
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Apple iPhone 14",
      price: "799",
      description: "Smartphone by Apple",
    },
    {
      id: "2",
      name: "Samsung Galaxy S23",
      price: "699",
      description: "Flagship phone by Samsung",
    },
    {
      id: "3",
      name: "Sony WH-1000XM5",
      price: "399",
      description: "Noise-canceling headphones",
    },
  ]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const addProduct = () => {
    if (name.trim() === '' || price.trim() === '') {
      alert('Name and price are required!');
      return;
    }

    const newProduct = {
      id: String(products.length + 1),
      name: name.trim(),
      price: price.trim(),
      description: description.trim()
    };

    setProducts([...products, newProduct]);
    setName('');
    setPrice('');
    setDescription('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
    </View>
  );
}