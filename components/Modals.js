import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
const Modals = () => {
    const [modal, setModal] = useState(false);

    return (
        <View>
            <TouchableOpacity onPress={() => setModal(true)}>
                <Text>Buka Modal</Text>
            </TouchableOpacity>
            <Modal
                style={{ margin: 10, justifyContent: 'flex-end' }}
                isVisible={modal}
                onBackdropPress={() => setModal(false)}
                animationIn="fadeInUp"
                animationInTiming={2000}
                animationOut="fadeOut"
                animationOutTiming={2000}>
                <View
                    style={{
                        height: 400,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text>I am the modal content!</Text>
                    <TouchableOpacity onPress={() => setModal(false)}>
                        <Text>Tutup Modal</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

export default Modals;