import { View, StyleSheet} from "react-native";
export default function Card(props) {
    return(
        <View style={styles.inputContainer}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: '#3b021f',
        elevation: 4, // shadow on android only
        shadowColor: 'black', // shadow on iOS only
        shadowOffset: {width: 0, height: 2}, // shadow on iOS only
        shadowRadius: 6, // shadow on iOS only. How mauch expand
        shadowOpacity: 0.25, // shadow on iOS only
    },
});