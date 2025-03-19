import ShareButton from "@/components/share.button";
import ShareInput from "@/components/share.input";
import { Link, router } from "expo-router";
import { useState, useEffect } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import {login} from "@/utils/api"
import Toast from "react-native-toast-message";
import { Formik } from "formik";
import { LoginSchema } from "@/utils/validate.schema";
import { useCurrentApp } from "@/context/app.context";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        gap: 10
    },
})
const Login = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { setAppState } = useCurrentApp();
    const handleSignin = async(email: any, password: any) => {
        if (!email.trim() || !password.trim()) {
            Toast.show({
                type: "error",
                text1: "Lỗi!",
                text2: "Vui lòng nhập đầy đủ thông tin!",
                position: "bottom"
            });
            return;
        }
        try {
            setLoading(true);
            const res = await login(email, password)
            setLoading(false);
            if(res.data){
                setAppState(res.data);
                router.replace("/(tabs)")
            }else{
                const m = Array.isArray(res.message) ? res.message[0] : res.message
                Toast.show({
                    type: "error",
                    text1: "Thất bại!",
                    text2: m,
                    position: "bottom"
                });
                if(res.statusCode === 400){
                    router.replace({
                        pathname: "/(auth)/verify",
                        params: {email: email, isLogin: 1}
                    })
                }
            }
        } catch (error) {
            setLoading(false);
            Toast.show({
                type: "error",
                text1: "Thất bại!",
                text2: error as string,
                position: "bottom"
            });
        }
    }
    return (
        <SafeAreaView style={{flex: 1}}>
            <Toast></Toast>
            <Formik 
                initialValues={{email: "", password: ""}}
                validationSchema={LoginSchema}
                onSubmit={(values) => handleSignin(values.email, values.password)}
            >
                {({errors, touched, handleBlur, handleChange, handleSubmit, values}) => (
                    <View style={styles.container}>
                        <ShareInput 
                            title="Email" 
                            keyboardType="email-address"
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            value={values.email}
                            error={errors.email}
                        ></ShareInput>
                        <ShareInput 
                            title="Password" 
                            secureTextEntry={true}
                            onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}
                            value={values.password}
                            error={errors.password}
                        ></ShareInput>
                        <ShareButton
                            isLoading={loading}
                            title="Đăng nhập"
                            onPress={handleSubmit as any}
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
                            <Text>Chưa có tài khoản.</Text>
                            <Link  style={{color: '#66CCCC'}} href={"/(auth)/signup"}>Đăng kí</Link>
                        </View>
                        
                    </View>
                )}
                
            </Formik>
            
        </SafeAreaView>
    )
}

export default Login;