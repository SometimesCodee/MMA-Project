import ShareButton from "@/components/share.button";
import ShareInput from "@/components/share.input";
import { Link, router } from "expo-router";
import { useState, useEffect } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import {register} from "@/utils/api"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        gap: 10
    },
})
const SignUpPage = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSignup = async() => {
        try {
            const res = await register(name, email, password)
            console.log(res.data);
            if(res.data){
                router.navigate("/(auth)/verify")
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <ShareInput 
                    title="Họ tên"
                    value={name}
                    setValue={setName}
                ></ShareInput>
                <ShareInput 
                    title="Email" 
                    keyboardType="email-address"
                    value={email}
                    setValue={setEmail}
                ></ShareInput>
                <ShareInput 
                    title="Password" 
                    secureTextEntry={true}
                    value={password}
                    setValue={setPassword}
                ></ShareInput>
                <ShareButton
                    title="Đăng ký"
                    onPress={() =>handleSignup()}
                    textStyle={{textTransform: "uppercase", fontWeight: "bold"}}
                    pressStyle={{alignSelf: "stretch"}}
                    buttonStyle={{
                        justifyContent: "center",
                        borderRadius: 50,
                        backgroundColor:"#66CCCC",
                        marginTop: 10
                    }}
                ></ShareButton>
                <View style={{flexDirection: 'row', justifyContent: 'center', gap: 5, marginTop: 10}}>
                    <Text>Đã có tài khoản.</Text>
                    <Link  style={{color: '#66CCCC'}} href={"/(auth)/signup"}>Đăng nhập</Link>
                </View>
                
            </View>
        </SafeAreaView>
    )
}

export default SignUpPage;