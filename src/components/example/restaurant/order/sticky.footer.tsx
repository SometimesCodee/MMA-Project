import { useCurrentApp } from "@/context/app.context";
import { currencyFormatter } from "@/utils/api";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native"

interface IProps{
    restaurant: IRestaurant | null
}
const StickyFooter = (props: IProps) => {
    const { cart, setCart} = useCurrentApp();
    const { restaurant } = props
    const getSum = () => {
        if(restaurant && cart[restaurant._id]){
            return cart[restaurant._id].sum
        }
        return 0
    }
    return (
        <>
            {getSum() === 0 ? <></> : 
                <View
                    style={{
                        width: '100%',
                        backgroundColor: 'white',
                        zIndex: 11,
                        position: 'absolute',
                        bottom: 0,
                        flexDirection: 'row',
                    }}        
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flex: 1,
                            borderTopWidth: 1,
                            borderColor: '#66cccc',
                        }}
                    >
                        <View style={{padding: 10}}>
                            <View style={{
                                position: "absolute",
                                left: 40,
                                top: 5,
                                width: 16,
                                height: 16,
                                borderRadius: 16/2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#66cccc',
                            }}>
                                <Text style={{color: 'white', fontSize: 12}}>
                                    {restaurant && cart && cart[restaurant?._id] && cart[restaurant?._id]["quantity"] && 
                                    <Text>{cart[restaurant?._id]["quantity"]}</Text>
                                    }
                                </Text>
                            </View>
                            <Pressable onPress={() => alert('cart')}>
                                <FontAwesome5 name="shopping-basket" size={30} color="#66cccc"></FontAwesome5>
                            </Pressable>
                        </View>
                        <View style={{paddingRight: 10}}>
                            <Text style={{
                                color: "#66cccc",
                                fontSize: 18,
                                fontWeight:'bold'
                            }}>
                                {currencyFormatter(getSum())}
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        width: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#66cccc',
                    }}>
                        <Text style={{color: 'yellow', fontWeight: 600}} onPress={() => router.navigate('/product/place.order')}>Giao hàng</Text>
                    </View>
                </View>
            }
        </>
       
    )
}

export default StickyFooter;