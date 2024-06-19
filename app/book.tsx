import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";

const App = () => {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    PlaytimeWithHotToddies: require("@/assets/fonts/playtime.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            source={require("@/assets/images/book/book-main-image.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            There once was a carpenter who was building a table.
          </Text>
          <Text style={styles.paragraph}>
            "It is good!" He spoke {"\n"}
            "My father will be well pleased" He praised.
          </Text>
          <Text style={styles.paragraph}>
            "Mother come and see. The table I made for father is complete."
            Jesus said.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5DC",
  },
  container: {
    backgroundColor: "#F5F5DC",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 40,
    backgroundColor: "rgba(235, 235, 235, 0.6)",
    borderRadius: 40,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 24,
    color: "#000",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 0,
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width * 0.5,
    resizeMode: "cover",
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 40,
  },
  paragraph: {
    fontSize: 30,
    textAlign: "left",
    paddingBottom: 20,
    fontFamily: "PlaytimeWithHotToddies",
  },
});

export default App;
