import react from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text>Home Screen Demo</Text>
            <Button title='Go to Search Screen'
                onPress={()=> navigation.navigate("Search") }
            />
        </View>
    )
};

const styles = StyleSheet.create();

export default HomeScreen;
