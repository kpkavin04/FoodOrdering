import {
  StyleSheet,
  Text,
  View,
  Image
 } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';

const product0 = products[1];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product0.image }} style={styles.image} />
      <Text style={styles.title}> {product0.name} </Text>
      <Text style={styles.price}>${product0.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical:10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  price: {
    fontSize: 15,
    color: Colors.light.tint,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
