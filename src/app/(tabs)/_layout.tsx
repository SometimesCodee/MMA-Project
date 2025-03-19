import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Tabs } from "expo-router"

const TabLayout = () => {
    const getIcons = (routeName: string, focused: boolean, size: number) => {
        if(routeName == 'index'){
            return(
                <MaterialCommunityIcons
                    name="food-fork-drink"
                    size={size}
                    color={focused ? '#66CCCC' : 'grey'}
                ></MaterialCommunityIcons>
            )
        }
        if(routeName == 'favorite'){
            return(
                <MaterialCommunityIcons
                    name="heart"
                    size={size}
                    color={focused ? '#66CCCC' : 'grey'}
                ></MaterialCommunityIcons>
            )
        }
        if(routeName == 'order'){
            return(
                <MaterialCommunityIcons
                    name="cart"
                    size={size}
                    color={focused ? '#66CCCC' : 'grey'}
                ></MaterialCommunityIcons>
            )
        }
        if(routeName == 'notification'){
            return(
                <MaterialCommunityIcons
                    name="bell"
                    size={size}
                    color={focused ? '#66CCCC' : 'grey'}
                ></MaterialCommunityIcons>
            )
        }
        if(routeName == 'account'){
            return(
                <MaterialCommunityIcons
                    name="account"
                    size={size}
                    color={focused ? '#66CCCC' : 'grey'}
                ></MaterialCommunityIcons>
            )
        }
        return(<></>)
    }
    return (
       <Tabs
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, size, color}) => {
                return getIcons(route.name, focused, size);
            },
            headerShown: false,
            tabBarLabelStyle: {
                paddingBottom: 3
            },
            tabBarStyle: {
                paddingTop: 7
            },
            tabBarActiveTintColor: '#66CCCC',
        })}
       >
        <Tabs.Screen name="index" options={{tabBarLabel: 'Trang chủ'}}></Tabs.Screen>
        <Tabs.Screen name="order" options={{tabBarLabel: 'Đơn hàng'}}></Tabs.Screen>
        <Tabs.Screen name="favorite" options={{tabBarLabel: 'Yêu thich'}}></Tabs.Screen>
        <Tabs.Screen name="notification" options={{tabBarLabel: 'Thông báo'}}></Tabs.Screen>
        <Tabs.Screen name="account" options={{tabBarLabel: 'Tài khoản'}}></Tabs.Screen>
       </Tabs>
    )
}

export default TabLayout