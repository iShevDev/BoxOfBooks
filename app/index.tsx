import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import BookCard from "../components/cards/BookCard";

const image = require("@/assets/images/background.jpg");
const bookImage = require("@/assets/images/carpenter-book.jpg");

const bookList = [
  {
    id: "0",
    name: "Book 1",
    image: bookImage,
  },
  {
    id: "1",
    name: "Book 2",
    image: bookImage,
  },
  {
    id: "2",
    name: "Book 3",
    image: bookImage,
  },
  {
    id: "3",
    name: "Book 4",
    image: bookImage,
    subtitle: "Coming soon",
  },
  {
    id: "4",
    name: "Book 5",
    image: bookImage,
    subtitle: "Coming soon",
  },
  {
    id: "5",
    name: "Book 6",
    image: bookImage,
    subtitle: "Coming soon",
  },
];

SplashScreen.preventAutoHideAsync();

export default function Home() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Artificially delay for demonstration purposes
        // Remove this if you are fetching data or doing something async in reality
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <ImageBackground
      style={styles.backgroundImg}
      source={image}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.booksContainer}>
          <FlatList
            data={bookList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <BookCard
                name={item.name}
                imagePath={item.image}
                subtitle={item.subtitle}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImg: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  booksContainer: { flexDirection: "row" },
});
