import {Button, Pressable, Text, View } from "react-native";

export default function HomeScreen({navigation}) {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    navigation.navigate('Details');
                }}
            />
        </View>
    )
}