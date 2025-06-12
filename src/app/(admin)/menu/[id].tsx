import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Text, Image, StyleSheet, View, Pressable, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import products from "@/assets/data/products";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import { useState } from "react";
import Button from "@/src/components/Button";
import { useCart } from "@/src/providers/CartProvider";
import { PizzaSize } from "@/src/types";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const router = useRouter();

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <Text> Product not found</Text>;
  }
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />

      <Text style={styles.price}>
        Price of {product.name} pizza is: ${product.price}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 40,
  },
});

export default ProductDetailsScreen;
