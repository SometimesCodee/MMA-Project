import LoadingOverlay from "@/components/overlay";
import { resendCodeAPI, verifyCodeAPI } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Text, View, StyleSheet, Keyboard } from "react-native"
import OTPTextView from 'react-native-otp-textinput'
// import Toast from "react-native-root-toast";
import Toast from "react-native-toast-message";
const styles = StyleSheet.create({
    container:{
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    heading: {
        fontSize: 25,
        fontWeight: "600",
        marginVertical: 20
    }
})
const VerifyPage = () => {
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const otpRef = useRef<OTPTextView>(null);
    const [code, setCode] = useState<string>("")
    const { email, isLogin } = useLocalSearchParams();
    const verifyCode = async () => {
        setIsSubmit(true);
        Keyboard.dismiss();
        const res = await verifyCodeAPI(email as string, code);
        setIsSubmit(false);
        try{
            if(res.data){
                otpRef?.current?.clear();
                Toast.show({
                    type: "success",
                    text1: "Thành công!",
                    text2: "Kích hoạt tài khoản thành công!",
                    position: "bottom"
                });
                if (isLogin) { 
                    router.replace("/(tabs)");
                } else {
                    router.replace("/(auth)/login");
                }
                
            }else{
                Toast.show({
                    type: "error",
                    text1: "Lỗi!",
                    text2: res?.message || "Có lỗi xảy ra, vui lòng thử lại!",
                    position:"bottom"
                });
            }
        }catch(e){
            setIsSubmit(false);
            Toast.show({
                type: "error",
                text1: "Lỗi kết nối!",
                text2: "Vui lòng thử lại sau!",
                position: "bottom"
            });
        }
        
    }
    useEffect(() => {
        if(code && code.length === 6){
            verifyCode();
        }
    }, [code])

    const handleResentOtp = async() => {
        otpRef?.current?.clear();
        const res = await resendCodeAPI(email as string);
        if(res.data){
            Toast.show({
                type: "success",
                text1: "Thành công!",
                text2: "Gửi lại OTP thành công!",
                position: "bottom"
            });
        }else{
            Toast.show({
                type: "error",
                text1: "Thất bại!",
                text2: res.message,
                position: "bottom"
            });
        }
    }
    
    return (
        <>
            <Toast></Toast>
            <View style={styles.container}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginVertical: 10}}>Xác thực tài khoản</Text>
                <Text style={{marginVertical: 10}}>Vui lòng nhập mã OTP được gửi tới địa chỉ @gmail.com</Text>
                <View style={{marginVertical: 20}}>
                    <OTPTextView
                        ref={otpRef}
                        handleTextChange={setCode}
                        inputCount={6}
                        inputCellLength={1} 
                        tintColor={APP_COLOR.BLUE_SPECIAL}
                        textInputStyle={{
                            borderWidth: 1,
                            borderColor: APP_COLOR.BLUE_SPECIAL,
                            borderBottomWidth: 1,
                            borderRadius: 5,
                            // @ts-ignore:next-line
                            color: "black"
                        }}
                    >
                    </OTPTextView>
                </View>

                <View style={{flexDirection: "row", marginVertical: 10}}>
                    <Text>Không nhận được mã xác nhận?</Text>
                    <Text 
                        style={{fontWeight: 'bold'}}
                        onPress={() => handleResentOtp()}
                    > Gửi lại</Text>
                </View>
            </View>

            {isSubmit && <LoadingOverlay></LoadingOverlay>}
        </>
    )
}
export default VerifyPage;