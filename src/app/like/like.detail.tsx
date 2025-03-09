import { Link } from "expo-router";
import { Text, View } from "react-native"

const LikeDetail = () => {
    return (
        <View>
            <Text>LikeDetail here</Text>
            <Link href={"/like"}>Like back</Link>
        </View>
    )
}

export default LikeDetail;