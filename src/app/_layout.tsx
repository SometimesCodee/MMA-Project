import AppProvider from "@/context/app.context";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { ErrorBoundaryProps, Stack } from "expo-router";
import { Button, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {RootSiblingParent} from 'react-native-root-siblings';
import { SafeAreaView } from "react-native-safe-area-context";

export function ErrorBoundary({error, retry}: ErrorBoundaryProps){
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, paddingHorizontal: 10, gap: 15 }}>
            <View style={{
                backgroundColor: " 333", padding: 10,
                borderRadius: 3, gap: 10
            }}>
            <Text style={{ color: "red", fontSize: 20 }}> Something went wrong
            </Text>
            <Text style={{ color: " fff" }}>{error.message}</Text>
            </View>
            <Button title="Try Again ?" onPress={retry} />
            </View>
        </SafeAreaView>
    )
}
const RootLayout = () => {
    const navTheme = {
        ...DefaultTheme,
        color: {
            ...DefaultTheme.colors,
            background: 'white',
        }
    }
    return (
        <GestureHandlerRootView>
            <RootSiblingParent>
                <AppProvider>
                    {/* <SafeAreaView style={{flex: 1}}> */}
                        <ThemeProvider value={navTheme}>
                            <Stack 
                                screenOptions={{
                                    headerStyle: {
                                        backgroundColor: '#66CCCC',
                                    },
                                    headerTintColor: '#fff',
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                    },
                                    contentStyle: {
                                        backgroundColor: '#fff',}
                                }}
                            >
                                <Stack.Screen name="index" options={{headerShown: false}}/>
                                <Stack.Screen name="(auth)/signup" options={{headerShown: true, headerTitle: "Đăng kí tài khoản"}}/>
                                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                                <Stack.Screen name="product/[id]" options={{ headerShown: false }} />
                                <Stack.Screen name="(auth)/login" options={{ headerTitle: 'Đăng nhập' }} />
                                <Stack.Screen name="(auth)/verify" options={{ headerShown: false }} />
                                <Stack.Screen name="(auth)/welcome" options={{ headerShown: false }} />
                                <Stack.Screen name="product/create.model" options={{ headerShown: false, animation: 'fade', presentation: 'transparentModal'}} />
                                <Stack.Screen name="product/update.model" options={{ headerShown: false, animation: 'fade', presentation: 'transparentModal'}} />
                                <Stack.Screen name="product/place.order" options={{ headerTitle: 'Xác nhận đơn hàng' }} />
                            </Stack>
                        </ThemeProvider>
                    {/* </SafeAreaView> */}
                </AppProvider>
            </RootSiblingParent>
        </GestureHandlerRootView>
    )
}

export default RootLayout;