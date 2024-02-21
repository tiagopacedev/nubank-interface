import { Feather } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface TabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

export default function TabBar({ state, descriptors, navigation }: TabBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabButton}>
              <View style={{ alignItems: 'center', padding: 4 }}>
                <View
                  style={[
                    styles.innerButton,
                    { backgroundColor: isFocused ? '#f8e2fd' : 'transparent' },
                  ]}>
                  <Feather
                    name={options.tabBarIcon}
                    size={24}
                    color={isFocused ? '#8f2abd' : '#535353'}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    borderRadius: 99,
    flexDirection: 'row',
    marginBottom: 14,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255,255,255, 0.9)',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.8,
  },

  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  innerButton: {
    padding: 12,
    borderRadius: 99,
  },
});
