import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, Pressable, ScrollView, TouchableOpacity, View } from 'react-native';
import AutoSizeImage from '../../components/common/AutoSizeImage';
import StarRating from '../../components/common/StarRating';
import { Bold, Regular } from '../../components/common/Texted';
import Color from '../../constants/Color';
import { height, width } from '../../constants/Layout';
import useFetch from '../../hooks/useFetch';
import { resources } from '../../i18n/fr';
import { ResponseApiFetch2, RootStackScreenProps } from '../../types/types';

const url = 'https://fakestoreapi.com/products/';

export default function ModalProduct({ route }: RootStackScreenProps<'Product'>) {
    const { data, error, isLoading, refreshData }: ResponseApiFetch2 = useFetch(url + route.params.productId, 'GET');

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openCloseModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {!isLoading && data !== null && (
                <>
                    <ScrollView>
                        <View style={{ marginTop: 30 }}>
                            <TouchableOpacity onPress={openCloseModal} style={{ alignItems: 'center', marginBottom: 30 }}>
                                <AutoSizeImage source={data.image} width={210} square={true} />
                            </TouchableOpacity>
                            <View
                                style={{
                                    backgroundColor: Color.light.tint,
                                    padding: 20,
                                    paddingHorizontal: 30,
                                    borderRadius: 50,
                                    alignSelf: 'center',
                                    marginBottom: 40,
                                }}
                            >
                                <Bold style={{ color: Color.dark.text, fontSize: 23 }}>
                                    {data.price} {resources.common.units}
                                </Bold>
                            </View>
                            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                                <StarRating rate={data.rating.rate} size={30} color={Color.light.tint} />
                            </View>
                            <Bold style={{ marginVertical: 20, fontSize: 16 }}>{data.title}</Bold>
                            <Bold>Description: </Bold>
                            <Regular>{data.description}</Regular>
                        </View>
                    </ScrollView>
                    <Modal animationType="fade" visible={isOpen} transparent={true}>
                        <Pressable onPress={openCloseModal} style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', zIndex: 3, left: 0, top: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                            <TouchableOpacity onPress={openCloseModal} style={{ backgroundColor: '#fff', padding: 10, paddingHorizontal: 13, borderRadius: 100, position: 'absolute', top: 30, right: 30 }}>
                                <FontAwesome name="close" size={30} color="#000" />
                            </TouchableOpacity>
                            <Pressable onPress={(e) => e.stopPropagation()}>
                                <AutoSizeImage source={data.image} width={300} square={true} />
                            </Pressable>
                        </Pressable>
                    </Modal>
                </>
            )}
        </>
    );
}
