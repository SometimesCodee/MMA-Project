import { FlatList, Image, Platform, StyleSheet, Text, View } from "react-native"
import demoImg from '@/assets/demo.png'
import { useEffect, useState } from "react"
import { getTopRestaurant } from "@/utils/api"
interface Iprops {
    name: string,
    description: string,
    refAPI: string
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    sale: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#EA580C',
        padding: 3,
        borderRadius: 3,
        alignSelf: 'flex-start'
    }
})
const CollectionHome = (props: Iprops) => {
    const {name, description, refAPI} = props
    const backend = Platform.OS === 'android'
            ? process.env.EXPO_PUBLIC_API_ANDROID_URL
            : process.env.EXPO_PUBLIC_API_IOS_URL
    const baseImage = `${backend}/images/restaurant`
    const [restaurants, setRestaurant] = useState<ITopRestaurant[]>([]);
    useEffect(() =>{
        const fetchData = async () => {
            try {
                const response = await getTopRestaurant(refAPI);
                if(response.data){
                    setRestaurant(response.data)
                }else{

                }
            }catch(error) {
                console.error(error);
            }
        }
        fetchData()
    },[refAPI])
    return (
        <>
            <View style={{height: 10, backgroundColor: '#e9e9e9'}}></View>
            <View style={styles.container}>
                <View style={{justifyContent: "space-between", flexDirection: 'row'}}>
                    <Text style={{color: '#F05666', fontSize: 16, fontWeight: 600}}>{name}</Text>
                    <Text style={{color: '#5a5a5a'}}>Xem tất cả</Text>
                </View>
                
                <View style={{marginVertical: 5}}>
                    <Text style={{color: '#5a5a5a'}}>{description}</Text>
                </View>

                <FlatList
                    data={restaurants}
                    horizontal={true}
                    contentContainerStyle={{gap: 5}}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => {
                        return(
                            <View style={{backgroundColor: '#efefef'}}>
                                <Image style={{width: 130, height: 130}} source={{uri: `${baseImage}/${item.image}`}}></Image>
                                <View style={{padding: 5}}>
                                    <Text numberOfLines={1} ellipsizeMode="tail" style={{fontWeight: 600, maxWidth: 130}}>{item.name}</Text>
                                    <View>
                                        <View style={styles.sale}>
                                            <Text style={{color: '#EA580C'}}>Flash Sale</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                           
                        )
                    }}
                >
                </FlatList>
                
            </View>
        </>
        
    )
}
export default CollectionHome