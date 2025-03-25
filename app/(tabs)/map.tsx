import { View, StyleSheet } from 'react-native';
import { Text } from '@/src/components/atoms/Text';
import MapView from 'react-native-maps';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <View style={styles.overlay}>
        <Text variant="h2">Find Rides Nearby</Text>
        <Text variant="body" style={styles.subtitle}>
          Discover carpool opportunities in your area
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 60,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  subtitle: {
    marginTop: 8,
    color: '#666',
  },
});