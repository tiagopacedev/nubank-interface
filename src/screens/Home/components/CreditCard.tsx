import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Colors } from '~/common/styles/root';

export function CreditCard() {
  return (
    <View style={styles.containerCredidCard}>
      <View style={styles.creditCardView}>
        <Text style={styles.title}>Cartão de Crédito</Text>
        <Ionicons name="chevron-forward-outline" size={20} />
      </View>

      <View style={styles.invoiceInfo}>
        <Text style={styles.invoiceTitle}>Fatura fechada</Text>
        <Text style={styles.invoiceValue}>R$950.45,80</Text>
        <Text style={styles.invoiceDueDate}>Vencimento dia 17</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonPay}>
          <Text style={styles.buttonTextPay}>Pagar fatura</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonInstallments}>
          <Text style={styles.buttonTextInstallments}>Parcelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCredidCard: {
    paddingTop: 30,
    paddingRight: 24,
    paddingBottom: 24,
    paddingLeft: 24,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 2,
  },

  creditCardView: { flexDirection: 'row', justifyContent: 'space-between' },

  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 16,
    color: 'black',
  },

  invoiceInfo: {},

  invoiceTitle: { fontSize: 16, fontWeight: '400', marginBottom: 6 },

  invoiceValue: { fontSize: 18, fontWeight: '600' },

  invoiceDueDate: { fontSize: 14, color: 'gray', marginTop: 16 },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    columnGap: 8,
  },

  buttonPay: {
    backgroundColor: '#CF0505',
    padding: 10,
    borderRadius: 20,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonInstallments: {
    backgroundColor: '#D9D9D9',
    padding: 12,
    borderRadius: 20,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonTextPay: {
    color: 'white',
    fontWeight: 'bold',
  },

  buttonTextInstallments: {
    color: 'black',
    fontWeight: 'bold',
  },
});
