import * as React from "react";
import { Text } from 'react-native';
import { StyleSheet, View, Image, TouchableOpacity, TextInput } from "react-native";

const SignIn = () => {
  const icon = require("../../../assets/icon.png");
  const appleLogo = require("../../../assets/images/apple_logo.png");
  const googleLogo = require("../../../assets/images/google_logo.svg"); // Changed to PNG for compatibility

  return (
    <View style={styles.container}>
      <Image style={styles.appIcon} source={icon} />
      <Text style={styles.appName}>Carp</Text>
      
      <View style={styles.content}>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.subtitle}>Enter your email to sign up for this app</Text>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="email@domain.com" placeholderTextColor="#828282" />
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.oauthButtons}>
          <TouchableOpacity style={styles.oauthButton}>
            <Image style={styles.logo} source={googleLogo} />
            <Text style={styles.oauthText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oauthButton}>
            <Image style={styles.logo} source={appleLogo} />
            <Text style={styles.oauthText}>Continue with Apple</Text>
          </TouchableOpacity>
        </View>

		<Text style={styles.termsText}>
			By clicking continue, you agree to our <Text style={styles.linkText}>Terms of Service</Text> and <Text style={styles.linkText}>Privacy Policy</Text>
		</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  appIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  appName: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  content: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#828282",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    gap: 10,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#f9f9f9",
  },
  primaryButton: {
    height: 45,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 15,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#e0e0e0",
  },
  orText: {
    marginHorizontal: 10,
    color: "#828282",
  },
  oauthButtons: {
    width: "100%",
    gap: 10,
  },
  oauthButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  oauthText: {
    fontWeight: "500",
  },
  termsText: {
    fontSize: 12,
    color: "#828282",
    textAlign: "center",
    marginTop: 15,
  },
  linkText: {
    color: "#000",
    fontWeight: "500",
  },
});

export default SignIn;
