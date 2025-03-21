import { currencyFormatter, getOrderHistoryAPI, getURLBaseBackend } from "@/utils/api"
import { useEffect, useState } from "react"
import { SafeAreaView, Text, View, ScrollView, Image } from "react-native"

const Order = () => {
    const [orderHistory, setOrderHistory] = useState<any>([])

    useEffect(() => {
        const fectchOrderHistory = async () => {
            const res = await getOrderHistoryAPI();
            if(res.data) setOrderHistory(res.data)
        }
        fectchOrderHistory()
    },[])

    return(
        <SafeAreaView style={{flex: 1, paddingTop: 40}}>
            <View style={{flex: 1}}>
                <View style={{
                    borderBottomColor: "#eee",
                    borderBottomWidth: 1,
                    paddingHorizontal: 10,
                    paddingBottom: 5
                }}>
                    <Text style={{color: '#66cccc', fontWeight: 'bold', fontSize: 20}}>Lịch sử đơn hàng</Text>
                </View>
                <ScrollView style={{flex: 1}}>
                    {orderHistory.map((item: any, index: any) => {
                        return(
                            <View key={index}>
                                <View style={{
                                    padding: 10,
                                    flexDirection: "row",
                                    gap: 10
                                }}>
                                    <Image
                                        source={{uri: `${getURLBaseBackend()}/images/restaurant/${item.restaurant.image}`}}
                                        style={{height: 100, width: 100}}
                                    ></Image>
                                    <View style={{gap: 10}}>
                                        <Text style={{fontWeight: 'bold'}}>{item.restaurant.name}</Text>
                                        <Text>{item.restaurant.address}</Text>
                                        <Text style={{fontWeight: 'bold', color: '#66cccc'}}>{currencyFormatter(item.totalPrice)}</Text>
                                        <Text style={{fontWeight: 'bold', color: 'orange'}}>Trạng thái: {item.status}</Text>
                                    </View>
                                </View>
                                <View style={{height: 10, backgroundColor: '#eee'}}></View>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default Order