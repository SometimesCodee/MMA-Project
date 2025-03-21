import { useState } from "react"
import { Text, TextInput, View, StyleSheet, KeyboardTypeOptions } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const styles = StyleSheet.create({
    inputGroup: {
        padding: 5,
        gap: 10,
    },
    text: {
        fontSize: 14,
        fontWeight: "bold"
    },
    input:{
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 7,
        borderRadius: 7,
    }
})
interface IProps {
    title: string,
    keyboardType? : KeyboardTypeOptions,
    secureTextEntry? : boolean,
    value: any,
    setValue?: (value: any) => void;
    onChangeText?: any;
    onBlur?: any;
    error?: any
}
const ShareInput = (props: IProps) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
    const {title, keyboardType, secureTextEntry, value, setValue, onChangeText, onBlur, error} = props
    return (
        <View style={styles.inputGroup}>
            {title ? <Text style={styles.text}>{title}</Text> : null}
            <View style={{position: 'relative'}}>
                <TextInput 
                    value={value}
                    onChangeText={onChangeText}
                    onFocus={() => setIsFocus(true)}
                    onBlur={(event) => {
                        setIsFocus(false); 
                        if(onBlur) onBlur(event)
                    }}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry && !isShowPassword}
                    style={[styles.input, {borderColor: isFocus ? '#66CCCC' : 'gray'}]} 
                >
                </TextInput>
                {error && <Text style={{color: 'red', marginTop: 5}}>{error}</Text>}
                {secureTextEntry && 
                    <FontAwesome5 
                        style={{position: "absolute", right: 15, top: 14}} 
                        name={isShowPassword ? "eye" : "eye-slash"}
                        size={17}
                        onPress={() => setIsShowPassword(!isShowPassword)}
                    />
                }
            </View>
        </View>
    )
}

export default ShareInput