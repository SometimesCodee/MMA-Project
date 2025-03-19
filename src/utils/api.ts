import axios from "@/utils/axios.customize"
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
    return axios.post<IBackendRes<ITopRestaurant[]>>(url)
}