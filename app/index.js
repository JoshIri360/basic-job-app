import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, SafeAreaView } from "react-native";

import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { Menu, User } from "lucide-react-native";

export default function Home() {
  const router = useRouter();

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
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
