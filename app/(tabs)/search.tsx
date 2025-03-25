import React, { useState, useCallback } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Text } from '@/src/components/atoms/Text';
import { Button } from '@/src/components/atoms/Button';
import { MapPin, Calendar, Clock, Users, ChevronRight } from 'lucide-react-native';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import carpoolData from '@/src/data/carpools.json';

type SearchMode = 'leaveBy' | 'arriveBy';

export default function SearchScreen() {
  const router = useRouter();
  const { colors } = useColorScheme();
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [searchMode, setSearchMode] = useState<SearchMode>('leaveBy');
  const [selectedTime, setSelectedTime] = useState('');
  const [searchResults, setSearchResults] = useState(carpoolData.users);

  const handleSearch = useCallback(() => {
    if (!origin || !destination) return;

    const filteredResults = carpoolData.users.filter(user => 
      user.trips.some(trip => {
        const matchesOrigin = trip.origin.toLowerCase().includes(origin.toLowerCase());
        const matchesDestination = trip.destination.toLowerCase().includes(destination.toLowerCase());
        return matchesOrigin && matchesDestination;
      })
    );

    setSearchResults(filteredResults);
  }, [origin, destination]);

  const handleJoinCarpool = useCallback((userId: string, tripId: string) => {
    // In a real app, this would make an API call
    console.log(`Joining carpool: ${tripId} from user: ${userId}`);
    router.push(`/messages?chatId=${tripId}`);
  }, [router]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.searchSection, { backgroundColor: colors.card }]}>
          <View style={styles.inputContainer}>
            <MapPin color={colors.primary} size={24} />
            <TextInput
              style={[styles.input, { color: colors.text }]}
              placeholder="Origin"
              placeholderTextColor={colors.subtext}
              value={origin}
              onChangeText={setOrigin}
            />
          </View>
          
          <View style={[styles.inputContainer, { borderTopWidth: 1, borderTopColor: colors.border }]}>
            <MapPin color={colors.primary} size={24} />
            <TextInput
              style={[styles.input, { color: colors.text }]}
              placeholder="Destination"
              placeholderTextColor={colors.subtext}
              value={destination}
              onChangeText={setDestination}
            />
          </View>

          <View style={[styles.timeSection, { borderTopWidth: 1, borderTopColor: colors.border }]}>
            <View style={styles.toggleContainer}>
              <TouchableOpacity
                style={[
                  styles.toggleButton,
                  searchMode === 'leaveBy' && { backgroundColor: colors.primary }
                ]}
                onPress={() => setSearchMode('leaveBy')}
              >
                <Text style={[
                  styles.toggleText,
                  searchMode === 'leaveBy' && styles.toggleTextActive
                ]}>Leave by</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.toggleButton,
                  searchMode === 'arriveBy' && { backgroundColor: colors.primary }
                ]}
                onPress={() => setSearchMode('arriveBy')}
              >
                <Text style={[
                  styles.toggleText,
                  searchMode === 'arriveBy' && styles.toggleTextActive
                ]}>Arrive by</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.timeInput}>
              <Clock color={colors.primary} size={24} />
              <TextInput
                style={[styles.input, { color: colors.text }]}
                placeholder="Select time"
                placeholderTextColor={colors.subtext}
                value={selectedTime}
                onChangeText={setSelectedTime}
              />
            </View>
          </View>

          <Button
            label="Search Rides"
            style={styles.searchButton}
            onPress={handleSearch}
          />
        </View>

        <View style={styles.results}>
          {searchResults.map(user => (
            user.trips.map(trip => (
              <TouchableOpacity
                key={trip.id}
                style={[styles.resultCard, { backgroundColor: colors.card }]}
                onPress={() => handleJoinCarpool(user.id, trip.id)}
              >
                <View style={styles.cardHeader}>
                  <Image source={{ uri: user.avatar }} style={styles.avatar} />
                  <View style={styles.userInfo}>
                    <Text variant="h3" style={{ color: colors.text }}>{user.name}</Text>
                    <Text variant="caption" style={{ color: colors.subtext }}>⭐ {user.rating}</Text>
                  </View>
                </View>

                <View style={styles.tripInfo}>
                  <View style={styles.infoRow}>
                    <Calendar size={16} color={colors.primary} />
                    <Text style={[styles.infoText, { color: colors.text }]}>{trip.date}</Text>
                  </View>
                  <View style={styles.infoRow}>
                    <Clock size={16} color={colors.primary} />
                    <Text style={[styles.infoText, { color: colors.text }]}>
                      {trip.departureTime} - {trip.returnTime}
                    </Text>
                  </View>
                  <View style={styles.infoRow}>
                    <Users size={16} color={colors.primary} />
                    <Text style={[styles.infoText, { color: colors.text }]}>
                      {trip.spacesAvailable} seats available
                    </Text>
                  </View>
                </View>

                <View style={styles.eventInfo}>
                  <Text variant="h3" style={{ color: colors.text }}>{trip.event}</Text>
                  <Text style={{ color: colors.subtext }}>{trip.venue}</Text>
                </View>

                <View style={styles.priceSection}>
                  <Text variant="h2" style={{ color: colors.text }}>${trip.price}</Text>
                  <ChevronRight size={24} color={colors.primary} />
                </View>
              </TouchableOpacity>
            ))
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  searchSection: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
  timeSection: {
    padding: 16,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  toggleButton: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  toggleText: {
    color: '#666',
  },
  toggleTextActive: {
    color: '#fff',
  },
  timeInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButton: {
    margin: 16,
  },
  results: {
    gap: 16,
  },
  resultCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  userInfo: {
    marginLeft: 12,
  },
  tripInfo: {
    marginBottom: 16,
    gap: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  infoText: {
    fontSize: 14,
  },
  eventInfo: {
    marginBottom: 16,
  },
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});