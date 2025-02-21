import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import Title from "../ui/Title";
import Card from "../ui/Card";
import PrimaryButton from "../ui/PrimaryButton";
import { useState } from "react";
import InstructionText from "../ui/InstructionText";

export default function StartGame(props) {
    const [enteredNumber, setEnteredNumber] = useState();
    const numberInputHandler = (inputText) => {
        setEnteredNumber(inputText);
    }

    const resetInputHandler = () => setEnteredNumber('');

    const confirmInputHandler = () => {
        const num = parseInt(enteredNumber);
        if (isNaN(num) || num <= 0 || num > 99) {
            Alert.alert(
                'Inavlid Number',
                 'Number has to be a number between 1 and 99',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}] ); // It will Cretae Native alert dialog
            return;
        }
        props.onPickNumber(num);
    }
    return(
        <View style={styles.rootContiner}>
            <Title>Guess My Number!</Title>
            <Card>
                <InstructionText>Enter Number</InstructionText>
                <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" value={enteredNumber}
                onChangeText={numberInputHandler}/>
                <View style={styles.buttonsContiner}>
                    <View style={styles.buttonContainer}><PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton></View>
                    <View style={styles.buttonContainer}><PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton></View>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContiner: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    buttonsContiner: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    numberInput: {
        height: 60,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});