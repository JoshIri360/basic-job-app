import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, FlatList, Image } from "react-native";
import useFetch from "../../../hooks/useFetch";

import { COLORS } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import dataTest from "../../../c";

const Popularjobs = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);

  // const {
  //   data: fetchData,
  //   isLoading: fetchLoading,
  //   error: fetchError,
  // } = useFetch("search", {
  //   query: "React Native developer in Nigeria",
  //   page: "1",
  //   num_pages: "1",
  // });

  useEffect(() => {
    // setIsLoading(fetchLoading);
    // setError(fetchError);
    // setData(fetchData);
    setData(dataTest.data);
}, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const convertToThousands = (num) => {
    if (num >= 1000) return (num / 1000).toString() + "k";
  };

  return (
    <View className="mt-4">
      <View className="flex-row items-end justify-between">
        <View>
          <Text className="font-medium text-[18px] text-primary">
            Popular Jobs
          </Text>
        </View>
        <View>
          <Text className="font-medium text-[15px] text-gray">Show all</Text>
        </View>
      </View>
      <View className="flex-row items-center justify-center min-h-[180px]">
        {isLoading ? (
          <View>
            <ActivityIndicator size={"large"} color={COLORS.primary} />
          </View>
        ) : error ? (
          <View>
            <Text className="font-medium text-[15px] text-red">{error}</Text>
          </View>
        ) : (
          <View>
            <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.job_id}
              contentContainerStyle={{
                justifyContent: "space-between",
                gap: 25,
              }}
              renderItem={({ item }) => {
                return <PopularJobCard item={item} />;
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
