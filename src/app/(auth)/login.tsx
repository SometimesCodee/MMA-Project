import { Link } from "expo-router";
import { Text, View } from "react-native"

const Login = () => {
    return (
        <View>
            <Text>hello login</Text>
            <Link href={'/'}>Back home</Link>
        </View>
    )
}

export default Login;