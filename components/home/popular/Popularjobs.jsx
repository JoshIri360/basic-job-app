import { useRouter } from "expo-router";
import React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { COLORS } from "../../../constants";
import useFetch from "../../../hooks/useFetch";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";


const Popularjobs = () => {
  // const [isLoading, setIsLoading] = React.useState(false);
  // const [error, setError] = React.useState(null);
  // const [data, setData] = React.useState(null);

  const { data, isLoading, error } = useFetch("search", {
    query: "React Native developer in Nigeria",
    page: "1",
    num_pages: "1",
  });

  const router = useRouter();

  // useEffect(() => {
  // setIsLoading(fetchLoading);
  // setError(fetchError);
  // setData(fetchData);
  // setData(dataTest.data);
  // }, []);

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
                return (
                  <PopularJobCard
                    item={item}
                    handleNavigate={() =>
                      router.push({
                        pathname: `/job-details/${item?.job_id}`,
                      })
                    }
                  />
                );
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
