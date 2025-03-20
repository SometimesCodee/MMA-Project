import { Dimensions, FlatList, Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import demoImg from '@/assets/demo.png'
import { useEffect, useState } from "react"
import { getTopRestaurant } from "@/utils/api"
import { router } from "expo-router"
import ContentLoader, { Rect } from "react-content-loader/native";
const { height: sHeight, width: sWidth } = Dimensions.get('window');
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
        borderColor: '#66cccc',
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
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() =>{
        const fetchData = async () => {
            try {
                const response = await getTopRestaurant(refAPI);
                if(response.data){
                    setLoading(false)
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
            {loading === false ? 
                <View style={styles.container}>
                    <View style={{justifyContent: "space-between", flexDirection: 'row'}}>
                        <Text style={{color: '#66cccc', fontSize: 16, fontWeight: 600}}>{name}</Text>
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
                                <Pressable onPress={() => router.navigate({
                                    pathname: "/product/[id]",
                                    params: {id: item._id},
                                })}>
                                    <View style={{backgroundColor: '#efefef'}}>
                                    <Image style={{width: 130, height: 130}} source={{uri: `${baseImage}/${item.image}`}}></Image>
                                    <View style={{padding: 5}}>
                                        <Text numberOfLines={1} ellipsizeMode="tail" style={{fontWeight: 600, maxWidth: 130}}>{item.name}</Text>
                                        <View>
                                            <View style={styles.sale}>
                                                <Text style={{color: '#66cccc'}}>Flash Sale</Text>
                                            </View>
                                        </View>
                                    </View>
                                    </View>
                                </Pressable>
                            )
                        }}
                    >
                    </FlatList>
                    
                </View>
            :
                <ContentLoader
                    speed={2}
                    width={sWidth}
                    height={230}
                    // viewBox="0 0 700 150"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    style={{ width: '100%' }}
                    >
                    <Rect x="10" y="10" rx="5" ry="5" width={150} height="200" />
                    <Rect x="170" y="10" rx="5" ry="5" width={150} height="200" />
                    <Rect x="330" y="10" rx="5" ry="5" width={150} height="200" />
                </ContentLoader>
            } 
            
        </>
        
    )
}
export default CollectionHome