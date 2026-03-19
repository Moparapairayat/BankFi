import {Text, ScrollView, View, TouchableOpacity, Image} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";

import {components} from "../components";
import {theme} from "../constants";
import {svg} from "../svg";

const TransactionDetails = () => {
  const DetailItem = ({leftTitle, rightTitle}) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 17,
          borderBottomWidth: 1,
          borderBottomColor: "#CED6E1",
        }}
      >
        <Text
          style={{
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 16,
            lineHeight: 16 * 1.6,
            color: theme.COLORS.bodyTextColor,
          }}
        >
          {leftTitle}
        </Text>
        <Text
          style={{
            ...theme.FONTS.H6,
            color: theme.COLORS.mainDark,
          }}
        >
          {rightTitle}
        </Text>
      </View>
    );
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

  const renderHeader = () => {
    return <components.Header goBack={true} />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../assets/icons/26.png")}
          style={{
            width: 60,
            height: 60,
            alignSelf: "center",
            marginBottom: 30,
          }}
        />
        <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 12,
            color: theme.COLORS.bodyTextColor,
            marginBottom: 10,
          }}
        >
          Sep 10, 2022 at 11:34 AM
        </Text>
        <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.Mulish_700Bold,
            fontSize: 28,
            lineHeight: 28 * 1.1,
            color: theme.COLORS.mainDark,
            marginBottom: 10,
          }}
        >
          - $ 263.57
        </Text>
        <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 16,
            color: theme.COLORS.bodyTextColor,
            marginBottom: 9,
          }}
        >
          sent to Hillary Holmes
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 30,
            borderBottomWidth: 1,
            borderBottomColor: "#CED6E1",
          }}
        >
          <Image
            source={require("../assets/other-icons/05.png")}
            style={{width: 16, height: 16, marginRight: 6}}
          />
          <Text
            style={{
              ...theme.FONTS.Mulish_600SemiBold,
              fontSize: 14,
              lineHeight: 14 * 1.3,
              color: theme.COLORS.green,
            }}
          >
            Success
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            marginBottom: theme.SIZES.height * 0.1,
          }}
        >
          <DetailItem leftTitle="Sent to" rightTitle="Hillary Holmes" />
          <DetailItem leftTitle="Card" rightTitle="**** 4253" />
          <DetailItem leftTitle="Amount" rightTitle="263.57 USD" />
          <DetailItem leftTitle="Fee" rightTitle="1.8 USD" />
          <DetailItem leftTitle="Residual balance" rightTitle="4 863.27 USD" />
        </View>
        <components.Button
          title="Download PDF"
          containerStyle={{paddingHorizontal: 20, marginBottom: 20}}
        />
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

export default TransactionDetails;
