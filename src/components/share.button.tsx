import { ActivityIndicator, Pressable, StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import { ReactNode } from "react";
import { APP_COLOR } from "../utils/constant";
const styles = StyleSheet.create({
    btnContainer: {
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        backgroundColor: APP_COLOR.YELLOW,
        borderColor: "red",
    },

})

interface IProps {
    title: string;
    onPress: () => void;
    icon?: ReactNode
    textStyle?: StyleProp<TextStyle>;
    buttonStyle?: StyleProp<TextStyle>;
    pressStyle?: StyleProp<TextStyle>;
    isLoading?: boolean
}
const ShareButton = (props: IProps) => {
    const {
        title, onPress, icon,
        textStyle, buttonStyle, pressStyle, isLoading = false
    } = props;
    return (
        //Tùy chỉnh style cho Pressable (bao ngoài cùng)
        // Pressable cung cấp một hàm nhận vào một object chứa trạng thái pressed.
        // pressed là true khi người dùng bấm vào nút và false khi thả ra.
        // Dùng [ ... ] để gộp nhiều style và cho phép tùy chỉnh linh hoạt.
        <Pressable
            disabled={isLoading}
            style={({ pressed }) => ([
                {
                    opacity: pressed === true || isLoading ? 0.5 : 1,
                    alignSelf: "flex-start", //fit-content
                }, pressStyle
            ])}
            onPress={onPress}
        >
            <View style={[styles.btnContainer, buttonStyle]}>
                {isLoading && <ActivityIndicator/>}
                {icon}
                <Text style={textStyle}>{title}</Text>
            </View>
        </Pressable>
    )
}

export default ShareButton;
