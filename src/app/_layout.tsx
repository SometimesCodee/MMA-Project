import { Slot, Stack } from "expo-router";
import { Text, View } from "react-native"

const RootLayout = () => {
    return (
        <Stack 
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#66CCCC',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
        >
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="(auth)/signup" options={{headerShown: true, headerTitle: "Đăng kí tài khoản"}}/>
            <Stack.Screen name="(tabs)" options={{ headerTitle: 'Home' }} />
            <Stack.Screen name="product/index" options={{ headerTitle: 'Product' }} />
            <Stack.Screen name="(auth)/login" options={{ headerTitle: 'Login Now' }} />
        </Stack>
    )
}

export default RootLayout;