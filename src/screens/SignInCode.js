import {Text, ScrollView, View, TouchableOpacity, Image} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";

import {components} from "../components";
import {theme} from "../constants";

const SignInCode = () => {
  const Symbol = ({symbol, icon}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: theme.COLORS.white,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          height: 70,
          width: theme.SIZES.width * 0.21,
          marginBottom: 10,
        }}
      >
        {icon && icon}
        <Text
          style={{
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 24,
            color: theme.COLORS.mainDark,
          }}
        >
          {symbol}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderHeader = () => {
    return <components.Header goBack={true} />;
  };

  const renderBackground = () => {
    return (
      <View>
        <Image
          source={require("../assets/bg/04.png")}
          style={{width: "100%", height: 400, position: "absolute"}}
        />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 20}}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../assets/users/07.png")}
          style={{
            width: 70,
            height: 70,
            alignSelf: "center",
            marginBottom: 14,
            marginTop: theme.SIZES.height * 0.04,
          }}
        />
        <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.H4,
            color: theme.COLORS.mainDark,
            marginBottom: 2,
          }}
        >
          Cristina Wolf
        </Text>
        <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 16,
            lineHeight: 16 * 1.6,
            color: theme.COLORS.bodyTextColor,
            marginBottom: 20,
          }}
        >
          Labore sunt
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            marginBottom: 40,
          }}
        >
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: theme.COLORS.mainDark,
              borderRadius: 4,
              marginHorizontal: 6,
            }}
          />
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: theme.COLORS.mainDark,
              borderRadius: 4,
              marginHorizontal: 6,
            }}
          />
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: "#BDC5D2",
              borderRadius: 4,
              marginHorizontal: 6,
            }}
          />
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: "#BDC5D2",
              borderRadius: 4,
              marginHorizontal: 6,
            }}
          />
        </View>
        <View
          style={{
            width: theme.SIZES.width * 0.7,
            alignSelf: "center",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginBottom: 20,
          }}
        >
          <Symbol symbol="1" />
          <Symbol symbol="2" />
          <Symbol symbol="3" />
          <Symbol symbol="4" />
          <Symbol symbol="5" />
          <Symbol symbol="6" />
          <Symbol symbol="7" />
          <Symbol symbol="8" />
          <Symbol symbol="9" />
          <TouchableOpacity
            style={{
              backgroundColor: theme.COLORS.white,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              height: 70,
              width: theme.SIZES.width * 0.21,
              marginBottom: 10,
            }}
          >
            <Image
              source={require("../assets/other-icons/06.png")}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </TouchableOpacity>
          <Symbol symbol="0" />
          <TouchableOpacity
            style={{
              backgroundColor: theme.COLORS.white,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              height: 70,
              width: theme.SIZES.width * 0.21,
              marginBottom: 10,
            }}
          >
            <Image
              source={require("../assets/other-icons/07.png")}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              ...theme.FONTS.Mulish_500Medium,
              fontSize: 16,
              lineHeight: 16 * 1.6,
              color: theme.COLORS.linkColor,
              marginBottom: 10,
            }}
          >
            Lost your password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              ...theme.FONTS.Mulish_500Medium,
              fontSize: 16,
              lineHeight: 16 * 1.6,
              color: theme.COLORS.linkColor,
              marginBottom: 20,
            }}
          >
            Switch user
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
      {renderBackground()}
      <SafeAreaView style={{flex: 1}}>
        {renderHeader()}
        {renderContent()}
      </SafeAreaView>
    </View>
  );
};

export default SignInCode;
