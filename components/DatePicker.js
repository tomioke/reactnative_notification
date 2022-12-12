import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';

const DatePickerUI = () => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TouchableOpacity onPress={() => setOpen(true)}>
                <Text>Contoh DatePicker</Text>
            </TouchableOpacity>
            <DatePicker
                locale="id"
                mode="date"
                modal
                open={open}
                date={date}
                androidVariant="nativeAndroid"
                onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                    console.log(date);
                }}
                onCancel={() => {
                    setOpen(false);
                }}
            />

        </View>
    );
};

export default DatePickerUI;
