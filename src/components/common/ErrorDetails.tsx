import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Color from '../../constants/Color';
import { height, width } from '../../constants/Layout';
import { resources } from '../../i18n/fr';
import { errorStyle } from '../../styles/global';
import { Bold, Regular } from './Texted';

export default function ErrorDetails(props: { onPress: () => void; error?: Error }) {
    return (
        <View style={errorStyle.errorContainer}>
            <FontAwesome name="times-circle" size={75} color="#ff635b" />
            <View style={errorStyle.messageContainer}>
                <Bold style={errorStyle.message}>{resources.Error.commonError}</Bold>
                <Regular style={errorStyle.message}>{props.error.message}</Regular>
                <TouchableOpacity onPress={props.onPress} style={errorStyle.refreshButton}>
                    <FontAwesome name="refresh" size={15} color={Color.light.tint} />
                    <Regular>{resources.common.refresh}</Regular>
                </TouchableOpacity>
            </View>
        </View>
    );
}
