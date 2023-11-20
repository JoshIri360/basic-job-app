import { Image, Pressable, Text, View } from "react-native";
import { Briefcase, Globe } from "lucide-react-native";
import { COLORS } from "../../../../constants";

export default NearbyJobCard = ({ item, handleNavigate }) => {
  const imageExists = (image_url) => {
    return fetch(image_url, { method: "HEAD" })
      .then((res) => res.ok)
      .catch((err) => false);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <View className="w-screen px-5">
      <Pressable
        className="flex-row bg-white my-2 w-full rounded-xl p-4 "
        onPress={handleNavigate}
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 5.84,
          elevation: 5,
        }}
      >
        <View>
          <View className="flex-row items-center justify-center w-14 h-14 bg-lightWhite rounded-xl mr-5">
            {item.employer_logo != null && imageExists(item.employer_logo) ? (
              <Image
                source={{ uri: item.employer_logo }}
                className="w-10 h-10 rounded-xl"
              />
            ) : (
              <Briefcase size={25} color={COLORS.primary} />
            )}
          </View>
        </View>

        <View>
          <Text className="font-medium text-[15px] mt-1 text-gray">
            {item.employer_name}
          </Text>
          <Text
            className="font-bold text-[19px] text-primary"
            numberOfLines={1}
          >
            {truncate(item.job_title, 20)}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};
