import React, { useRef } from "react";
import { View, Text, Pressable, Animated, Linking } from "react-native";
import styles from "./footer.style";
import { Heart } from "lucide-react-native";

const Footer = ({ url }) => {
  return (
    <View className="flex-row p-5 justify-center gap-5">
      <Pressable
        className="bg-primary p-3 rounded-3xl px-4"
        onPress={() => {
          Linking.openURL(url);
        }}
      >
        <Text style={styles.applyBtnText}>APPLY NOW</Text>
      </Pressable>
      <Pressable className="bg-primary p-3 rounded-3xl px-4" onPress={() => {}}>
        <Heart size={20} color="#FFF" />
      </Pressable>
    </View>
  );
};

export default Footer;
