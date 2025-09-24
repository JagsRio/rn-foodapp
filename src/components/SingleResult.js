import react from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SingleResult = ( {result} ) =>{

    if (!result){
        return null;
    }
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Details', {
          id: result.id,
          otherParam: 'anything you want here',
        });
      };

    return(
        <View style={styles.viewStyle}>
            <TouchableOpacity onPress={handlePress}>
                <Image style={styles.imgStyle} source={{ uri: result.image_url }} />
                <Text style={styles.nameStyle}>
                    {result.name}
                </Text>
                <Text style={styles.bodyStyle}>
                    {result.rating} Stars, {result.review_count} Reviews
                </Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle:{
        marginLeft:15, marginRight:15,marginBottom:15
    },
    imgStyle:{
        height:120, width:180, borderRadius:10,
    },
    nameStyle:{
        fontSize:18, fontWeight:'bold',
    },
    bodyStyle:{
        fontSize:14,
    }
});

export default SingleResult;