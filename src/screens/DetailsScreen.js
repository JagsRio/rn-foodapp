import React from "react";  
import { Text, View, StyleSheet } from 'react-native';

const DetailsScreen = ( {route} ) =>{
    const {itemId, otherParams} = route.params;

    return (
        <View>
            <Text>Details Screen - {itemId}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default DetailsScreen;