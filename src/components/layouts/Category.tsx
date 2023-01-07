import React from 'react';
import { FunctionComponent } from 'react';
import { Image, ImageSourcePropType, Platform, Text, TouchableOpacity, View } from 'react-native';
import { displayImg } from '../../helpers/displayImg';
import { resources } from '../../i18n/fr';
import { homeStyles } from '../../styles/global';
import { CatEnum } from '../../types/types';
import { CatTitle } from '../common/Texted';

export default function Category(props: { cat: string; onPress?: () => void }) {
    return (
        <View style={homeStyles.categoryCardContainer}>
            <TouchableOpacity style={homeStyles.categoryOpacity} onPress={props.onPress}>
                <Image style={homeStyles.categoryImage} source={displayImg(props.cat)}></Image>
                <View style={homeStyles.categoryTitleContainer}></View>
                {CatEnum.ELEC === props.cat && <CatTitle>{resources.category.electronics}</CatTitle>}
                {CatEnum.JEWEL === props.cat && <CatTitle>{resources.category.jewelry}</CatTitle>}
                {CatEnum.MEN === props.cat && <CatTitle>{resources.category.menClothing}</CatTitle>}
                {CatEnum.WOMEN === props.cat && <CatTitle>{resources.category.womenClothing}</CatTitle>}
            </TouchableOpacity>
        </View>
    );
}
