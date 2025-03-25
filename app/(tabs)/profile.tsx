import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Text } from '@/src/components/atoms/Text';
import { Button } from '@/src/components/atoms/Button';
import { Star, ThumbsUp, Award } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400' }}
          style={styles.avatar}
        />
        <Text variant="h1" style={styles.name}>Sarah Connor</Text>
        <Text variant="body" style={styles.bio}>Eco-conscious commuter | Coffee lover</Text>
      </View>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Star color="#1a73e8" size={24} />
          <Text variant="h2">4.9</Text>
          <Text variant="caption">Rating</Text>
        </View>
        <View style={styles.statItem}>
          <ThumbsUp color="#1a73e8" size={24} />
          <Text variant="h2">42</Text>
          <Text variant="caption">Rides</Text>
        </View>
        <View style={styles.statItem}>
          <Award color="#1a73e8" size={24} />
          <Text variant="h2">12</Text>
          <Text variant="caption">Reviews</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text variant="h2" style={styles.sectionTitle}>About Me</Text>
        <Text variant="body">
          I'm a regular commuter between downtown and the suburbs. I enjoy meeting new people and sharing rides to reduce our carbon footprint.
        </Text>
      </View>

      <Button 
        label="Edit Profile"
        variant="outline"
        style={styles.editButton}
        onPress={() => {}}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    marginBottom: 8,
  },
  bio: {
    color: '#666',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
    marginHorizontal: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  editButton: {
    margin: 20,
  },
});