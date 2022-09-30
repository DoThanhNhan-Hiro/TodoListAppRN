import { View, Text, TextInput, StyleSheet,Keyboard, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import FlashMessage from "react-native-flash-message";
import { showMessage } from "react-native-flash-message";
const Input = (props) => {
    const [task, setTask] = useState('');
    const Check = () => {
        if (task.length == 0) {
            showMessage({
                message: "Error",
                description: "Vui lòng nhập Task",
                type: "unsuccess",
            });
        }
        else
            props.onaddTask(task);
            setTask('')
            Keyboard.dismiss();
    }
    return (
        <View>
            <FlashMessage position="top" />

            <KeyboardAvoidingView

                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={10}>
                <View style={styles.bordertextnput}>

                    <TextInput style={styles.textnput}
                        placeholder='nhập task'
                        value={task}
                        onChangeText={(text) => setTask(text)}
                    >
                    </TextInput>
                    <TouchableOpacity
                        onPress={Check}
                    >
                        <View style={styles.borderadd}>
                            <Text style={styles.add}> + </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}
export default Input
const styles = StyleSheet.create({
    bordertextnput: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    add: {
        fontSize: 40,
        color: 'white',
        marginBottom: 11
        , marginTop: -5

    },
    borderadd: {
        alignItems: 'center', justifyContent: 'center',
        height: 50,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    textnput: {
        borderRadius: 10,
        backgroundColor: 'white',
        width: 200,
        marginLeft: 20,
        height: 40,
        fontSize: 15,
        borderColor: 'red',
        borderWidth: 2
    },
})