import {
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  StatusBar,
  TextInput,
} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";

import {theme} from "../constants";
import {components} from "../components";

const CardDetails = ({navigation}) => {
  const [toggle, setToggle] = useState(false);

  const renderStatusBar = () => {
    return <StatusBar barStyle="light-content" />;
  };

  const renderHeader = () => {
    return (
      <ImageBackground
        source={{
          uri: "https://dl.dropbox.com/s/5vf5wsw0nlor4pf/01.png?dl=0",
        }}
        style={{
          width: "100%",
        }}
        imageStyle={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <SafeAreaView>
          <View style={{marginBottom: 30}}>
            <components.Header
              goBack={true}
              fileIcon={true}
              goBackColor={theme.COLORS.white}
            />
            <View style={{paddingHorizontal: 20}}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 14,
                }}
              >
                <Image
                  source={require("../assets/other-icons/19.png")}
                  style={{width: 40.43, height: 12}}
                />
                <View
                  style={{
                    width: 1,
                    height: 21,
                    backgroundColor: "#B0C4DF",
                    marginHorizontal: 12,
                  }}
                />
                <Text
                  style={{
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 14,
                    color: theme.COLORS.white,
                  }}
                >
                  teofin platinum
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 27,
                }}
              >
                <Text
                  style={{
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 12,
                    color: theme.COLORS.white,
                  }}
                >
                  4358 **** **** 4253
                </Text>
                <ImageBackground
                  source={require("../assets/other-icons/20.png")}
                  style={{
                    width: 49,
                    height: 29,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TextInput
                    placeholder="CVV"
                    textAlign="center"
                    placeholderTextColor={theme.COLORS.white}
                    style={{color: theme.COLORS.white}}
                    maxLength={3}
                  />
                </ImageBackground>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <Text
                  style={{
                    ...theme.FONTS.Mulish_600SemiBold,
                    fontSize: 8,
                    textTransform: "uppercase",
                    color: "#959BBF",
                  }}
                >
                  balance
                </Text>
                <Text
                  style={{
                    ...theme.FONTS.Mulish_600SemiBold,
                    fontSize: 8,
                    textTransform: "uppercase",
                    color: "#959BBF",
                  }}
                >
                  expire
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    ...theme.FONTS.Mulish_700Bold,
                    fontSize: 24,
                    color: theme.COLORS.white,
                  }}
                >
                  $ 4 863.27
                </Text>
                <Text
                  style={{
                    ...theme.FONTS.Mulish_500Medium,
                    fontSize: 12,
                    color: theme.COLORS.white,
                  }}
                >
                  12/24
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  };

  const renderBottomInfo = () => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            paddingVertical: 19,
            borderBottomColor: "#CED6E1",
            marginTop: 10,
          }}
        >
          <Image
            source={require("../assets/other-icons/10.png")}
            style={{width: 24, height: 15, marginRight: 10}}
          />
          <Text
            style={{
              ...theme.FONTS.H5,
              color: theme.COLORS.mainDark,
            }}
          >
            Add to Apple Pay
          </Text>
          <Image
            source={require("../assets/other-icons/11.png")}
            style={{width: 10, height: 10, marginLeft: "auto"}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            paddingVertical: 19,
            borderBottomColor: "#CED6E1",
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          <Image
            source={require("../assets/other-icons/12.png")}
            style={{width: 16, height: 16, marginRight: 10}}
          />
          <Text
            style={{
              ...theme.FONTS.H5,
              color: theme.COLORS.mainDark,
            }}
          >
            Default card
          </Text>
          <TouchableOpacity
            style={{
              width: 40,
              marginLeft: "auto",
              backgroundColor: toggle ? theme.COLORS.green : theme.COLORS.grey1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: toggle ? "flex-end" : "flex-start",
              padding: 2,
              borderRadius: 20,
            }}
            onPress={() => setToggle(!toggle)}
            activeOpacity={0.8}
          >
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 12,
                backgroundColor: theme.COLORS.white,
              }}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <components.SmallHeader
          title="Limits"
          containerStyle={{marginBottom: 6}}
        />
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 8,
            borderBottomWidth: 1,
            paddingBottom: 10,
            borderBottomColor: "#CED6E1",
            marginBottom: 20,
          }}
          onPress={() => navigation.navigate("Payments")}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              <Image
                source={require("../assets/other-icons/13.png")}
                style={{
                  width: 16,
                  height: 16,
                  marginRight: 10,
                }}
              />
              <Text
                style={{
                  ...theme.FONTS.H5,
                  color: theme.COLORS.mainDark,
                }}
              >
                Online payments
              </Text>
            </View>
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 12,
                color: theme.COLORS.bodyTextColor,
              }}
            >
              Default limit: 100 USD per day
            </Text>
          </View>
          <View>
            <Image
              source={require("../assets/other-icons/14.png")}
              style={{
                width: 6,
                height: 10.3,
              }}
            />
          </View>
        </TouchableOpacity>
        <components.SmallHeader
          title="Security"
          containerStyle={{marginBottom: 6}}
        />
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            paddingVertical: 19,
            borderBottomColor: "#CED6E1",
            marginTop: 10,
          }}
          onPress={() => navigation.navigate("ChangePinCode")}
        >
          <Image
            source={require("../assets/other-icons/15.png")}
            style={{width: 16, height: 16, marginRight: 10}}
          />
          <Text
            style={{
              ...theme.FONTS.H5,
              color: theme.COLORS.mainDark,
            }}
          >
            Change PIN code
          </Text>
          <Image
            source={require("../assets/other-icons/14.png")}
            style={{
              width: 6,
              height: 10.3,
              marginLeft: "auto",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            paddingVertical: 19,
            borderBottomColor: "#CED6E1",
            marginTop: 10,
          }}
        >
          <Image
            source={require("../assets/other-icons/16.png")}
            style={{width: 16, height: 16, marginRight: 10}}
          />
          <Text
            style={{
              ...theme.FONTS.H5,
              color: theme.COLORS.mainDark,
            }}
          >
            Reissue the card
          </Text>
          <Image
            source={require("../assets/other-icons/14.png")}
            style={{
              width: 6,
              height: 10.3,
              marginLeft: "auto",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            paddingVertical: 19,
            borderBottomColor: "#CED6E1",
            marginTop: 10,
          }}
        >
          <Image
            source={require("../assets/other-icons/18.png")}
            style={{width: 16, height: 16, marginRight: 10}}
          />
          <Text
            style={{
              ...theme.FONTS.H5,
              color: theme.COLORS.linkColor,
            }}
          >
            Block the card
          </Text>
          <Image
            source={require("../assets/other-icons/14.png")}
            style={{
              width: 6,
              height: 10.3,
              marginLeft: "auto",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            paddingVertical: 19,
            borderBottomColor: "#CED6E1",
            marginTop: 10,
          }}
        >
          <Image
            source={require("../assets/other-icons/17.png")}
            style={{width: 16, height: 16, marginRight: 10}}
          />
          <Text
            style={{
              ...theme.FONTS.H5,
              color: theme.COLORS.linkColor,
            }}
          >
            Сlose the card
          </Text>
          <Image
            source={require("../assets/other-icons/14.png")}
            style={{
              width: 6,
              height: 10.3,
              marginLeft: "auto",
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}} scrollEnabled={false}>
        {renderStatusBar()}
        {renderHeader()}
        {renderBottomInfo()}
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
      {renderContent()}
    </View>
  );
};

export default CardDetails;
