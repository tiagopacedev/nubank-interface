import { Feather, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import { colors, fontSizes } from '~/common/styles/global';
import Account from '~/screens/Home/components/Account';

export function Header() {
  const [showbalance, setShowBalance] = useState(true);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.profile}>
            <Ionicons name="image-outline" size={24} color="#fff" />
            <View style={styles.dot} />
          </TouchableOpacity>

          <View style={styles.options}>
            <TouchableOpacity onPress={() => setShowBalance(!showbalance)}>
              {showbalance ? (
                <Feather name="eye" size={22} color="#fff" />
              ) : (
                <Feather name="eye-off" size={22} color="#fff" />
              )}
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="help-circle-outline" size={22} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="person-add-outline" size={22} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="shield-outline" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.profileName}>Olá, Tiago</Text>
      </View>

      <Account showBalance={showbalance} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
    paddingLeft: 24,
    width: '100%',
    // height: '24%',
    backgroundColor: colors.secondary,
  },

  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
  },

  profile: {
    position: 'relative',
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 99,
    backgroundColor: '#A75DD9',
  },

  dot: {
    width: 12,
    height: 12,
    backgroundColor: '#fff',
    borderRadius: 99,
    position: 'absolute',
    top: 0,
    right: 0,
  },

  profileName: {
    color: '#fff',
    fontSize: fontSizes.large,
    fontWeight: 'bold',
  },

  options: { flexDirection: 'row', columnGap: 20 },
});
