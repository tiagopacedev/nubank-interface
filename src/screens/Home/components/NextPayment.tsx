import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Colors } from '~/common/styles/root';

export function NextPayment() {
  return (
    <View style={styles.containerCredidCard}>
      <View style={styles.creditCardView}>
        <Text style={styles.title}>Próximo pagamento</Text>
        <Ionicons name="chevron-forward-outline" size={20} />
      </View>

      <View style={styles.invoiceInfo}>
        <Text style={styles.invoiceTitle}>
          Segunda-feira, <Text style={{ fontWeight: '600' }}>11 Mar</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCredidCard: {
    paddingTop: 30,
    paddingRight: 24,
    paddingLeft: 24,
    paddingBottom: 24,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 2,
  },

  creditCardView: { flexDirection: 'row', justifyContent: 'space-between' },

  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
    color: 'black',
  },

  invoiceInfo: {},

  invoiceTitle: { fontSize: 16, fontWeight: '400', marginBottom: 6 },
});
