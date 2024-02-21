import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

import { colors, fontSizes } from '~/common/styles/global';

export function Insurance() {
  return (
    <View style={styles.containerInsurance}>
      <View style={styles.header}>
        <Text style={styles.title}>Seguros</Text>
        <Ionicons name="chevron-forward-outline" size={20} />
      </View>

      <View style={styles.protectionInfo}>
        <Text style={styles.protectionTitle}>
          Proteção a partir de <Text style={{ fontWeight: '600' }}>R$ 10,00 por mês</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerInsurance: {
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

  protectionInfo: {},

  protectionTitle: {
    fontSize: fontSizes.medium,
    fontWeight: '400',
    marginBottom: 6,
  },
});
