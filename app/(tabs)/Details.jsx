  import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { mediaData } from "../mediaData"; // Adjust the import path if needed

const Details = () => {
  const route = useRoute();
  const { topic, info } = route.params;

  const media = mediaData[topic] || { images: [] };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>{topic}</Text>
      <Text style={styles.infoText}>{info}</Text>

      {/* Render Images */}
      {media.images.length > 0 && (
        <View style={styles.mediaContainer}>
          <Text style={styles.mediaTitle}>Steps to follow:</Text>
          <FlatList
            data={media.images}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Image
                source={typeof item === "string" ? { uri: item } : item}
                style={styles.image}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  headerText: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  mediaContainer: {
    width: "100%",
    marginHertical: 10,
  },
  mediaTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 340,
    height: 350,
    marginHorizontal: 5,
  },
});

export default Details;