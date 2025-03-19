import { StyleSheet, Text, View } from "react-native"
import Entypo from '@expo/vector-icons/Entypo';
const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        gap: 3
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})
const HeaderHome = () => {
    return (
        <View style={styles.container}>
            <Text style={{paddingLeft: 5}}>Giao đến: </Text>
            <View style={styles.location}>
                <Entypo name="location-pin" size={20} color="orange" />
                <Text>Đại học FPT Hà Nội</Text>
            </View>
            
        </View>
    )
            
}

export default HeaderHome