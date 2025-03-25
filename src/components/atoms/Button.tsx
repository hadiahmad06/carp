import { TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native';
import { Text } from './Text';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary' | 'outline';
  label: string;
}

export function Button({ variant = 'primary', label, style, ...props }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={[styles.base, styles[variant], style]} 
      {...props}
    >
      <Text 
        style={[
          styles.text, 
          variant === 'outline' && styles.outlineText
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#1a73e8',
  },
  secondary: {
    backgroundColor: '#e8f0fe',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#1a73e8',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  outlineText: {
    color: '#1a73e8',
  },
});