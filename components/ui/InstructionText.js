import { Text, StyleSheet } from "react-native"
import Color from "../../constants/color";

export default function InstructionText({children, style}) {
    return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
    text: {
        color: Color.accent500,
        fontSize: 24,
    }
});