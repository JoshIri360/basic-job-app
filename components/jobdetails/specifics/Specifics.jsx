import React from "react";
import { Text, View } from "react-native";

import styles from "./specifics.style";

const Specifics = ({ title, points }) => {
  return (
    <View style={styles.container} className="mx-5">
      <Text style={styles.title}>{title}</Text>
      <View style={styles.pointsContainer}>
        {points.map((point, index) => (
          <View key={`specifics-${index}`} style={styles.pointWrapper}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{point}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
