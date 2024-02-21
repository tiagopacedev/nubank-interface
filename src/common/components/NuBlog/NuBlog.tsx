import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { colors, fontSizes } from '~/common/styles/global';
import { blogData } from '~/utils/data/blogData';

export function NuBlog() {
  return (
    <View style={styles.containerBlog}>
      <View style={styles.header}>
        <Text style={styles.title}>Descubra Mais</Text>
        <Ionicons name="chevron-forward-outline" size={20} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginLeft: 24, paddingRight: 32 }}>
        {blogData.map((item) => (
          <View style={styles.blogItem} key={item.id}>
            <TouchableOpacity>
              <Image style={styles.image} source={item.img} />

              <View style={styles.blogInfo}>
                <Text style={styles.titleBlog}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>{item.buttonText}</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBlog: {
    paddingTop: 30,
    paddingBottom: 90,
    backgroundColor: colors.background,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingRight: 24,
    paddingLeft: 24,
  },

  blogItem: {
    width: 220,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    marginRight: 16,
  },

  blogInfo: { padding: 16 },

  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  titleBlog: {
    fontSize: fontSizes.small,
    fontWeight: '600',
    marginBottom: 8,
  },

  description: {
    fontSize: fontSizes.smallest,
    color: 'gray',
    lineHeight: 18,
    marginBottom: 16,
  },

  button: {
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 20,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },

  title: {
    fontSize: fontSizes.large,
    fontWeight: '500',
    marginBottom: 8,
    color: 'black',
  },

  invoiceTitle: {
    fontSize: fontSizes.medium,
    fontWeight: '400',
    marginBottom: 6,
  },
});
