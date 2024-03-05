
import { Stack, useRouter, useSearchParams } from "expo-router";
import { ArrowLeft, Share } from "lucide-react-native";
import React from "react";
import {
  ActivityIndicator,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  Specifics,
} from "../../components";
import { COLORS } from "../../constants";
import useFetch from "../../hooks/useFetch";

const tabs = ["About", "Qualifications", "Responsibilites"];

const JobDetails = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  const params = useSearchParams();
  const router = useRouter();

  const { data, isLoading, error, reFetch } = useFetch("job-details", {
    job_id: params.id,
  });

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    reFetch();
    setRefreshing(false);
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case "About":
        return (
          <JobAbout info={data[0].job_description ?? "No data provided"} />
        );
      case "Responsibilites":
        return (
          <Specifics
            title="Responsibilities"
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );
      default:
        return <JobAbout />;
    }
  };

  if (!data || (!data[0] && !isLoading)) {
    return (
      <View>
        <ActivityIndicator size={"large"} color={COLORS.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-lightWhite">
      <Stack.Screen
        initialParams={{ title: "", headerTitle: "" }}
        options={{
          headerTitle: "",
          animation: "slide_from_left",
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerBackVisible: false,
          headerTitleAlign: "center",
          headerLeft: () => (
            <Pressable
              onPress={() => {
                router.back();
              }}
              android_disableSound={true}
              className="w-20"
            >
              <ArrowLeft size={20} className="text-primary" />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => {
                router.back();
              }}
            >
              <Share size={20} className="text-primary" />
            </Pressable>
          ),
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isLoading ? (
          <View>
            <ActivityIndicator size={"large"} color={COLORS.primary} />
          </View>
        ) : error ? (
          <View>
            <Text className="font-medium text-[15px] text-red">{error}</Text>
          </View>
        ) : data == [] || data[0] == undefined || !data ? (
          <View>
            <Text className="font-medium text-[15px] text-red">
              No data found
            </Text>
          </View>
        ) : (
          <View>
            <Company
              companyLogo={data[0].employer_logo}
              jobTitle={data[0].job_title}
              companyName={data[0].employer_name}
              location={data[0].job_city}
            />
            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {displayTabContent()}
          </View>
        )}
      </ScrollView>
      <JobFooter
        url={
          data[0]?.job_google_link ?? "https://careers.google.com/jobs/results"
        }
      />
    </SafeAreaView>
  );
};

export default JobDetails;
