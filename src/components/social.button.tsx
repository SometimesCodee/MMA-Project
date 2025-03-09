import { Image, View, StyleSheet } from "react-native"
import ShareButton from "./share.button"
import fbLogo from '@/assets/auth/facebook.png';
import googleLogo from '@/assets/auth/google.png';
const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 30,
    },
})
export const SocialButton = () => {
    return (
        <View style={styles.btnContainer}>
            <ShareButton
                title="Facebook"
                onPress={() => {console.log('pressed')}}
                textStyle={{textTransform: "uppercase"}}
                pressStyle={{alignSelf: "stretch"}}
                buttonStyle={{
                    justifyContent: "center",
                    borderRadius: 50,
                    backgroundColor:"#ffff"
                }}
                icon={
                    <Image source={fbLogo}></Image>
                }
            ></ShareButton>

            <ShareButton
                title="Google"
                onPress={() => {console.log('pressed')}}
                textStyle={{textTransform: "uppercase"}}
                pressStyle={{alignSelf: "stretch"}}
                buttonStyle={{
                    justifyContent: "center",
                    borderRadius: 50,
                    backgroundColor:"#ffff"
                }}
                icon={
                    <Image source={googleLogo}></Image>
                }
            ></ShareButton>
        </View>
    )
}