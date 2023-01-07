import { StyleSheet, Platform } from 'react-native';
import Color from '../constants/Color';
import { height, width } from '../constants/Layout';

const platform = Platform.OS;

export const errorStyle = StyleSheet.create({
    errorContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: height / 2,
    },

    messageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 1.5,
    },

    message: {
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 20,
    },

    refreshButton: {
        borderRadius: 4,
        borderWidth: 1,
        padding: 7,
        borderColor: Color.light.tint,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 90,
        alignItems: 'center',
    },
});

export const autoSizeImage = StyleSheet.create({
    squareView: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
        borderRadius: 10,
    },
});

export const homeStyles = StyleSheet.create({
    categoryCardContainer: {
        flex: 1,
        alignItems: 'center',
    },

    categoryOpacity: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
        backgroundColor: '#0000',
        width: 350,
        height: 250,
        borderRadius: 20,
    },

    categoryImage: {
        width: 350,
        height: 250,
        borderRadius: 20,
    },

    categoryTitleContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: 350,
        height: 250,
        position: 'absolute',
        zIndex: 2,
        borderRadius: 20,
    },
});

export const productsStyle = StyleSheet.create({
    imageBackground: {
        maxHeight: height * 2,
        flex: 1,
        backgroundColor: '#000',
    },

    filtersContainer: {
        padding: 15,
        zIndex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f1f1f1',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },

    cardContainer: {
        borderRadius: 5,
        margin: 20,
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: platform === 'ios' ? 'rgba(0, 0, 0, 0.5)' : '#000',
        shadowOpacity: 0.8,
        shadowOffset: { width: 5, height: 5 },
    },

    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    priceContainer: {
        flex: 1,
        marginTop: 10,
    },

    imageItem: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
});
