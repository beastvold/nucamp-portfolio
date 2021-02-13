import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },

    bookInfoText: {
        margin: 5,
        fontSize: 20
    }
});
