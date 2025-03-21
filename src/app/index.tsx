import { View } from "react-native"
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { getAccountAPI } from "@/utils/api";
import { useCurrentApp } from "@/context/app.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from 'expo-splash-screen';
const RootPage = () => {
    const { setAppState } = useCurrentApp();
    const [state, setState] = useState<any>();
    useEffect(() => {
        async function prepare() {
            try {
                const res = await getAccountAPI();
                if(res.data){
                    setAppState({
                        user: res.data.user,
                        access_token: await AsyncStorage.getItem('access_token')
                    })
                    router.replace("/(tabs)");
                }else{
                    router.replace("/(auth)/welcome");
                }
            } catch (error) {
                setState(() => {
                    throw new Error("Can't connect to Server")
                })
            } finally{
                await SplashScreen.hideAsync();
            }
        }
        prepare();
    },[])
    return (
       <>
       </>
    )
}

export default RootPage;