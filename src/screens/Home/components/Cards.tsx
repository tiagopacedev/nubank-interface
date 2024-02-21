import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Tablet } from 'react-native-feather';

import { colors } from '~/common/styles/global';

export default function Card() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.myCards}>
        <Tablet width={20} height={20} color="#000" style={{ marginLeft: 16 }} />
        <Text style={styles.textcard}>Meus Cartões</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 28,
    paddingRight: 24,
    paddingBottom: 8,
    paddingLeft: 24,
    backgroundColor: colors.background,
  },

  myCards: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 15,
    backgroundColor: colors.lightGray,
  },

  textcard: {
    marginLeft: 16,
    fontWeight: '500',
  },
});
