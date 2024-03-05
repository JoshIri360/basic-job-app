import { SafeAreaView, ScrollView, View } from "react-native";

import { Stack, useRouter } from "expo-router";

import { Menu, User } from "lucide-react-native";
import { useState } from "react";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { COLORS } from "../constants";

export default function Home() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const handleClick = () => {
    router.push(`/search/${searchTerm}`);
  };

  return (
    <SafeAreaView className="flex-1">
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn dimension="100%">
              <Menu size={24} color="black" />
            </ScreenHeaderBtn>
          ),
          headerRight: () => (
            <ScreenHeaderBtn dimension="100%">
              <User size={24} color="black" />
            </ScreenHeaderBtn>
          ),
          headerTitle: "",
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-lightWhite"
      >
        <View className="p-6">
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={handleClick}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
