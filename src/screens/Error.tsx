import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import ErrorDetails from '../components/common/ErrorDetails';
import { Bold, Regular } from '../components/common/Texted';
import Color from '../constants/Color';
import { resources } from '../i18n/fr';
import { errorStyle } from '../styles/global';

export default function Error(props: { error: Error; resetError: Function }) {
    const navigation = useNavigation().getState()?.history;
    return (
        <View>
            <View style={errorStyle.errorContainer}>
                <FontAwesome name="times-circle" size={75} color="#ff635b" />
                <View style={errorStyle.messageContainer}>
                    <Bold style={errorStyle.message}>{resources.Error.commonError}</Bold>
                    <Regular style={errorStyle.message}>{props.error.message}</Regular>
                    {/* <TouchableOpacity onPress={props.onPress} style={errorStyle.refreshButton}>
						<FontAwesome name="refresh" size={15} color={Color.light.tint} />
						<Regular>{resources.common.refresh}</Regular>
					</TouchableOpacity> */}
                </View>
            </View>
        </View>
    );
}
