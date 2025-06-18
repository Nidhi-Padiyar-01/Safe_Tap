import React from 'react';
import { View, Button, Alert, StyleSheet,TouchableOpacity,Text } from 'react-native';
import * as SMS from 'expo-sms';
import Icon from "react-native-vector-icons/FontAwesome";


const home = () => {
  const sendSMS = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      try {
        const  result  = await SMS.sendSMSAsync(
          ['8310669294','6363105736','8296259270'],
          'Hello! I am in an emergency situation' 
        );
        Alert.alert('Sent', "Message sent succcessfully");
      } catch (error) {
        console.error('Error sending SMS:', error); 
        Alert.alert('Error', `An error occurred: ${error.message}`);
      }
    } else {
      Alert.alert('Error', 'SMS service is not available on this device');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <Text style={styles.contains} >Having an emergency!? </Text>
        <Text style={styles.contains2}>Press the button below help will arrive soon</Text>
      </View>
      
    <TouchableOpacity style={styles.buttonOuterCircle} onPress={sendSMS}>
    <View style={styles.buttonInnerCircle}>
              <Icon name="hand-pointer-o" size={50} color="#fff" />
            </View>
      
    </TouchableOpacity>
    <Text style={styles.contains2}>                                                         Don't panic. Help will en route</Text>
    
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  // justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FAF3F0',
},
contain:{
  paddingVertical: 80,
  paddingHorizontal: 40,
  fontSize:60
},
contains2:{
  paddingTop:30,
  paddingHorizontal: 40,
  paddingTop:65,
  fontSize:20,
  textAlign:'center',
  color:'grey'
},

contains:{
  fontSize:30

},
buttonOuterCircle: {
  width: 200,
  height: 200,
  borderRadius: 100,
  backgroundColor: "rgba(255, 0, 0, 0.2)",
  justifyContent: "center",
  alignItems: "center",
},
buttonInnerCircle: {
  width: 150,
  height: 150,
  borderRadius: 80,
  backgroundColor: "#FF2C2C",
  justifyContent: "center",
  alignItems: "center",
},

});

export default home;