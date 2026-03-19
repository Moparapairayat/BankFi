import {
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
  TextInput,
} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";

import {svg} from "../svg";
import {theme} from "../constants";
import {components} from "../components";

const depositPeriods = [
  {
    id: "1",
    title: "3 month",
  },
  {
    id: "2",
    title: "6 month",
  },
  {
    id: "3",
    title: "12 month",
  },
  {
    id: "4",
    title: "18 month",
  },
  {
    id: "5",
    title: "24 month",
  },
  {
    id: "6",
    title: "36 month",
  },
];

const Loans = () => {
  const navigation = useNavigation();

  const [newLoan, setNewLoan] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [depositPeriod, setDepositPeriod] = useState("3 month");
  const [toggle, setToggle] = useState(true);

  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: 47,
        }}
      >
        <View
          style={{
            position: "absolute",
            left: 0,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              paddingVertical: 12,
            }}
            onPress={() => setNewLoan(false)}
          >
            <svg.GoBackSvg />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.H4,
            color: theme.COLORS.mainDark,
          }}
        >
          Open new loan
        </Text>
      </View>
    );
  };

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

  const renderLoans = () => {
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
              Loans
            </Text>
            <TouchableOpacity>
              <svg.InfoSvg />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              ...theme.FONTS.Mulish_400Regular,
              fontSize: 16,
              color: theme.COLORS.bodyTextColor,
              lineHeight: 12 * 1.6,
              marginBottom: 12,
            }}
          >
            Current loans
          </Text>
          <View
            style={{
              padding: 20,
              paddingTop: 18,
              marginBottom: theme.SIZES.height * 0.2,
              backgroundColor: theme.COLORS.white,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 14,
                paddingBottom: 20,
                borderBottomWidth: 1,
                borderBottomColor: "#CED6E1",
              }}
            >
              <svg.LoanWalletSvg />
              <Text
                style={{
                  marginLeft: 8,
                  ...theme.FONTS.Mulish_400Regular,
                  fontSize: 20,
                  color: theme.COLORS.mainDark,
                }}
              >
                - 20 532.00 USD
              </Text>
              <TouchableOpacity
                style={{
                  marginLeft: "auto",
                  backgroundColor: "#3EB290",
                  width: 100,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    ...theme.FONTS.Mulish_600SemiBold,
                    fontSize: 12,
                    color: theme.COLORS.white,
                  }}
                >
                  Repay
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <View style={{flex: 1}}>
                <Text
                  style={{
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 12,
                    lineHeight: 12 * 1.6,
                    color: theme.COLORS.bodyTextColor,
                  }}
                >
                  Rate
                </Text>
                <Text
                  style={{
                    marginBottom: 16,
                    ...theme.FONTS.H6,
                    color: theme.COLORS.mainDark,
                  }}
                >
                  13 %
                </Text>
                <Text
                  style={{
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 12,
                    lineHeight: 12 * 1.6,
                    color: theme.COLORS.bodyTextColor,
                  }}
                >
                  Monthly payment
                </Text>
                <Text
                  style={{
                    marginBottom: 16,
                    ...theme.FONTS.H6,
                    color: theme.COLORS.mainDark,
                  }}
                >
                  1 117.00 USD
                </Text>
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 12,
                    lineHeight: 12 * 1.6,
                    color: theme.COLORS.bodyTextColor,
                  }}
                >
                  Period
                </Text>
                <Text
                  style={{
                    marginBottom: 16,
                    ...theme.FONTS.H6,
                    color: theme.COLORS.mainDark,
                  }}
                >
                  24 months
                </Text>
                <Text
                  style={{
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 12,
                    lineHeight: 12 * 1.6,
                    color: theme.COLORS.bodyTextColor,
                  }}
                >
                  Total paid
                </Text>
                <Text
                  style={{
                    marginBottom: 16,
                    ...theme.FONTS.H6,
                    color: theme.COLORS.mainDark,
                  }}
                >
                  4 468.00 USD
                </Text>
              </View>
            </View>
          </View>
          <components.Button
            title="+ new Loan"
            onPress={() => setNewLoan(true)}
          />
        </View>
      </ScrollView>
    );
  };

  const renderNewLoan = () => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingHorizontal: 20}}
        showsVerticalScrollIndicator={false}
      >
        <components.SmallHeader
          title="Choose currency:"
          containerStyle={{marginBottom: 6, marginTop: 20}}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 14,
          }}
        >
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              paddingVertical: 8,
              backgroundColor:
                currency === "USD" ? theme.COLORS.mainDark : theme.COLORS.white,
              borderRadius: 10,
              marginRight: 14,
            }}
            onPress={() => setCurrency("USD")}
          >
            <Text
              style={{
                ...theme.FONTS.H5,
                color:
                  currency === "USD"
                    ? theme.COLORS.white
                    : theme.COLORS.mainDark,
              }}
            >
              USD
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              paddingVertical: 8,
              backgroundColor:
                currency === "EUR" ? theme.COLORS.mainDark : theme.COLORS.white,
              borderRadius: 10,
            }}
            onPress={() => setCurrency("EUR")}
          >
            <Text
              style={{
                ...theme.FONTS.H5,
                color:
                  currency === "EUR"
                    ? theme.COLORS.white
                    : theme.COLORS.mainDark,
              }}
            >
              EUR
            </Text>
          </TouchableOpacity>
        </View>
        <components.SmallHeader
          title="Choose deposit period:"
          containerStyle={{marginBottom: 6}}
        />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: 4,
          }}
        >
          {depositPeriods.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor:
                    depositPeriod === item.title
                      ? theme.COLORS.mainDark
                      : theme.COLORS.white,
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  borderRadius: 10,
                  marginBottom: 10,
                  marginRight: 10,
                }}
                onPress={() => setDepositPeriod(item.title)}
              >
                <Text
                  style={{
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 16,
                    lineHeight: 16 * 1.6,
                    color:
                      depositPeriod === item.title
                        ? theme.COLORS.white
                        : theme.COLORS.bodyTextColor,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <components.SmallHeader
          title="Amount:"
          containerStyle={{marginBottom: 6}}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 14,
          }}
        >
          <View
            style={{
              backgroundColor: theme.COLORS.white,
              borderRadius: 10,
              paddingHorizontal: 20,
              paddingVertical: 14,
              marginRight: 14,
              width: theme.SIZES.width / 2 - 20,
            }}
          >
            <TextInput
              placeholder="$25 000"
              style={{
                ...theme.FONTS.Mulish_500Medium,
                fontSize: 28,
                color: theme.COLORS.mainDark,
                textAlign: "left",
              }}
              numberOfLines={1}
              textAlign="left"
            />
          </View>
          <Text
            style={{
              ...theme.FONTS.Mulish_400Regular,
              fontSize: 12,
              color: theme.COLORS.bodyTextColor,
            }}
          >
            You rate is 13%.
          </Text>
        </View>
        <components.SmallHeader
          title="Calculated monthly repayment:"
          containerStyle={{marginBottom: 6}}
        />
        <View
          style={{
            backgroundColor: theme.COLORS.white,
            width: theme.SIZES.width / 2 - 20,
            paddingHorizontal: 20,
            paddingVertical: 14,
            borderRadius: 10,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              ...theme.FONTS.Mulish_500Medium,
              fontSize: 28,
              color: theme.COLORS.mainDark,
            }}
          >
            $1 117.00
          </Text>
        </View>
        <View
          style={{
            marginBottom: theme.SIZES.height * 0.08,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "#CED6E1",
            paddingBottom: 20,
          }}
        >
          <Text
            style={{
              ...theme.FONTS.H5,
              color: theme.COLORS.mainDark,
            }}
          >
            Early loan repayment
          </Text>
          <TouchableOpacity
            style={{
              width: 40,
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
        </View>
        <components.Button
          title="open new loan"
          onPress={() => setNewLoan(false)}
          containerStyle={{marginBottom: 20}}
        />
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
      {newLoan ? (
        <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
          {renderHeader()}
          {renderNewLoan()}
        </SafeAreaView>
      ) : (
        <View style={{flex: 1}}>
          {renderBackground()}
          {renderLoans()}
        </View>
      )}
    </View>
  );
};

export default Loans;
