import AppProvider from "@/context/app.context";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {RootSiblingParent} from 'react-native-root-siblings';
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
    const navTheme = {
        ...DefaultTheme,
        color: {
            ...DefaultTheme.colors,
            background: 'transparent',
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
                                <Stack.Screen name="product/index" options={{ headerTitle: 'Product' }} />
                                <Stack.Screen name="(auth)/login" options={{ headerTitle: 'Đăng nhập' }} />
                                <Stack.Screen name="(auth)/verify" options={{ headerShown: false }} />
                                <Stack.Screen name="(auth)/welcome" options={{ headerShown: false }} />
                            </Stack>
                        </ThemeProvider>
                    {/* </SafeAreaView> */}
                </AppProvider>
            </RootSiblingParent>
        </GestureHandlerRootView>
    )
}

export default RootLayout;