import axios from "@/utils/axios.customize"
import { Platform } from "react-native"
export const register = (name: string, email: string, password: string) => {
    const url = `/api/v1/auth/register`
    return axios.post<IBackendRes<IRegister>>(url, {name, email, password})
}

export const verifyCodeAPI = (email: string, code: string) => {
    const url = `/api/v1/auth/verify-code`
    return axios.post<any>(url, {email, code})
}

export const resendCodeAPI = (email: string) => {
    const url = `/api/v1/auth/verify-email`
    return axios.post<any>(url, {email})
}

export const login = (username: string, password: string) => {
    const url = `/api/v1/auth/login`
    return axios.post<IBackendRes<IUserLogin>>(url, {username, password})
}

export const getAccountAPI = () => {
    const url = `/api/v1/auth/account`
    return axios.get<IBackendRes<any>>(url)
}

export const getTopRestaurant = (ref: string) => {
    const url = `/api/v1/restaurants/${ref}`
    return axios.post<IBackendRes<ITopRestaurant[]>>(url, {}, {headers: {delay: 500}})
}

export const getRestaurantByIdAPI = (id: string) => {
    const url = `/api/v1/restaurants/${id}`
    return axios.get<IBackendRes<IRestaurant>>(url, {headers: {delay: 500}})
}

export const getURLBaseBackend = () => {
    const backend = Platform.OS === 'android'
        ? process.env.EXPO_PUBLIC_API_ANDROID_URL
        : process.env.EXPO_PUBLIC_API_IOS_URL
    return backend;
}

export const processDataRestaurantMenu = (restaurant: IRestaurant | null) => {
    if (!restaurant) return [];
    return restaurant?.menu?.map((menu, index) => {
    return {
        index,
        key: menu._id,
        title: menu.title,
        data: menu.menuItem
    }
    })
}

export const currencyFormatter = (value: any) => {
    const options = {
        significantDigits: 2,
        thousandsSeparator: '.',
        decimalSeparator: ',',
        symbol: ' đ'
    }
    if (typeof value !== 'number') value = 0.0
    value = value.toFixed(options.significantDigits)

    const [currency, decimal] = value.split('.')
    return `${currency.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        options.thousandsSeparator
    )}${options.symbol}`
}

export const placeOrderAPI = (data: any) => {
    const url = `/api/v1/orders/`
    return axios.post<IBackendRes<any>>(url, {...data})
}
    
export const getOrderHistoryAPI = () => {
    const url = `/api/v1/orders/`
    return axios.get<IBackendRes<any>>(url)
}
    