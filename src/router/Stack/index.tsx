import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../screens/Home";
import Poke from "../../screens/Poke";

const { Navigator, Screen } = createNativeStackNavigator()

export default () =>{
    return(
        <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Screen name='Home' component={Home} />
            <Screen name='Poke' component={Poke} />
        </Navigator>
    )
}