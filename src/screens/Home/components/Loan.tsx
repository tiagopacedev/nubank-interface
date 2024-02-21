import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

import { colors, fontSizes } from '~/common/styles/global';

export function Loan() {
  return (
    <View style={styles.containerLoan}>
      <View style={styles.header}>
        <Text style={styles.title}>Empréstimo</Text>
        <Ionicons name="chevron-forward-outline" size={20} />
      </View>

      <View style={styles.loanInfo}>
        <Text style={styles.loanTitle}>Valor Disponível de até</Text>
        <Text style={styles.loanValue}>R$50.000,00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLoan: {
    paddingTop: 30,
    paddingRight: 24,
    paddingLeft: 24,
    paddingBottom: 24,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 2,
    backgroundColor: colors.background,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: fontSizes.large,
    fontWeight: '500',
    marginBottom: 16,
    color: 'black',
  },

  loanInfo: {},

  loanTitle: {
    fontSize: fontSizes.large,
    fontWeight: '400',
    marginBottom: 6,
  },

  loanValue: {
    fontSize: fontSizes.large,
    fontWeight: '600',
  },
});
