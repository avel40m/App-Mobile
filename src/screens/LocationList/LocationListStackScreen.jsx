import { Text, View } from "react-native"
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { LocationListScreen } from "./LocationListScreen";
import { LocationDetailsScreen } from "../LocationDetails/LocationDetailsScreen";

const LocationListStack = createNativeStackNavigator();

export const LocationListStackScreen = () => {
    return (
        <LocationListStack.Navigator screenOptions={{headerShown:false}}>
            <LocationListStack.Screen name="ExplorarLista" component={LocationListScreen} />
            <LocationListStack.Screen name="Detalle" component={LocationDetailsScreen} />
        </LocationListStack.Navigator>
    )
}