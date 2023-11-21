import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, FlatList, Image } from "react-native";
import { useRouter } from "expo-router";
import useFetch from "../../../hooks/useFetch";

import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import dataTest from "../../../c";

const Nearbyjobs = () => {
  // const [isLoading, setIsLoading] = React.useState(false);
  // const [error, setError] = React.useState(null);
  // const [data, setData] = React.useState(null);

  const router = useRouter();

  const { data, isLoading, error } = useFetch("search", {
    query: "Python developer in Texas, USA",
    page: "1",
    num_pages: "1",
  });

  useEffect(() => {
    // setIsLoading(fetchLoading);
    // setError(fetchError);
    // setData(fetchData);
    // setData(dataTest.data);
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const convertToThousands = (num) => {
    if (num >= 1000) return (num / 1000).toString() + "k";
  };

  return (
    <View className="mt-1">
      <View className="flex-row items-end justify-between ">
        <Text className="font-medium text-[18px] text-primary">
          Popular Jobs
        </Text>

        <Text className="font-medium text-[15px] text-gray">Show all</Text>
      </View>
      <View className="flex-row items-center justify-center py-5">
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text className="font-medium text-[15px] text-red">{error}</Text>
        ) : Array.isArray(data) && data.length === 0 ? (
          <Text className="font-medium text-[15px] text-red">No data</Text>
        ) : (
          <View>
            {data?.map((item, index) => (
              <NearbyJobCard
                key={`nearby-job-${item?.job_id}`}
                item={item}
                handleNavigate={() =>
                  router.push({
                    pathname: `/job-details/${item?.job_id}`,
                  })
                }
              />
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
