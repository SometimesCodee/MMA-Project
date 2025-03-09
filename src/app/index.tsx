import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import ShareButton from "../components/share.button"
import { APP_COLOR } from "../utils/constant"
import bg from '@/assets/auth/bg7.png';
import fbLogo from '@/assets/auth/facebook.png';
import googleLogo from '@/assets/auth/google.png';
import { Link } from "expo-router";
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    welcomeText:{
        flex: 0.6,
        alignItems: 'flex-start',
        marginTop: 100,
        paddingLeft: 20
    },
    welcomebtn:{
        flex: 0.4,
        gap: 20
    },
    heading: {
        fontSize: 40,
        fontWeight: "600"
    },
    body: {
        fontSize: 30,
        color: APP_COLOR.YELLOW,
        marginVertical: 10,
        fontWeight: "bold"
    },

    btnContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 30,
    },
    btnContent: {
        backgroundColor: "green",
        padding: 20,
        borderRadius: 10,
        alignSelf: "flex-start"
    },
    btnText: {
        textTransform: "uppercase",
    }
})
const WelcomePage = () => {
    return (
        <ImageBackground source={bg} style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.welcomeText}>
                    <Text style={styles.heading}>Welcom to</Text>
                    <Text style={styles.body}>FoodHub</Text>
                </View>
                <View style={styles.welcomebtn}>
                    <View style={{
                        borderBottomColor: 'red',
                        marginHorizontal: 50,
                        marginTop: 40,
                        marginBottom: 20
                    }}>
                        <Text style={{
                            padding: 10,
                            textAlign: "center",
                            alignSelf: "center",
                            position: "relative",
                            top: 20
                        }}>
                        </Text>
                    </View>
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
                    <View>
                        <ShareButton
                            title="Đăng nhập với email"
                            onPress={() => {console.log('pressed')}}
                            textStyle={{paddingVertical: 5, fontWeight: "bold"}}
                            pressStyle={{alignSelf: "stretch"}}
                            buttonStyle={{
                                justifyContent: "center",
                                borderRadius: 50,
                                marginHorizontal: 55,
                                paddingVertical: 10
                            }}
                        ></ShareButton>
                    </View>
                    <Link  style={{textAlign: "center"}} href={"/(auth)/signup"}><Text>Chưa có tài khoản? Đăng ký</Text></Link>
                </View>
            </View>
        </ImageBackground>
    )
}

export default WelcomePage;