
import EmptyState from "./EmptyState";
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FormField from "./FormField";
import CustomButton from "./CustomButton";
import InfoBox from "./InfoBox";
import Loader from "./Loader";
import Accident from '../components/Accident'
// import Breathlessness from '../components/Breathlessness'
// import Breathlessness from "./Breathlessness";
import Breathlessness from '../components/Breathlessness'
import Chestpain from '../components/Chestpain'
import Unconsciousness from '../components/Unconsciousness'
import Profile from "../app/(tabs)/profile";



const Stack = createNativeStackNavigator();
export default function index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Accident">
      
      <Stack.Screen name="Accident" component={Accident} />
        <Stack.Screen name="Breathlessness" component={Breathlessness} />
        <Stack.Screen name="Chestpain" component={Chestpain} />
        <Stack.Screen name="Unconsciousness" component={Unconsciousness} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export {

  FormField,
  CustomButton,
  InfoBox,
  Loader,
  EmptyState,
};
