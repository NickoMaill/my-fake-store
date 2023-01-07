import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types/types';

const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.createURL('/')],
    config: {
        screens: {
            Root: {
                screens: {
                    Home: {
                        screens: {
                            HomeScreen: 'Home',
                        },
                    },
                    Basket: {
                        screens: {
                            BasketScreen: 'Basket',
                        },
                    },
                    Setup: {
                        screens: {
                            SetupScreen: 'Setup',
                        },
                    },
                },
            },
            Error: 'Error',
            NotFound: '*',
            Info: 'Info',
            Products: 'Products',
            Product: 'Product',
        },
    },
};

export default linking;
