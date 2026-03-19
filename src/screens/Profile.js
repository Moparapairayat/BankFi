import {View, Text, ScrollView, Image} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";

import {svg} from "../svg";
import {theme} from "../constants";
import {components} from "../components";

const Profile = ({navigation}) => {
  const renderHeader = () => {
    return <components.Header title="Profile" goBack={true} />;
  };

  const renderUserInfo = () => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderBottomWidth: 1,
          borderBottomColor: "#CED6E1",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://dl.dropbox.com/s/g61a6dbx2t5adiv/01.jpg?dl=0",
          }}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            marginRight: 16,
          }}
        />
        <View>
          <Text
            numberOfLines={1}
            style={{
              ...theme.FONTS.H4,
              color: theme.COLORS.mainDark,
              marginBottom: 2,
            }}
          >
            Cristina Wolf
          </Text>
          <Text
            numberOfLines={1}
            style={{
              ...theme.FONTS.Mulish_400Regular,
              color: theme.COLORS.bodyTextColor,
              fontSize: 16,
              lineHeight: 16 * 1.6,
            }}
          >
            +1 954 621 7845
          </Text>
        </View>
      </View>
    );
  };

  const renderProfileCategory = () => {
    return (
      <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
        <components.ProfileCategory
          title="Personal Info"
          icon={<svg.UserOneSvg />}
          rightElement={<svg.ArrowOneSvg />}
          onPress={() => navigation.navigate("EditPersonalInfo")}
        />
        <components.ProfileCategory
          title="Notifications"
          icon={<svg.MessageSvg />}
          toggleButton={true}
        />
        <components.ProfileCategory
          title="Face ID"
          icon={<svg.FaceIdSvg />}
          toggleButton={true}
        />
        <components.ProfileCategory
          title="Language"
          icon={<svg.LanguageSvg />}
          rightElement={
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  ...theme.FONTS.Mulish_400Regular,
                  fontSize: 12,
                  color: theme.COLORS.mainDark,
                  lineHeight: 12 * 1.6,
                  marginRight: 11,
                }}
              >
                Eng
              </Text>
              <svg.ArrowOneSvg />
            </View>
          }
        />
        <components.ProfileCategory icon={<svg.LogOutSvg />} />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {renderUserInfo()}
        {renderProfileCategory()}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default Profile;
