import { ImageSourcePropType } from 'react-native';
import { CatEnum } from '../types/types';

export const displayImg = (cat: string): ImageSourcePropType => {
    switch (cat) {
        case CatEnum.ELEC:
            return require('../assets/pictures/elec.jpg');
        case CatEnum.JEWEL:
            return require('../assets/pictures/jewels.jpg');
        case CatEnum.MEN:
            return require('../assets/pictures/men.jpg');
        case CatEnum.WOMEN:
            return require('../assets/pictures/women.jpg');
        default:
            break;
    }
};
