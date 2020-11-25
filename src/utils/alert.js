import { Alert } from 'react-native';
export const showAlert = (title, msg, actions) => {
    Alert.alert(
        title,
        msg,
        actions ? actions : [
            { text: "OK" }
        ],
        { cancelable: false }
    );
}