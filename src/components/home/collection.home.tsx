import { StyleSheet, Text, View } from "react-native"
interface Iprops {
    name: string,

}
const styles = StyleSheet.create({
    container: {
        borderColor: "green",
        borderWidth: 1,
        height: 250,
        marginBottom: 10,
        width: "100%"
      },
})
const CollectionHome = (props: Iprops) => {
    const {name} = props
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
        </View>
    )
}
export default CollectionHome