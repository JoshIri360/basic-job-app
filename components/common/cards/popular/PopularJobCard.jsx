import { Briefcase, Globe } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";
import { COLORS } from "../../../../constants";
import currencySymbolMap from "../../../../utils/currencySymbolMap";
import salaryPeriodMap from "../../../../utils/salaryIntervalMap";

export default Popularjobscard = ({ item, handleNavigate }) => {
  const convertToThousands = (num) => {
    if (num >= 1000) return (num / 1000).toString() + "k";
    else return num;
  };

  const imageExists = (image_url) => {
    return fetch(image_url, { method: "HEAD" })
      .then((res) => res.ok)
      .catch((err) => false);
  };

  return (
    <Pressable
      className="bg-white my-5 w-[250px] min-h-[150px] rounded-xl p-4 justify-between"
      onPress={handleNavigate}
    >
      <View>
        <View className="flex-row items-center justify-center w-14 h-14 bg-lightWhite rounded-xl">
          {item.employer_logo != null && imageExists(item.employer_logo) ? (
            <Image
              source={{ uri: item.employer_logo }}
              className="w-10 h-10 rounded-xl"
            />
          ) : (
            <Briefcase size={25} color={COLORS.primary} />
          )}
        </View>

        <Text className="font-medium text-[15px] mt-1 text-gray">
          {item.employer_name}
        </Text>

        <Text className="font-bold text-[19px] text-primary" numberOfLines={1}>
          {item.job_title}
        </Text>
      </View>

      <View>
        {item.job_city && (
          <View className="flex-row items-center">
            <Text className="font-medium text-[15px] text-gray">
              {item.job_city}
            </Text>
            {item.job_is_remote && (
              <View className="flex-row items-center">
                <Text className="font-medium text-[15px] text-gray">
                  {" · "}
                </Text>
                <Globe size={15} color="#83829A" />
                <Text className="font-medium text-[15px] text-gray">
                  {" "}
                  Remote
                </Text>
              </View>
            )}
          </View>
        )}

        {item.job_min_salary && item.job_max_salary && (
          <Text className="font-medium text-[15px] text-gray">
            {currencySymbolMap[item.job_salary_currency]}
            {convertToThousands(item.job_min_salary)} -{" "}
            {currencySymbolMap[item.job_salary_currency]}
            {convertToThousands(item.job_max_salary)}
            {` / ${salaryPeriodMap[item.job_salary_period]}`}
          </Text>
        )}
      </View>
    </Pressable>
  );
};
