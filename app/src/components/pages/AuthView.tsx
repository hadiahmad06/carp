import React, { useMemo, useState, useEffect } from "react";
import { Text, useColorScheme, StyleSheet, View, Image, TouchableOpacity, TextInput, Animated } from "react-native";
import { Dimensions } from 'react-native';

import SlideViews from "../templates/SlideViews";

const AuthView = () => {
  const colorScheme = useColorScheme(); // Get the current color scheme (light or dark)
  
  const icon = require("../../../../assets/icon.png");
  const appleLogo = require("../../../../assets/images/apple_logo.png");
  const googleLogo = require("../../../../assets/images/google_logo.webp");

  // Define light and dark styles conditionally
  const styles = useMemo(() => createStyles(colorScheme), [colorScheme]);

  // Animate the sliding effect when switching between Sign In and Sign Up
  const [showView1, setShowView1] = useState(true);

  return (
    <View style={styles.container}>
      <Image style={styles.appIcon} source={icon} />
      <View style={styles.content}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <SlideViews 
          view1={<View style={styles.titleContainer}><Text style={styles.title}>Log In</Text></View>}
          view2={<View style={styles.titleContainer}><Text style={styles.title}>Create an Account</Text></View>}
          animationTime={0.5}
          direction="horizontal"
          showView1={showView1}
          setShowView1={setShowView1}
          />
        </View>

        <Text style={styles.subtitle}>{"Enter your email to continue"}</Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="email@domain.com" placeholderTextColor="#828282" />
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>{"Continue"}</Text>
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
          By clicking Continue, you agree to our <Text style={styles.linkText}>Terms of Service</Text> and <Text style={styles.linkText}>Privacy Policy</Text>
        </Text>

        <TouchableOpacity style={styles.toggleButton} onPress={() => setShowView1((prev) => !prev)}>
          <Text style={styles.toggleButtonText}>{showView1 ? "Need an account? Sign Up" : "Already have an account? Log In"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Define styles based on the color scheme
const createStyles = (colorScheme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorScheme === "dark" ? "#121212" : "#fff", // Dark mode background adjusted to a darker shade
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  appIcon: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  appName: {
    fontSize: 24,
    width: "100%",
    fontWeight: "600",
    // textAlign: "center",
    marginBottom: 15,
    color: colorScheme === "dark" ? "#fff" : "#000", // Text color based on the mode
  },
  content: {
    width: "100%",
    alignItems: "center",
  },
  titleContainer: {
    width: "100%",
    marginBottom: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // position: "absolute"
  },
  title: {
    fontSize: 18,
    width: "100%",
    fontWeight: "600",
    // textAlign: "center",
    color: colorScheme === "dark" ? "#fff" : "#000", // Text color based on the mode
  },
  subtitle: {
    fontSize: 14,
    color: colorScheme === "dark" ? "#ccc" : "#828282", // Text color based on the mode for better contrast
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
    borderColor: colorScheme === "dark" ? "#444" : "#e0e0e0", // Border color
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: colorScheme === "dark" ? "#333" : "#f9f9f9", // Input background color
  },
  primaryButton: {
    height: 45,
    backgroundColor: colorScheme === "dark" ? "#ffffff" : "#000", // Button background color
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  primaryButtonText: {
    color: "#000", // Button text color for contrast in both modes
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
    backgroundColor: colorScheme === "dark" ? "#555" : "#e0e0e0", // Divider color based on the mode
  },
  orText: {
    marginHorizontal: 10,
    color: colorScheme === "dark" ? "#ccc" : "#828282", // Text color based on the mode
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
    backgroundColor: colorScheme === "dark" ? "#444" : "#f0f0f0", // Button background color based on mode
    borderRadius: 8,
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  oauthText: {
    fontWeight: "500",
    color: colorScheme === "dark" ? "#fff" : "#000", // Text color based on mode
  },
  termsText: {
    fontSize: 12,
    color: colorScheme === "dark" ? "#ccc" : "#828282", // Text color based on mode
    textAlign: "center",
    marginTop: 15,
  },
  linkText: {
    color: "#007BFF", // Blue for links to make them stand out
    fontWeight: "500",
  },
  toggleButton: {
    marginTop: 20,
  },
  toggleButtonText: {
    color: "#007BFF",
    fontWeight: "600",
  },
});

export default AuthView;