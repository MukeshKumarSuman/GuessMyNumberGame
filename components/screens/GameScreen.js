import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../ui/Title";
import NumberContainer from "../game/NumberContainer";
import { useEffect, useState } from "react";
import Card from "../ui/Card";
import InstructionText from "../ui/InstructionText";
import PrimaryButton from "../ui/PrimaryButton";
import {Ionicons} from '@expo/vector-icons'
import GuessLogItems from "../game/GuessLogItems";

function generateRandomBetween(min, max, exclude) {
    // Math.random() between 0 to <1
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    function nextGuessHandler(direction) {
        if ((direction === 'lower' && currentGuess < userNumber) ||
         (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert('Dont lie!', 'You know this is wrong...', [{text: 'Sory!', style: 'cancel'}]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
    }

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
            minBoundary = 1;
            maxBoundary = 100;
        }
    }, [currentGuess, userNumber, onGameOver]);

    return(
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructiontext}>Lower or Higher?</InstructionText>
                <View style={styles.buttonsContiner}>
                    <View style={styles.buttonContiner}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove" size={24} color="black" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContiner}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add" size={24} color="black" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listConatiner}>
                {/*guessRounds.map( r => <Text key={r}>{r}</Text>)*/}
                <FlatList data={guessRounds} 
                renderItem={(itemData) => <GuessLogItems roundNumber={guessRounds.length - itemData.index} guess={currentGuess}/>}
                keyExtractor={(item) => item}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 60
    },
    buttonsContiner: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    instructiontext: {
        marginBottom: 12,
    },
    listConatiner: {
        flex: 1,
        padding: 16,
    },
});