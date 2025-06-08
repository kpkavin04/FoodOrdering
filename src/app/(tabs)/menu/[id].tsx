import { Stack, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: "Details of pizza " + id }} />

      <Text style={{ fontSize: 20 }}>Product details for id: {id}</Text>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;
