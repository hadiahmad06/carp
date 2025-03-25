import { View, StyleSheet, Pressable } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { Chrome as Home, Map, MessageSquare, User, Settings } from 'lucide-react-native';
import { Text } from '../atoms/Text';

interface TabItem {
  name: string;
  icon: typeof Home;
  path: string;
}

const tabs: TabItem[] = [
  { name: 'Home', icon: Home, path: '/' },
  { name: 'Map', icon: Map, path: '/map' },
  { name: 'Messages', icon: MessageSquare, path: '/messages' },
  { name: 'Profile', icon: User, path: '/profile' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

export function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = pathname === tab.path;
        const Icon = tab.icon;
        
        return (
          <Pressable
            key={tab.name}
            style={styles.tab}
            onPress={() => router.push(tab.path)}
          >
            <Icon
              size={24}
              color={isActive ? '#1a73e8' : '#666666'}
              strokeWidth={2}
            />
            <Text
              variant="caption"
              style={[
                styles.label,
                isActive && styles.activeLabel
              ]}
            >
              {tab.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    paddingBottom: 20,
    paddingTop: 12,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginTop: 4,
    color: '#666666',
  },
  activeLabel: {
    color: '#1a73e8',
  },
});