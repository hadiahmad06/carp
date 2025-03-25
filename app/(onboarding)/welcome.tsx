import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Car, Users, Leaf } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function Welcome() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1a73e8', '#1557b0']}
        style={styles.background}
      />
      
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800' }}
          style={styles.image}
        />

        <Text style={styles.title}>Welcome to Carp</Text>
        <Text style={styles.subtitle}>Your Sustainable Ride-Sharing Solution</Text>

        <View style={styles.features}>
          <View style={styles.feature}>
            <Car color="#fff" size={32} />
            <Text style={styles.featureText}>Share rides easily</Text>
          </View>
          <View style={styles.feature}>
            <Users color="#fff" size={32} />
            <Text style={styles.featureText}>Meet new people</Text>
          </View>
          <View style={styles.feature}>
            <Leaf color="#fff" size={32} />
            <Text style={styles.featureText}>Reduce emissions</Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <Link href="/signup" style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </Link>
          <Link href="/(tabs)" style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>I already have an account</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: width * 0.8,
    height: width * 0.5,
    borderRadius: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 40,
    textAlign: 'center',
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 40,
  },
  feature: {
    alignItems: 'center',
  },
  featureText: {
    color: '#fff',
    marginTop: 8,
    fontSize: 14,
  },
  buttons: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#1a73e8',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    paddingVertical: 16,
  },
  secondaryButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});