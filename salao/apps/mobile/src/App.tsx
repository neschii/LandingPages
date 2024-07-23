import React from 'react';
import {Text, View } from 'react-native';
import { somar } from "@salao/core"

export default function App( ) {
    return ( 
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
            <Text> App {somar(32, 48)}</Text>
        </View>
    )

}