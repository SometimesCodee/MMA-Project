import ShareInput from "@/components/share.input"
import { useCurrentApp } from "@/context/app.context"
import { Image, Platform, StyleSheet, Text, View } from "react-native"
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 50
    }
})
const Account = () => {
    const {theme, appState} = useCurrentApp()
    const backend = Platform.OS === 'android'
        ? process.env.EXPO_PUBLIC_API_ANDROID_URL
        : process.env.EXPO_PUBLIC_API_IOS_URL
    const baseImage = `${backend}/images/avatar`
    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center', gap: 5}}>
                <Image
                    style={{height: 150, width:150}}
                    source={{uri: `${baseImage}/${appState?.user.avatar}`}}                
                >
                </Image>
                <Text>{appState?.user.name}</Text>
                <View style={{marginTop: 20, gap: 20, width: '100%'}}>
                    <ShareInput
                        title="Name"
                        keyboardType="email-address"
                        value={appState?.user.name}
                    />
                    <ShareInput
                        title="Email"
                        keyboardType="email-address"
                        value={appState?.user.email}
                    />
                    <ShareInput
                        title="Phone"
                        value={appState?.user.phone}
                    />
                </View>
            </View>
        </View>
    )
}
export default Account