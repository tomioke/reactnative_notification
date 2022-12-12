import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
// Import komponen react native snackbar
import SnackBar from './components/SnackBar';
// Import komponen react native modal
import Modals from './components/Modals';
// Import komponen react native datepicker
import DatePickerUI from './components/DatePicker';

const App = () => {
  return (
    <ScrollView style={{ flex: 1, paddingTop: 20 }}>
      <View
        style={{
          justifyContent: 'center',
          marginBottom: 20,
          alignItems: 'center',
        }}>
        <SnackBar></SnackBar>
        <Modals></Modals>
        <DatePickerUI></DatePickerUI>
      </View>
    </ScrollView>
  );
};
export default App;
