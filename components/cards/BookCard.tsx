import React from "react";
import { useFonts } from "expo-font";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  Pressable,
  Animated,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  book: { name: string };
};

interface BookCardProps {
  name: string;
  imagePath: ImageSourcePropType;
  subtitle?: string;
}

const BookCard: React.FC<BookCardProps> = ({ name, subtitle, imagePath }) => {
  const [fontsLoaded] = useFonts({
    PlaytimeWithHotToddies: require("@/assets/fonts/playtime.ttf"),
  });

  const scaleValue = React.useRef(new Animated.Value(1)).current;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    navigation.navigate("book", { name });
  };

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={handlePress}
      >
        <Animated.View
          style={[styles.card, { transform: [{ scale: scaleValue }] }]}
        >
          <Text style={styles.bookTitle}>{name}</Text>
          {subtitle && <Text style={styles.bookSubTitle}>{subtitle}</Text>}
          <View style={styles.image}>
            <Image source={imagePath} style={styles.bookImage} />
          </View>
        </Animated.View>
      </Pressable>
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
    alignItems: "center",
  },
  image: {
    backgroundColor: "rgba(235, 235, 235, 0.6)",
    borderRadius: 40,
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
});

export default BookCard;
