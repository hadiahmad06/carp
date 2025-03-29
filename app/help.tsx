import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from '@/src/components/atoms/Text';
import { Button } from '@/src/components/atoms/Button';
import { useRouter } from 'expo-router';
import { TriangleAlert as AlertTriangle, Phone, MessageSquare, Shield, Car, DollarSign } from 'lucide-react-native';
import { useColorScheme } from '@/src/hooks/useColorScheme';

type EmergencyOption = {
  id: string;
  title: string;
  description: string;
  icon: any;
  urgent: boolean;
};

const emergencyOptions: EmergencyOption[] = [
  {
    id: 'harassment',
    title: 'Harassment or Assault',
    description: 'Report inappropriate behavior or physical threats',
    icon: AlertTriangle,
    urgent: true,
  },
  {
    id: 'unsafe-driving',
    title: 'Unsafe Driving',
    description: 'Report dangerous driving behavior',
    icon: Car,
    urgent: true,
  },
  {
    id: 'scam',
    title: 'Payment Issues',
    description: 'Report fare disputes or payment problems',
    icon: DollarSign,
    urgent: false,
  },
];

export default function HelpScreen() {
  const router = useRouter();
  const { colors } = useColorScheme();

  const handleEmergencyCall = () => {
    // In a real app, this would initiate an emergency call
    console.log('Emergency call initiated');
  };

  const handleReport = (option: EmergencyOption) => {
    // In a real app, this would open a report form
    console.log(`Reporting ${option.id}`);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <AlertTriangle color="red" size={48} />
        <Text variant="h1" style={[styles.title, { color: colors.text }]}>
          Emergency & Support
        </Text>
      </View>

      <View style={[styles.emergencyCard, { backgroundColor: '#ff000015' }]}>
        <Text variant="h2" style={styles.emergencyTitle}>
          Need Immediate Help?
        </Text>
        <Text style={styles.emergencyText}>
          If you're in immediate danger, call emergency services
        </Text>
        <Button
          label="Call Emergency Services"
          onPress={handleEmergencyCall}
          style={styles.emergencyButton}
        />
      </View>

      <View style={styles.section}>
        <Text variant="h2" style={[styles.sectionTitle, { color: colors.text }]}>
          Report an Issue
        </Text>
        {emergencyOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionCard,
              { backgroundColor: colors.card },
              option.urgent && styles.urgentCard
            ]}
            onPress={() => handleReport(option)}
          >
            <View style={styles.optionIcon}>
              <option.icon
                size={24}
                color={option.urgent ? 'red' : colors.primary}
              />
            </View>
            <View style={styles.optionContent}>
              <Text
                variant="h3"
                style={[
                  styles.optionTitle,
                  { color: option.urgent ? 'red' : colors.text }
                ]}
              >
                {option.title}
              </Text>
              <Text
                style={[styles.optionDescription, { color: colors.subtext }]}
              >
                {option.description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={[styles.supportCard, { backgroundColor: colors.card }]}>
        <Text variant="h2" style={[styles.supportTitle, { color: colors.text }]}>
          Contact Support
        </Text>
        <View style={styles.supportOptions}>
          <TouchableOpacity
            style={[styles.supportOption, { backgroundColor: colors.background }]}
          >
            <Phone size={24} color={colors.primary} />
            <Text style={{ color: colors.text }}>Call Support</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.supportOption, { backgroundColor: colors.background }]}
          >
            <MessageSquare size={24} color={colors.primary} />
            <Text style={{ color: colors.text }}>Chat Support</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    paddingTop: 60,
  },
  title: {
    marginTop: 16,
  },
  emergencyCard: {
    margin: 20,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'red',
  },
  emergencyTitle: {
    color: 'red',
    marginBottom: 8,
  },
  emergencyText: {
    color: 'red',
    opacity: 0.8,
    marginBottom: 16,
  },
  emergencyButton: {
    backgroundColor: 'red',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  urgentCard: {
    borderWidth: 1,
    borderColor: 'red',
  },
  optionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
  },
  supportCard: {
    margin: 20,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  supportTitle: {
    marginBottom: 16,
  },
  supportOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  supportOption: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    width: '45%',
  },
});