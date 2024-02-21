import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../../Router';

import { colors } from '~/common/styles/global';

const icon = require('../../../assets/icon.png');

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();

  return (
    <View style={styles.containerLogin}>
      <View style={styles.centeredContent}>
        <Image source={icon} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('PrivateRoutes')}>
          <Text style={styles.loginButtonText}>Usar senha do celular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  loginButtonText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },

  containerLogin: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.secondary,
  },

  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#fff',
  },

  subtitle: {
    color: '#fff',
    fontSize: 36,
  },
});
