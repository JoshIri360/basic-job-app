import React from "react";
import { Text, View } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const About = ({ info }) => {
  const sentences = info.split("\n\n");

  return (
    <View className="w-full p-5 pb-0">
      <View className="bg-[#FFF] p-5 rounded-2xl">
        <Text
          className="font-bold text-[20px] text-primary mb-3"
          style={{
            fontSize: SIZES.large,
            color: COLORS.primary,
            fontFamily: FONT.bold,
          }}
        >
          About the job:
        </Text>
        {sentences.map((sentence, index) => (
          <Text key={index} className="font-regular mb-3 text-gray">
            {sentence}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default About;
