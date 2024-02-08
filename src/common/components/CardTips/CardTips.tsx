import { ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

import { Colors } from '~/common/styles/root';

interface CardBlogProps {
  text: string;
  link: string;
}

export function CardTips() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginLeft: 24, paddingRight: 32 }}>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('')}>
          <Text>
            Pague <Text style={styles.linkText}>boletos no crédito</Text> em até 12x, direto no app
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('')}>
          <Text>
            <Text style={styles.linkText}>Aumente seu limite</Text> do cartão hoje com o Nu Limite
            Garantido.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('')}>
          <Text>
            <Text style={styles.linkText}>Convide amigos para o nubank</Text> e desbloqueie brasões
            incríveis
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 24,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 2,
  },

  button: {
    padding: 20,
    marginRight: 16,
    minHeight: 70,
    width: 280,
    borderRadius: 15,
    backgroundColor: '#D9D9D9',
  },

  linkText: {
    color: Colors.secondary,
  },
});
