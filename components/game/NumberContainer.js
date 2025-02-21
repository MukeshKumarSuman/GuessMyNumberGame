import { StyleSheet, Text, View } from "react-native";
import Color from "../../constants/color";

export default function NumberContainer(props) {
    return(
        <View style={styles.conatiner}>
            <Text style={styles.numberText}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner: {
        borderWidth: 4,
        borderColor: Color.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Color.accent500,
        fontSize: 36,
        fontWeight: 'bold',
    }
});