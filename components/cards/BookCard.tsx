import React from "react";
import { useFonts } from "expo-font";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

interface BookCardProps {
  name: string;
  imagePath: ImageSourcePropType;
  subtitle?: string;
}

const BookCard: React.FC<BookCardProps> = ({
  name = "",
  subtitle = "",
  imagePath,
}) => {
  const [fontsLoaded] = useFonts({
    PlaytimeWithHotToddies: require("../../assets/fonts/playtime.ttf"),
  });

  const titleStyles = subtitle
    ? [styles.bookTitle, { paddingBottom: 0 }]
    : styles.bookTitle;
  return (
    <View style={styles.container}>
      <Text style={titleStyles}>{name}</Text>
      {subtitle && <Text style={styles.bookSubTitle}>{subtitle}</Text>}
      <View style={styles.card}>
        <Image source={imagePath} style={styles.bookImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginHorizontal: 16,
  },
  card: {
    backgroundColor: "rgba(235, 235, 235, 0.6)",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  bookTitle: {
    fontSize: 50,
    fontFamily: "PlaytimeWithHotToddies",
    color: "#fff",
    paddingBottom: 20,
  },
  bookSubTitle: {
    fontSize: 40,
    fontFamily: "PlaytimeWithHotToddies",
    color: "#fff",
    paddingBottom: 10,
  },
  bookImage: {
    width: 250,
    height: 250,
    margin: 20,
  },
  ageText: {
    fontSize: 18,
    fontFamily: "SpaceMono",
    color: "#000",
  },
});

export default BookCard;
