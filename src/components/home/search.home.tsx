import { StyleSheet, Text, View } from "react-native"
import { EvilIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        gap: 5,
        flexDirection: 'row',
        margin: 5,
        paddingHorizontal: 3,
        paddingVertical: 7,
        borderRadius: 7,
        borderColor: '#707070',
        borderWidth: 1
    }
})
const SearchHome = () =>{
    return(
        <View style={styles.container}>
            <EvilIcons name="search" size={20} color="black" />
            <Text style={{color: '#707070'}}>Hot deal 0đ...</Text>
        </View>
    )
}

export default SearchHome