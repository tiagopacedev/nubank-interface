import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, Tablet } from 'react-native-feather';

export default function Card() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.myCards}>
        {/* <Ionicons name="journal-outline" size={20} /> */}
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
  },

  myCards: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 15,
    backgroundColor: '#D9D9D9',
  },

  textcard: {
    marginLeft: 16,
    fontWeight: '500',
  },
});
