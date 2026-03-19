import {View, ScrollView, Image, Text} from "react-native";
import React from "react";

import {theme} from "../constants";

const notifications = [
  {
    id: "1",
    title: "Your loan application has been approved!",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    date: "Aug 29, 2022 at 12:36 PM",
    status: "approved",
  },
  {
    id: "2",
    title: "The loan repayment period expires!",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    date: "Aug 29, 2022 at 12:36 PM",
    status: "alert",
  },
  {
    id: "3",
    title: "Your loan application was rejected!",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    date: "Aug 29, 2022 at 12:36 PM",
    status: "rejected",
  },
  {
    id: "4",
    title: "Your piggy bank is full!",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    date: "Aug 29, 2022 at 12:36 PM",
    status: "approved",
  },
  {
    id: "5",
    title: "Your piggy bank is full!",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    date: "Aug 29, 2022 at 12:36 PM",
    status: "approved",
  },
];

const Notifications = () => {
  const renderBackground = () => {
    return (
      <Image
        source={require("../assets/bg/04.png")}
        style={{
          width: "100%",
          height: 530,
          position: "absolute",
        }}
      />
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 70,
            }}
          >
            <Text
              style={{
                ...theme.FONTS.H2,
                color: theme.COLORS.mainDark,
                marginBottom: 20,
              }}
            >
              Notifications
            </Text>
          </View>
          {notifications.map((item, index) => {
            return (
              <View
                style={{
                  padding: 20,
                  marginBottom: 6,
                  backgroundColor: theme.COLORS.white,
                  borderRadius: 10,
                }}
                key={index}
              >
                <View
                  style={{
                    paddingBottom: 14,
                    borderBottomWidth: 1,
                    borderBottomColor: "#CED6E1",
                    marginBottom: 14,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "flex-start",
                      paddingBottom: 14,
                    }}
                  >
                    {item.status === "approved" && (
                      <Image
                        source={require("../assets/other-icons/05.png")}
                        style={{
                          width: 18,
                          height: 18,
                          marginRight: 8,
                          marginTop: 1,
                        }}
                      />
                    )}
                    {item.status === "alert" && (
                      <Image
                        source={require("../assets/other-icons/28.png")}
                        style={{
                          width: 18,
                          height: 18,
                          marginRight: 8,
                          marginTop: 1,
                        }}
                      />
                    )}
                    {item.status === "rejected" && (
                      <Image
                        source={require("../assets/other-icons/29.png")}
                        style={{
                          width: 18,
                          height: 18,
                          marginRight: 8,
                          marginTop: 1,
                        }}
                      />
                    )}
                    <Text
                      style={{
                        ...theme.FONTS.H5,
                        color: theme.COLORS.mainDark,
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                  <Text
                    style={{
                      ...theme.FONTS.Mulish_400Regular,
                      fontSize: 16,
                      color: theme.COLORS.bodyTextColor,
                      lineHeight: 16 * 1.6,
                    }}
                  >
                    {item?.description}
                  </Text>
                </View>
                <Text
                  style={{
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 12,
                    color: theme.COLORS.bodyTextColor,
                    lineHeight: 12 * 1.6,
                  }}
                >
                  {item.date}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
      {renderBackground()}
      {renderContent()}
    </View>
  );
};

export default Notifications;
