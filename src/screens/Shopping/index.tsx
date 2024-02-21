import React from 'react';
import { Image, View, Text } from 'react-native';

const mobileDevelopment = require('../../../assets/mobile-development.png');

const Shopping = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginHorizontal: 24 }}>
      <View style={{ marginBottom: 20, gap: 16 }}>
        <Text style={{ fontSize: 33, textAlign: 'center' }}>
          Bem-vindo à tela de Compras Online!
        </Text>
        <Text style={{ fontSize: 16, color: 'gray', textAlign: 'center' }}>
          Esta tela ainda está em desenvolvimento. Testando...
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Image style={{ width: 200, height: 200 }} source={mobileDevelopment} />
      </View>
    </View>
  );
};

export default Shopping;
