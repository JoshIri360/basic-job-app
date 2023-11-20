import React from "react";
import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { Search } from "lucide-react-native";

const Welcome = () => {
  const [activeJobType, setActiveJobType] = React.useState("All");
  const jobCategories = ["All", "Full Time", "Part Time", "Freelance"];
  const router = useRouter();

  return (
    <View>
      <View className="w-full pb-5">
        <Text className="font-regular text-lg text-secondary">Hello Josh</Text>
        <Text className="font-bold text-xl text-primary">
          Find your perfect job
        </Text>
      </View>

      <View className="flex-row justify-between w-full">
        <View className="w-[85%]">
          <TextInput
            value=""
            onChange={() => {}}
            placeholder="Find your dream job here"
            className="w-full h-10 p-2 rounded-lg bg-white"
          />
        </View>
        <View className="bg-tertiary w-10 items-center justify-center p-1 rounded-xl">
          <Search size={25} className="text-lightWhite" />
        </View>
      </View>

      <View className="justify-between w-full mt-5">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={jobCategories}
          contentContainerStyle={{
            justifyContent: "space-between",
            gap: 10,
          }}
          renderItem={({ item }) => (
            <Pressable
              className={`p-3 rounded-3xl px-4 ${
                activeJobType === item
                  ? "bg-white text-tertiary"
                  : "bg-tertiary text-lightWhite"
              }`}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text
                className={`font-bold text-lightWhite ${
                  activeJobType === item ? "text-tertiary" : "text-lightWhite"
                }`}
              >
                {item}
              </Text>
            </Pressable>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default Welcome;
