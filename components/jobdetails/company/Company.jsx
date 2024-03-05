import React from "react";
import { Image, Text, View } from "react-native";

import { Briefcase, MapPin } from "lucide-react-native";
import { COLORS } from "../../../constants";
import styles from "./company.style";

const imageExists = (image_url) => {
  return fetch(image_url, { method: "HEAD" })
    .then((res) => res.ok)
    .catch((err) => false);
};

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container} className="mx-5">
      <View style={styles.logoBox}>
        {companyLogo != null && imageExists(companyLogo) ? (
          <Image
            source={{ uri: companyLogo }}
            className="w-14 h-14 rounded-xl"
          />
        ) : (
          <Briefcase size={25} color={COLORS.primary} />
        )}
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>
          {companyName}
          {" / "}
        </Text>
        {location != null ? (
          <View style={styles.locationBox}>
            <MapPin size={15} color={COLORS.gray} />
            <Text style={styles.locationName}> {location}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Company;
