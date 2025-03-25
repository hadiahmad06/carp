import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@/src/components/atoms/Text';
import { Button } from '@/src/components/atoms/Button';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800' }}
          style={styles.heroImage}
        />
        
        <View style={styles.header}>
          <Text variant="h1">Welcome back!</Text>
          <Text variant="body" style={styles.subtitle}>Ready for your next ride?</Text>
        </View>

        <View style={styles.section}>
          <Text variant="h2" style={styles.sectionTitle}>Upcoming Rides</Text>
          <View style={styles.card}>
            <Text variant="h3">No upcoming rides</Text>
            <Text variant="body" style={styles.cardText}>
              Find your next carpool buddy and start saving on commute costs!
            </Text>
            <Button label="Find a Ride" onPress={() => {}} style={styles.button} />
          </View>
        </View>

        <View style={styles.section}>
          <Text variant="h2" style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.card}>
            <Text variant="body">Your recent carpooling activity will appear here.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginBottom: 24,
  },
  header: {
    marginBottom: 32,
  },
  subtitle: {
    marginTop: 8,
    color: '#666',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardText: {
    marginVertical: 12,
    color: '#666',
  },
  button: {
    marginTop: 16,
  },
});