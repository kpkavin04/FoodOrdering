import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Colors from "@/src/constants/Colors";
import { Product } from "@/src/types";
import { Link, useSegments } from "expo-router";

type ProductListItemProps = {
  product: Product;
};

export const defaultPizzaImage =
  "https://notjustdev-dumy.s3.us-east2.amazonaws.com/food/default.png";

const ProductListItem = ({ product }: ProductListItemProps) => {
  const segments = useSegments();
  
  return (
    <Link href={{
        pathname: `/${segments[0]}/menu/[id]`,
        params: { id: product.id },
      }}
      asChild
    >
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image ?? defaultPizzaImage }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}> {product.name} </Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    maxWidth: "50%",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  price: {
    fontSize: 15,
    color: Colors.light.tint,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
