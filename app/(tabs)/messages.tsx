import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from '@/src/components/atoms/Text';
import { MessageSquare } from 'lucide-react-native';

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.emptyState}>
          <MessageSquare size={48} color="#1a73e8" />
          <Text variant="h2" style={styles.title}>No Messages Yet</Text>
          <Text variant="body" style={styles.description}>
            Start a conversation with your carpool buddies. Messages will appear here.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  title: {
    marginTop: 16,
    marginBottom: 8,
  },
  description: {
    textAlign: 'center',
    color: '#666',
    maxWidth: '80%',
  },
});