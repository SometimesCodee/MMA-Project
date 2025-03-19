import ShareButton from "@/components/share.button";
import ShareInput from "@/components/share.input";
import { Link, router } from "expo-router";
import { useState, useEffect } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import {register} from "@/utils/api"
// import Toast from "react-native-root-toast";
import { Formik } from "formik";
import { RegisterSchema } from "@/utils/validate.schema";
import Toast from "react-native-toast-message";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        gap: 10
    },
})
const SignUpPage = () => {
    const handleSignup = async(name: string, email: string, password: string) => {
        if (!name.trim() || !email.trim() || !password.trim()) {
            Toast.show({
                type: "error",
                text1: "Lỗi!",
                text2: "Vui lòng nhập đầy đủ thông tin!",
                position: "bottom"
            });
            return;
        }
        try {
            const res = await register(name, email, password)
            console.log(res.data);
            if(res.data){
                router.navigate({
                    pathname: "/(auth)/verify",
                    params: {email: email}
                })
                Toast.show({
                    type: "success",
                    text1: "Thành công!",
                    text2: "Đăng kí tài khoản thành công!",
                    position: "bottom"
                });
            }else{
                const m = Array.isArray(res.message) ? res.message[0] : res.message
                Toast.show({
                    type: "error",
                    text1: "Thất bại!",
                    text2: m,
                    position: "bottom"
                });
            }
        } catch (error) {
            console.log(error);
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
                initialValues={{name: "",email: "",password: ""}}
                validationSchema={RegisterSchema}
                onSubmit={(values) => handleSignup(values.name, values.email, values.password)}
            >
                {({errors, touched, handleBlur, handleChange, handleSubmit, values}) => (
                    <View style={styles.container}>
                        <ShareInput 
                            title="Name"
                            onChangeText={handleChange("name")}
                            onBlur={handleBlur("name")}
                            value={values.name}
                            error={errors.name}
                        ></ShareInput>
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
                            title="Đăng ký"
                            onPress={() => handleSubmit()}
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
                )}
            </Formik>
            
        </SafeAreaView>
    )
}

export default SignUpPage;