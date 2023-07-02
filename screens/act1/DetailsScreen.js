import {Button, Pressable, Text, View } from "react-native";

export default function DetailsScreen({navigation}) {
    return (
        <View>
            <Text>Details Screen</Text>
            <Button
                title = "Go to Home"
                onPress={()=>{
                    navigation.navigate('Home');
                }}
            />
        </View>
    )
}