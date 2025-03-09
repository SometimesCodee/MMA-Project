import axios from "axios"
import { Platform } from "react-native"

const backend = Platform.OS === "android" ? process.env.EXPO_PUBLIC_API_ANDROID_URL : process.env.EXPO_PUBLIC_API_IOS_URL

const instance = axios.create({
    baseURL: backend
})

export default instance