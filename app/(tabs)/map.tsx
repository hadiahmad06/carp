import { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Text } from '@/src/components/atoms/Text';
import { Button } from '@/src/components/atoms/Button';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useRouter } from 'expo-router';
import { MapPin, Navigation, TriangleAlert as AlertTriangle } from 'lucide-react-native';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import carpoolData from '@/src/data/carpools.json';

const { width, height } = Dimensions.get('window');

type Location = {
  latitude: number;
  longitude: number;
};

const MINNEAPOLIS = {
  latitude: 44.9778,
  longitude: -93.2650,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function MapScreen() {
  const router = useRouter();
  const { colors } = useColorScheme();
  const [selectedRide, setSelectedRide] = useState(null);
  const [userLocation, setUserLocation] = useState<Location | null>(null);

  // Simulated user location for demo
  useEffect(() => {
    setUserLocation({
      latitude: 44.9778,
      longitude: -93.2650,
    });
  }, []);

  const handleRideSelect = (ride) => {
    setSelectedRide(ride);
    // Animate to show the route
  };

  const handleEmergency = () => {
    router.push('/help');
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={MINNEAPOLIS}
        showsUserLocation
        showsMyLocationButton
      >
        {userLocation && (
          <Marker
            coordinate={userLocation}
            title="You are here"
          >
            <View style={styles.userMarker}>
              <MapPin color={colors.primary} size={24} />
            </View>
          </Marker>
        )}

        {carpoolData.users.map(user => 
          user.trips.map(trip => (
            <Marker
              key={trip.id}
              coordinate={{
                latitude: 44.9778 + Math.random() * 0.1 - 0.05,
                longitude: -93.2650 + Math.random() * 0.1 - 0.05,
              }}
              onPress={() => handleRideSelect(trip)}
            >
              <View style={styles.rideMarker}>
                <Navigation color="#fff" size={16} />
              </View>
            </Marker>
          ))
        )}
      </MapView>

      <View style={[styles.overlay, { backgroundColor: colors.card }]}>
        <Text variant="h2">Available Rides</Text>
        <Text variant="body" style={styles.subtitle}>
          {carpoolData.users.reduce((acc, user) => acc + user.trips.length, 0)} rides nearby
        </Text>
      </View>

      {selectedRide && (
        <View style={[styles.rideDetails, { backgroundColor: colors.card }]}>
          <View style={styles.rideHeader}>
            <Text variant="h3">{selectedRide.event}</Text>
            <Text variant="body" style={{ color: colors.subtext }}>{selectedRide.venue}</Text>
          </View>
          <View style={styles.rideInfo}>
            <Text variant="body">
              Departure: {selectedRide.departureTime}
            </Text>
            <Text variant="body">
              Available seats: {selectedRide.spacesAvailable}
            </Text>
            <Text variant="h3" style={styles.price}>
              ${selectedRide.price}
            </Text>
          </View>
          <Button
            label="Join Ride"
            onPress={() => router.push(`/ride-confirmation?id=${selectedRide.id}`)}
            style={styles.joinButton}
          />
        </View>
      )}

      <TouchableOpacity
        style={[styles.emergencyButton, { backgroundColor: colors.card }]}
        onPress={handleEmergency}
      >
        <AlertTriangle color="red" size={24} />
        <Text style={styles.emergencyText}>Emergency</Text>
      </TouchableOpacity>
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
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  subtitle: {
    marginTop: 8,
    opacity: 0.7,
  },
  userMarker: {
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  rideMarker: {
    backgroundColor: '#1a73e8',
    padding: 8,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  rideDetails: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  rideHeader: {
    marginBottom: 16,
  },
  rideInfo: {
    marginBottom: 16,
  },
  price: {
    marginTop: 8,
  },
  joinButton: {
    marginTop: 8,
  },
  emergencyButton: {
    position: 'absolute',
    top: 120,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emergencyText: {
    color: 'red',
    marginLeft: 8,
    fontWeight: '600',
  },
});