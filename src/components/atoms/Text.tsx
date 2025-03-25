import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';

interface TextProps extends RNTextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
}

export function Text({ variant = 'body', style, ...props }: TextProps) {
  return (
    <RNText style={[styles[variant], style]} {...props} />
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  body: {
    fontSize: 16,
    color: '#333333',
  },
  caption: {
    fontSize: 14,
    color: '#666666',
  },
});