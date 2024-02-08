import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Colors } from '~/common/styles/root';
import { blogData } from '~/utils/data/blogData';

export function NuBlog() {
  return (
    <View style={styles.containerCredidCard}>
      <View style={styles.creditCardView}>
        <Text style={styles.title}>Descubra Mais</Text>
        <Ionicons name="chevron-forward-outline" size={20} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginLeft: 24, paddingRight: 32 }}>
        {blogData.map((item, index) => (
          <View style={styles.blogItem}>
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
  containerCredidCard: {
    paddingTop: 30,
    paddingBottom: 24,
  },

  creditCardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingRight: 24,
    paddingLeft: 24,
  },

  blogItem: {
    width: 220,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginRight: 16,
  },

  blogInfo: { padding: 16 },

  image: {
    width: '100%', // Set the width of the image
    height: 120, // Set the height of the image
    resizeMode: 'cover',
    borderRadius: 10,
  },

  titleBlog: { fontSize: 14, fontWeight: '600', marginBottom: 8 },

  description: { fontSize: 12, color: 'gray', lineHeight: 18, marginBottom: 16 },

  button: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 20,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: { color: '#fff', fontWeight: '600' },

  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
    color: 'black',
  },

  invoiceInfo: {},

  invoiceTitle: { fontSize: 16, fontWeight: '400', marginBottom: 6 },
});
