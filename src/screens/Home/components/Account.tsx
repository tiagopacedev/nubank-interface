import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { optionView } from '../../../utils/data/optionView';

import { colors, fontSizes } from '~/common/styles/global';

interface AccountProps {
  showBalance: boolean;
}

const { width } = Dimensions.get('window');

export default function Account(props: AccountProps) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.accountView}>
          <Text style={styles.title}>Conta</Text>
          <Ionicons name="chevron-forward-outline" size={20} />
        </View>
        {props.showBalance ? (
          <TouchableOpacity onPress={() => {}} style={styles.totalBalanceHidden}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </TouchableOpacity>
        ) : (
          <Text style={styles.totalBalance}>R$ 1.450,00</Text>
        )}
      </View>
      <View style={styles.optionViewContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginLeft: 24, paddingRight: 32 }}>
          {optionView.map((item: any, index: number) => (
            <TouchableOpacity key={index} style={styles.optionView}>
              <View style={styles.optionIcon}>
                <Ionicons name={item.icon} size={22} />
              </View>
              <Text style={styles.optionTitle}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingRight: 24,
    paddingLeft: 24,
    backgroundColor: colors.background,
  },

  accountView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: fontSizes.large,
    fontWeight: '500',
    marginBottom: 8,
  },

  totalBalance: {
    fontSize: fontSizes.large,
    fontWeight: '500',
  },

  totalBalanceHidden: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 3,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: 'black',
    marginRight: 4,
  },

  // ==== Options Scroll ====

  optionViewContainer: {
    paddingTop: 30,
    paddingBottom: 8,
    backgroundColor: colors.background,
  },

  optionView: {
    alignItems: 'center',
    marginRight: 4,
  },

  optionIcon: {
    height: width * 0.2,
    width: width * 0.2,
    marginBottom: 10,
    backgroundColor: colors.lightGray,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },

  optionTitle: {
    fontSize: 14,
    fontWeight: '600',
    width: 82,
    textAlign: 'center',
  },
});
