import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

import { colors, fontSizes } from '~/common/styles/global';

export function NextPayment() {
  return (
    <View style={styles.containerNextPayment}>
      <View style={styles.header}>
        <Text style={styles.title}>Próximo pagamento</Text>
        <Ionicons name="chevron-forward-outline" size={20} />
      </View>

      <View style={styles.paymentInfo}>
        <Text style={styles.paymentTitle}>
          Segunda-feira, <Text style={{ fontWeight: '600' }}>11 Mar</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerNextPayment: {
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
    marginBottom: 8,
    color: 'black',
  },

  paymentInfo: {},

  paymentTitle: {
    fontSize: fontSizes.medium,
    fontWeight: '400',
    marginBottom: 6,
  },
});
