import ShareInput from "@/components/share.input"
import { useCurrentApp } from "@/context/app.context"
import { Feather, MaterialIcons } from "@expo/vector-icons"
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
const styles = StyleSheet.create({
    div: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: 'center'
    },
    child: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    }
})
const Account = () => {
    const {appState} = useCurrentApp()
    const backend = Platform.OS === 'android'
        ? process.env.EXPO_PUBLIC_API_ANDROID_URL
        : process.env.EXPO_PUBLIC_API_IOS_URL
    const baseImage = `${backend}/images/avatar`
    const insets = useSafeAreaInsets();
    return (
        // <View style={styles.container}>
        //     <View style={{alignItems: 'center', gap: 5}}>
        //         <Image
        //             style={{height: 150, width:150}}
        //             source={{uri: `${baseImage}/${appState?.user.avatar}`}}                
        //         >
        //         </Image>
        //         <Text>{appState?.user.name}</Text>
        //         <View style={{marginTop: 20, gap: 20, width: '100%'}}>
        //             <ShareInput
        //                 title="Name"
        //                 keyboardType="email-address"
        //                 value={appState?.user.name}
        //             />
        //             <ShareInput
        //                 title="Email"
        //                 keyboardType="email-address"
        //                 value={appState?.user.email}
        //             />
        //             <ShareInput
        //                 title="Phone"
        //                 value={appState?.user.phone}
        //             />
        //         </View>
        //     </View>
        // </View>
        <View style={{flex: 1}}>
            <View style={{
                paddingTop: insets.top,
                paddingHorizontal: 20,
                paddingBottom: 20,
                backgroundColor: '#66cccc',
                flexDirection: 'row',
                gap: 20,
                alignItems: 'center'
            }}>
                <Image
                    style={{height: 60, width: 60}}
                    source={{uri: `${baseImage}/${appState?.user.avatar}`}}                
                >
                </Image>
                <View>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>{appState?.user.name}</Text>
                </View>
            </View>

            <Pressable style={styles.div}>
                <View style={styles.child}>
                    <Feather name="user-check" size={20} color='green'></Feather>
                    <Text>Cập nhật thông tin</Text>
                </View>
                <MaterialIcons name="navigate-next" size={24} color="grey"></MaterialIcons>
            </Pressable>

            <Pressable style={styles.div}>
                <View style={styles.child}>
                    <Feather name="lock" size={20} color='green'></Feather>
                    <Text>Thay đổi mật khẩu</Text>
                </View>
                <MaterialIcons name="navigate-next" size={24} color="grey"></MaterialIcons>
            </Pressable>

            <Pressable style={styles.div}>
                <View style={styles.child}>
                    <Feather name="globe" size={20} color='green'></Feather>
                    <Text>Ngôn ngữ</Text>
                </View>
                <MaterialIcons name="navigate-next" size={24} color="grey"></MaterialIcons>
            </Pressable>

            <Pressable style={styles.div}>
                <View style={styles.child}>
                    <Feather name="info" size={20} color='green'></Feather>
                    <Text>Về ứng dụng</Text>
                </View>
                <MaterialIcons name="navigate-next" size={24} color="grey"></MaterialIcons>
            </Pressable>

            <View style={{flex: 1, justifyContent: 'flex-end', gap: 10, paddingBottom: 15}}>
                <Pressable style={({pressed}) => ({
                    opacity: pressed === true ? 0.5 : 1,
                    padding: 10,
                    marginHorizontal: 10,
                    backgroundColor: "#66cccc",
                    borderRadius: 3
                })}>
                    <Text style={{textAlign: "center", color: "white", fontWeight: 'bold'}}>Đăng Xuất</Text>
                </Pressable>
            </View>

        </View>
    )
}
export default Account