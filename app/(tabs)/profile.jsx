import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { icons } from "../../constants";
import useAppwrite from "../../lib/useAppwrite";
import { getUserPosts, signOut } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import { EmptyState, InfoBox, VideoCard } from "../../components";
import { useNavigation } from "@react-navigation/native";
// import { Colors } from "react-native/Libraries/NewAppScreen";
// import { Video } from "expo-av";

const Profile = () => {
  const navigation = useNavigation();
  const { user, setUser, setIsLogged } = useGlobalContext();
  const { data: contact_number } = useAppwrite(() => getUserPosts(user.$id));

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);

    router.replace("/sign-in");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#FAF3F0" }} className="h-full">
      <FlatList
        data={contact_number}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            contact_number={item.contact_number}
            // video={item.video}
            creator={item.creator.username}
            avatar={item.creator.avatar}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyState
            // title="No contacts Found"
            subtitle="Save contacts in this profile"
            subtitleStyle={{ color: "black" }}
          />
        )}
        ListHeaderComponent={() => (
          <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              onPress={logout}
              className="flex w-full items-end mb-5"
            >
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>

            <View className="w-16 h-16 border rounded-lg flex justify-center items-center">
              <Image
                source={{ uri: user?.avatar }}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>

            <InfoBox
              title={user?.username}
              containerStyles="mt-1"
              titleStyles="text-lg"
            />
            <InfoBox
              title={user?.email}
              containerStyles="mt-1"
              titleStyles="text-lg"
            />

            <View className="mt-3 flex flex-col">
              <InfoBox
                style={{ ba: "black" }}
                title={contact_number.length || 3}
                subtitle="Contacts saved"
                titleStyles="text-xl"
                containerStyles="mb-2"
              />
            </View>
            <View style={styles.container}>
              {/* <Text style={styles.headerText}>Hello Firos</Text> */}
              <Text style={styles.subHeaderText}>Quick Aid</Text>
              <View style={styles.grid}>
                <TouchableOpacity
                  style={[styles.box, styles.boxPolice]}
                  onPress={() => Linking.openURL('tel:100')}
                >
                  <Icon name="local-police" size={50} color="#fff" />
                  <Text style={styles.boxText}>Police</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.box, styles.boxFire]}
                  onPress={() => Linking.openURL('tel:102')}
                >
                  <Icon name="fire-extinguisher" size={50} color="#fff" />
                  <Text style={styles.boxText}>Fire & Safety</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.box, styles.boxHealth]}
                  onPress={() => Linking.openURL('tel:102')}
                >
                  <Icon name="local-hospital" size={50} color="#fff" />
                  <Text style={styles.boxText}>Health Care</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.box, styles.boxAlarm]}
                  onPress={() => Linking.openURL('tel:102')}
                >
                  <Icon name="alarm" size={50} color="#fff" />
                  <Text style={styles.boxText}>Alarm</Text>
                </TouchableOpacity>
              </View>

              {/* <Text style={styles.footerText}>Nearby Friends</Text> */}
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    paddingHorizontal: 0,
  },
  headerText: {
    padding: 10,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 18,
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  },
  box: {
    width: 150,
    height: 95,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    fontSize: 15,
    color: "#FAF3F0",
    marginTop: 10,
  },
  boxPolice: {
    backgroundColor: "#F16969",
  },
  boxFire: {
    backgroundColor: "#F16969",
  },
  boxHealth: {
    backgroundColor: "#F16969",
  },
  boxAlarm: {
    backgroundColor: "#F16969",
  },
  footerText: {
    fontSize: 18,
    marginTop: 20,
  },
});
export default Profile;
