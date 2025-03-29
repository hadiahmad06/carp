import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from '@/src/components/atoms/Text';
import { Button } from '@/src/components/atoms/Button';
import { Star, ThumbsUp, Award, Shield, Clock, Car } from 'lucide-react-native';
import { useColorScheme } from '@/src/hooks/useColorScheme';

type Rating = {
  category: string;
  score: number;
  icon: any;
};

const ratings: Rating[] = [
  { category: 'Safety', score: 4.9, icon: Shield },
  { category: 'Punctuality', score: 4.7, icon: Clock },
  { category: 'Vehicle', score: 4.8, icon: Car },
];

export default function ProfileScreen() {
  const { colors } = useColorScheme();

  const renderRating = ({ category, score, icon: Icon }: Rating) => (
    <View key={category} style={[styles.ratingCard, { backgroundColor: colors.card }]}>
      <Icon color={colors.primary} size={24} />
      <Text variant="h2" style={{ color: colors.text }}>{score}</Text>
      <Text variant="caption" style={{ color: colors.subtext }}>{category}</Text>
    </View>
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400' }}
          style={styles.avatar}
        />
        <Text variant="h1" style={[styles.name, { color: colors.text }]}>Sarah Connor</Text>
        <Text variant="body" style={[styles.bio, { color: colors.subtext }]}>
          Eco-conscious commuter | Coffee lover
        </Text>
      </View>

      <View style={styles.ratingsGrid}>
        {ratings.map(rating => renderRating(rating))}
      </View>

      <View style={[styles.statsCard, { backgroundColor: colors.card }]}>
        <View style={styles.statItem}>
          <Text variant="h3" style={{ color: colors.text }}>42</Text>
          <Text variant="caption" style={{ color: colors.subtext }}>Rides Given</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text variant="h3" style={{ color: colors.text }}>38</Text>
          <Text variant="caption" style={{ color: colors.subtext }}>Rides Taken</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text variant="h3" style={{ color: colors.text }}>2%</Text>
          <Text variant="caption" style={{ color: colors.subtext }}>Cancellation Rate</Text>
        </View>
      </View>

      <View style={[styles.section, { backgroundColor: colors.card }]}>
        <Text variant="h2" style={[styles.sectionTitle, { color: colors.text }]}>Recent Reviews</Text>
        {[1, 2, 3].map((_, index) => (
          <View key={index} style={[styles.review, index !== 2 && styles.reviewDivider]}>
            <View style={styles.reviewHeader}>
              <Image
                source={{ uri: `https://images.unsplash.com/photo-${1500000000000 + index}?w=100` }}
                style={styles.reviewerAvatar}
              />
              <View style={styles.reviewerInfo}>
                <Text variant="h3" style={{ color: colors.text }}>John Doe</Text>
                <Text variant="caption" style={{ color: colors.subtext }}>2 days ago</Text>
              </View>
              <View style={styles.rating}>
                <Star size={16} color={colors.primary} fill={colors.primary} />
                <Text style={{ color: colors.text }}>4.9</Text>
              </View>
            </View>
            <Text style={[styles.reviewText, { color: colors.text }]}>
              Great driver! Very punctual and the car was clean. Would definitely ride again.
            </Text>
          </View>
        ))}
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
    marginBottom: 24,
  },
  ratingsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  ratingCard: {
    flex: 1,
    margin: 4,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statsCard: {
    flexDirection: 'row',
    margin: 20,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#e5e5e5',
    marginHorizontal: 16,
  },
  section: {
    margin: 20,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  review: {
    paddingVertical: 16,
  },
  reviewDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  reviewerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  reviewerInfo: {
    flex: 1,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  reviewText: {
    lineHeight: 20,
  },
  editButton: {
    margin: 20,
  },
});