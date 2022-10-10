import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
  Share,
} from "react-native";
import { getProduct } from "../services/ProductsService";
import { CartContext } from "../CartContext";
//import files from "../assets/fileBase64";

export function ProductDetails({ route }) {
  const myCustomShare = async () => {
    const shareOptions = {
      title: "Zazushowroom",
      message:
        "Visita https://www.zazushowroom.com/ para ver todos mis productos.",
    };
    try {
      const ShareResponse = await Share.share(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log("error-->", error);
    }
  };

  const { productId } = route.params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProduct(productId));
  });

  const { addItemToCart } = useContext(CartContext);

  function onAddToCart() {
    addItemToCart(product.id);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={product.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Button
            color="#d359ff"
            onPress={onAddToCart}
            title="Agregar a la lista"
          />
          <Button color="#16f249" onPress={myCustomShare} title="Compartir" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
});
