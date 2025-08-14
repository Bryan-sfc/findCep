import { TextInput, Text, View, StyleSheet } from "react-native"

export const Input = ({ valorCep, onChangeValorCep }) => {
    return (
        <View style={styles.campoInput}>
            <Text style={styles.label}>CEP</Text>
            <TextInput
                placeholder="00000-000"
                style={styles.Input}
                maxLength={8}
                value={valorCep}
                onChangeText={onChangeValorCep}
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    campoInput: {
        width: '70%'
    },

    label: {
        fontFamily: 'Poppins-Bold'
    },

    Input: {
        borderBottomWidth: 1,
        borderBottomColor: '#939393',
        color: '#939393',
        padding: 5,
        outlineStyle: 'none'
    }
})