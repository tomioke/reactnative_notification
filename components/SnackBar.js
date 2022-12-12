import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Snackbar from 'react-native-snackbar';

const SnackBar = () => {
    function showSnackBar() {
        Snackbar.show({
            text: 'Data berhasil disimpan',
            duration: Snackbar.LENGTH_INDEFINITE,
            backgroundColor: 'crismon',
            action: {
                text: 'OK',
                textColor: 'black',
                onPress: () => {
                    // Do something
                    proses();
                },
            },
            textColor: 'black',
        });
    }

    function proses() {
        console.log('Berhasil tampil di konsole');
    }

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => showSnackBar()}>
                <Text>Klik Snackbar sekarang</Text>
            </TouchableOpacity>
        </View>
    );
};


export default SnackBar;
