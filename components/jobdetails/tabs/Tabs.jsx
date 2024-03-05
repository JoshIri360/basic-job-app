import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";

import styles from "./tabs.style";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container} className="w-screen px-5">
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "space-between",
          // gap: 20,
          width: "100%",
        }}
        renderItem={({ item }) => (
          <Pressable
            className={`p-3 bg-white rounded-3xl px-4 ${
              activeTab === item ? "bg-primary " : "bg-white"
            }`}
            onPress={() => setActiveTab(item)}
            android_disableSound={true}
            key={`tabs-${item}
          }`}
          >
            <Text
              className={`font-bold ${
                activeTab === item ? "text-white" : "text-primary"
              }`}
            >
              {item}
            </Text>
          </Pressable>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Tabs;
