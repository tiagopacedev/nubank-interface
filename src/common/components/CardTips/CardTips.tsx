import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

import { colors } from '~/common/styles/global';

export function CardTips() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginLeft: 24, paddingRight: 32 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL('https://nubank.com.br/')}>
          <Text>
            Pague <Text style={styles.linkText}>boletos no crédito</Text> em até 12x, direto no app
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL('https://nubank.com.br/')}>
          <Text>
            <Text style={styles.linkText}>Aumente seu limite</Text> do cartão hoje com o Nu Limite
            Garantido.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL('https://nubank.com.br/')}>
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
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 2,
    backgroundColor: colors.background,
  },

  button: {
    padding: 20,
    marginRight: 16,
    minHeight: 70,
    width: 280,
    borderRadius: 15,
    backgroundColor: colors.lightGray,
  },

  linkText: {
    color: colors.secondary,
  },
});
