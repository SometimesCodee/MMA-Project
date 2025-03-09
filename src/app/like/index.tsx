import { Link } from "expo-router";
import { Text, View } from "react-native"

const Like = () => {
    return (
        <View>
            <Text>Like here</Text>
            <Link href={"/like/like.detail"}>Like details</Link>
            <Link href={"/"}>Home</Link>
        </View>
    )
}

export default Like;