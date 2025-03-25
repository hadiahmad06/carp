import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from '@/src/components/atoms/Text';
import { Button } from '@/src/components/atoms/Button';
import { Bell, Shield, CreditCard, CircleHelp as HelpCircle, LogOut } from 'lucide-react-native';

export default function SettingsScreen() {
  const renderSettingItem = (icon: any, title: string, subtitle: string) => (
    <View style={styles.settingItem}>
      <View style={styles.settingIcon}>{icon}</View>
      <View style={styles.settingText}>
        <Text variant="h3">{title}</Text>
        <Text variant="caption" style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="h2" style={styles.sectionTitle}>Preferences</Text>
        {renderSettingItem(
          <Bell color="#1a73e8" size={24} />,
          "Notifications",
          "Manage your notification preferences"
        )}
        {renderSettingItem(
          <Shield color="#1a73e8" size={24} />,
          "Privacy",
          "Control your privacy settings"
        )}
        {renderSettingItem(
          <CreditCard color="#1a73e8" size={24} />,
          "Payment Methods",
          "Manage your payment options"
        )}
      </View>

      <View style={styles.section}>
        <Text variant="h2" style={styles.sectionTitle}>Support</Text>
        {renderSettingItem(
          <HelpCircle color="#1a73e8" size={24} />,
          "Help Center",
          "Get help with your account"
        )}
      </View>

      <Button 
        label="Sign Out"
        variant="outline"
        style={styles.signOutButton}
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
  section: {
    padding: 20,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  settingIcon: {
    marginRight: 16,
  },
  settingText: {
    flex: 1,
  },
  subtitle: {
    marginTop: 4,
    color: '#666',
  },
  signOutButton: {
    margin: 20,
  },
});