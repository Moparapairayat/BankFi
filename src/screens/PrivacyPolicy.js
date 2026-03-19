import {View, ScrollView, Image, Text} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";

import {theme} from "../constants";
import {components} from "../components";

const PrivacyPolicy = () => {
  const renderHeader = () => {
    return (
      <View style={{height: 179}}>
        <SafeAreaView>
          <components.Header
            goBack={true}
            containerStyle={{marginBottom: 20}}
          />
          <View style={{paddingHorizontal: 20}}>
            <Text
              style={{
                ...theme.FONTS.H2,
                color: theme.COLORS.mainDark,
              }}
            >
              Privacy policy
            </Text>
          </View>
        </SafeAreaView>
        <Image
          source={require("../assets/bg-01.png")}
          style={{
            height: 350,
            width: theme.SIZES.width,
            position: "absolute",
            zIndex: -1,
          }}
        />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            ...theme.FONTS.H4,
            color: theme.COLORS.mainDark,
            marginBottom: 14,
          }}
        >
          1. Terms
        </Text>
        <Text
          style={{
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 16,
            lineHeight: 16 * 1.6,
            color: theme.COLORS.bodyTextColor,
            marginBottom: 30,
          }}
        >
          By accessing this website, you are agreeing to be bound by these
          website Terms and Conditions of Use, applicable laws and regulations
          and their compliance. If you disagree with any of the stated terms and
          conditions, you are prohibited from using or accessing this site. The
          materials contained in this site are secured by relevant copyright and
          trademark law.
        </Text>
        <Text
          style={{
            ...theme.FONTS.H4,
            color: theme.COLORS.mainDark,
            marginBottom: 14,
          }}
        >
          2. Use Licence
        </Text>
        <Text
          style={{
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 16,
            lineHeight: 16 * 1.6,
            color: theme.COLORS.bodyTextColor,
            marginBottom: 20,
          }}
        >
          Permission is allowed to temporarily download one duplicate of the
          materials (data or programming) on Company's site for individual and
          non-business use only. This is just a permit of license and not an
          exchange of title, and under this permit, you may not:{"\n"}
          {"\n"}• modify or copy the materials;
          {"\n"}• use the materials for any commercial use, or for any public
          presentation (business or non-business);{"\n"}• attempt to dec
        </Text>
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
      {renderHeader()}
      {renderContent()}
    </View>
  );
};

export default PrivacyPolicy;
