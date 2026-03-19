import {View, Text, TouchableOpacity} from "react-native";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setScreen} from "../store/tabSlice";

import {theme, screenNames} from "../constants";
import {svg} from "../svg";
import {screens} from "../screens";

const TabNavigator = () => {
  const dispatch = useDispatch();

  const currentScreen = useSelector(state => state.tab.screen);

  const tabScreens = [
    screenNames.Dashboard,
    screenNames.Deposits,
    screenNames.Loans,
    screenNames.Notifications,
    screenNames.More,
  ];

  return (
    <View style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
      {currentScreen === screenNames.Dashboard && <screens.Dashboard />}
      {currentScreen === screenNames.Deposits && <screens.Deposits />}
      {currentScreen === screenNames.Loans && <screens.Loans />}
      {currentScreen === screenNames.Notifications && <screens.Notifications />}
      {currentScreen === screenNames.More && <screens.More />}

      <View
        style={{
          width: "100%",
          borderRadius: 10,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            alignItems: "center",
            paddingBottom: 28,
            paddingTop: 15,
            backgroundColor: theme.COLORS.white,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          {tabScreens.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => dispatch(setScreen(item))}
                style={{alignItems: "center"}}
              >
                {item === screenNames.Dashboard && (
                  <svg.ReportSvg currentScreen={currentScreen} />
                )}
                {item === screenNames.Deposits && (
                  <svg.SafeDepositSvg currentScreen={currentScreen} />
                )}
                {item === screenNames.Loans && (
                  <svg.WalletSvg currentScreen={currentScreen} />
                )}
                {item === screenNames.Notifications && (
                  <svg.NotificationSvg currentScreen={currentScreen} />
                )}
                {item === screenNames.More && (
                  <svg.MoreSvg currentScreen={currentScreen} />
                )}
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: 7,
                    color:
                      currentScreen === item
                        ? theme.COLORS.linkColor
                        : theme.COLORS.mainDark,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default TabNavigator;
