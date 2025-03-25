import { useColorScheme as _useColorScheme } from 'react-native';

export function useColorScheme() {
  const colorScheme = _useColorScheme();
  return {
    isDark: colorScheme === 'dark',
    colors: {
      background: colorScheme === 'dark' ? '#121212' : '#f5f5f5',
      card: colorScheme === 'dark' ? '#1e1e1e' : '#ffffff',
      text: colorScheme === 'dark' ? '#ffffff' : '#000000',
      subtext: colorScheme === 'dark' ? '#a0a0a0' : '#666666',
      primary: '#1a73e8',
      border: colorScheme === 'dark' ? '#2c2c2c' : '#e5e5e5',
    },
  };
}