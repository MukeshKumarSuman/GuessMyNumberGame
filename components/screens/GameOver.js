import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../ui/Title";
import PrimaryButton from "../ui/PrimaryButton";
import Color from "../../constants/color";

export default function GameOver({roundsNumber, userNumber, onStartNewGame}) {
    return (
    <View style={styles.rootContainer}>
        <Title>Game is over!</Title>
        <View style={styles.imageConatainer}>
            <Image source={require('../../assets/images/success.png')} style={styles.image}/>
        </View>
        <Text style={styles.summaryText}>Your phone needed 
            <Text style={styles.highLight}> {roundsNumber} </Text> 
            rounds to guess the number 
            <Text style={styles.highLight}> {userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton> 
    </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        // Make the item in center
        justifyContent: 'center',
        alignContent: 'center',
    },
    // Circle image
    imageConatainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Color.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    highLight: {
        fontFamily: 'open-sans-bold',
        color: Color.primary500,
    }
});