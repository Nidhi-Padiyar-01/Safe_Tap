import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { images } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const Index = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>What Happened!?</Text>
      <View style={styles.top}>
        <Image style={styles.image} source={images.logo4} />
        <Text style={styles.text}>Accident</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Details", {
              topic: "Accident",
              info: "1. Ensure Safety First: Move to a safe location, prevent further accidents with hazard lights or flares.\n\n2. Check for Injuries: Assess yourself and others, provide basic first aid.\n\n3. Call Emergency Services: Dial 911, provide clear information.\n\n4. Assist the Injured: Stay calm, reassure, do not move severely injured.\n\n5. Document the Scene: Take photos, collect information.\n\n6. Cooperate with Authorities: Provide accurate information, follow instructions.\n\n7. Notify Insurance: Report the accident, provide necessary documents.\n\n8. Seek Medical Attention: Even if you feel fine, get a medical check-up.\n\n9. Follow Up: Keep records, consult legal advice if needed.\n\n"
            })
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Details</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.top}>
        <Image style={styles.image} source={images.logo1} />
        <Text style={styles.text}>Breathlessness</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Details", {
              topic: "Breathlessness",
              info: "1.Relaxed Sitting: Sit comfortably with your back straight and feet flat on the ground.\n\n2.Forward Lean Standing: Stand leaning forward onto a support, like a chair.\n\n3.Backward Lean Standing: Stand leaning backward against a wall for support.\n\n4.Forward Lean Sitting: Sit leaning forward with your elbows resting on your knees.\n\n5.Forward Lean Sitting (Resting on Table): Sit leaning forward with your head and arms resting on a table.\n\n6.High Side Lying: Lie on your side with your head elevated by pillows for support.",
            })
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Details</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.top}>
        <Image style={styles.image} source={images.logo3} />
        <Text style={styles.text}>Chest pain</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Details", {
              topic: "Chest Pain",
              info: "1.Call Emergency: Dial emergency services for immediate assistance.\n\n,2.Check Vital Signs: Assess the victim’s responsiveness and breathing.\n\n,3.Lift Chin Check Breathing: Open the airway by tilting the head back and lifting the chin, then check for breathing.\n\n4.Give Rescue Breaths: Provide two rescue breaths to the victim.\n\n5.Perform CPR: Administer 15 chest compressions.\n\n6.Wait for Help: Continue to assist the victim and wait for emergency responders to arrive."
            })
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Details</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.top}>
        <Image style={styles.image} source={images.logo2} />
        <Text style={styles.text}>Unconsciousness</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Details", {
              topic: "Unconsciousness",
              info: "1.Check for Responsiveness: Gently tap and shout to check if the person is responsive.\n\n2.Call Emergency Services: If there is no response, call emergency services immediately.\n\n3.Check for Breathing: Look, listen, and feel for normal breathing.\n\n4.Provide CPR: If the person is not breathing normally, begin CPR with chest compressions and rescue breaths."
            })
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Details</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  top: {
    backgroundColor: "#FF8D8936",
    height: 120,
    width: '95%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flexShrink: 1,
    marginLeft: 10,
  },
  title: {
    padding: 20,
    textAlign: "center",
    fontSize: 40,
    marginVertical: 30,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  button: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white",
  },
  buttonText: {
    fontSize: 18,
    color: "black",
  },
});

export default Index;
