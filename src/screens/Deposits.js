import {
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  FlatList,
  TextInput,
} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import {useNavigation} from "@react-navigation/native";

import {svg} from "../svg";
import {theme} from "../constants";
import {components} from "../components";

const cards = [
  {
    id: "1",
    title: "Visa",
    number: "**** **** **** 7895",
    amount: "4 863.27",
    icon: require("../assets/cards/06.png"),
  },
  {
    id: "2",
    title: "Visa",
    number: "**** **** **** 3964",
    amount: "4 863.27",
    icon: require("../assets/cards/06.png"),
  },
  {
    id: "3",
    title: "Visa",
    number: "**** **** **** 1045",
    amount: "4 863.27",
    icon: require("../assets/cards/06.png"),
  },
];

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

const Deposits = () => {
  const [deposits, setDeposits] = useState(true);
  const [openDeposit, setOpenDeposit] = useState(false);
  const [openMoneyBox, setOpenMoneyBox] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [currency, setCurrency] = useState("USD");
  const [depositPeriod, setDepositPeriod] = useState("3 month");
  const [moneyBoxPerDay, setMoneyBoxPerDay] = useState(true);
  const [dollarPerTransaction, setDollarPerTransaction] = useState(false);
  const [tenDollarPerTransaction, setTenDollarPerTransaction] = useState(false);

  const navigation = useNavigation();

  const renderDeposit = () => {
    return (
      <View style={{flex: 1}}>
        <Image
          source={require("../assets/bg/04.png")}
          style={{
            width: "100%",
            height: 530,
            position: "absolute",
          }}
        />
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
        >
          <View style={{paddingHorizontal: 20}}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 70,
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  ...theme.FONTS.H2,
                  color: theme.COLORS.mainDark,
                }}
              >
                Deposits
              </Text>
              <TouchableOpacity>
                <Image
                  source={require("../assets/other-icons/27.png")}
                  style={{width: 16, height: 16}}
                />
              </TouchableOpacity>
            </View>
            <components.SmallHeader
              title="Current deposits"
              containerStyle={{marginBottom: 6}}
            />
            <View
              style={{
                backgroundColor: theme.COLORS.white,
                borderRadius: 10,

                paddingHorizontal: 20,
                paddingTop: 14,
                paddingBottom: 20,
                marginBottom: 6,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 13,
                }}
              >
                <Image
                  source={require("../assets/other-icons/23.png")}
                  style={{
                    width: 22,
                    height: 22,
                    marginRight: 10,
                  }}
                />
                <View style={{flex: 1}}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        lineHeight: 20 * 1.2,
                        color: theme.COLORS.mainDark,
                      }}
                    >
                      3000.00 USD
                    </Text>
                    <Text
                      style={{
                        ...theme.FONTS.H5,
                        color: theme.COLORS.mainDark,
                      }}
                    >
                      8%
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        ...theme.FONTS.Mulish_400Regular,
                        fontSize: 12,
                        color: theme.COLORS.bodyTextColor,
                      }}
                    >
                      Sep 1 - Mar 1, 2022
                    </Text>
                    <Text
                      style={{
                        ...theme.FONTS.Mulish_600SemiBold,
                        fontSize: 12,
                        color: theme.COLORS.green,
                      }}
                    >
                      + 60.57
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#55ACEE",
                    width: theme.SIZES.width / 2.05 - 40,
                    height: 40,
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{color: theme.COLORS.white}}>Top - Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#3EB290",
                    width: theme.SIZES.width / 2.05 - 40,
                    height: 40,
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{color: theme.COLORS.white}}>Withdrawal</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                backgroundColor: theme.COLORS.white,
                borderRadius: 10,

                paddingHorizontal: 20,
                paddingTop: 14,
                paddingBottom: 20,
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 13,
                }}
              >
                <Image
                  source={require("../assets/other-icons/21.png")}
                  style={{
                    width: 22,
                    height: 22,
                    marginRight: 10,
                  }}
                />
                <View style={{flex: 1}}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        lineHeight: 20 * 1.2,
                        color: theme.COLORS.mainDark,
                      }}
                    >
                      1500.00 USD
                    </Text>
                    <Text
                      style={{
                        ...theme.FONTS.H5,
                        color: theme.COLORS.mainDark,
                      }}
                    >
                      10%
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        ...theme.FONTS.Mulish_400Regular,
                        fontSize: 12,
                        color: theme.COLORS.bodyTextColor,
                      }}
                    >
                      Sep 1, 2021 - Sep 1, 2022
                    </Text>
                    <Text
                      style={{
                        ...theme.FONTS.Mulish_600SemiBold,
                        fontSize: 12,
                        color: theme.COLORS.green,
                      }}
                    >
                      + 150.00
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#FF8A71",
                    width: theme.SIZES.width / 2.05 - 40,
                    height: 40,
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{color: theme.COLORS.white}}>Extend</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#3EB290",
                    width: theme.SIZES.width / 2.05 - 40,
                    height: 40,
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{color: theme.COLORS.white}}>Withdrawal</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 12,
                color: theme.COLORS.bodyTextColor,
                lineHeight: 12 * 1.6,
                marginBottom: 6,
              }}
            >
              Current moneyboxes
            </Text>
            <View
              style={{
                padding: 20,
                paddingTop: 18,
                marginBottom: 46,
                backgroundColor: theme.COLORS.white,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 7,
                }}
              >
                <svg.PiggyBankSvg />
                <Text
                  style={{
                    marginLeft: 8,
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 12,
                    color: theme.COLORS.bodyTextColor,
                  }}
                >
                  New iPhone Pro Max
                </Text>
                <View style={{marginLeft: "auto"}}>
                  <Text
                    style={{
                      ...theme.FONTS.Mulish_400Regular,
                      fontSize: 20,
                    }}
                  >
                    1200.00 USD
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 5,
                  borderRadius: 5 / 2,
                  backgroundColor: "#DBDBDF",
                  marginBottom: 4,
                }}
              >
                <View
                  style={{
                    width: "60%",
                    backgroundColor: "#3EB290",
                    height: "100%",
                    borderRadius: 5 / 2,
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  ...theme.FONTS.Mulish_400Regular,
                  fontSize: 12,
                  marginBottom: 12,
                  color: theme.COLORS.bodyTextColor,
                  lineHeight: 12 * 1.6,
                }}
              >
                650.27 USD
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#55ACEE",
                    width: theme.SIZES.width / 2.6,
                    height: 30,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      ...theme.FONTS.Mulish_600SemiBold,
                      fontSize: 12,
                      lineHeight: 12 * 1.6,
                      color: theme.COLORS.white,
                    }}
                  >
                    Top - Up
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#3EB290",
                    width: theme.SIZES.width / 2.6,
                    height: 30,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      ...theme.FONTS.Mulish_600SemiBold,
                      fontSize: 12,
                      lineHeight: 12 * 1.6,
                      color: theme.COLORS.white,
                    }}
                  >
                    Withdrawal
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={{
                  width: theme.SIZES.width / 2.3,
                  height: 50,
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  borderColor: "#CED6E1",
                }}
                onPress={() => {
                  setOpenMoneyBox(true);
                  setDeposits(false);
                  setOpenDeposit(false);
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    ...theme.FONTS.Mulish_600SemiBold,
                    fontSize: 16,
                    color: theme.COLORS.mainDark,
                  }}
                >
                  + moneybox
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setOpenDeposit(true);
                  setDeposits(false);
                  setOpenMoneyBox(false);
                }}
              >
                <LinearGradient
                  colors={["#96D9FE", "#1D5DA2"]}
                  style={{
                    width: theme.SIZES.width / 2.3,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                >
                  <Text
                    style={{
                      color: theme.COLORS.white,
                      ...theme.FONTS.Mulish_600SemiBold,
                      fontSize: 16,
                    }}
                  >
                    + Deposit
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  };

  const renderOpenDeposit = () => {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
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
              onPress={() => {
                setOpenDeposit(false);
                setDeposits(true);
                setOpenMoneyBox(false);
              }}
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
            Open deposit
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 20,
          }}
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
                  currency === "USD"
                    ? theme.COLORS.mainDark
                    : theme.COLORS.white,
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
                  currency === "EUR"
                    ? theme.COLORS.mainDark
                    : theme.COLORS.white,
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
                placeholder="$1 000"
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
              You rate is 8%.
            </Text>
          </View>
          <components.SmallHeader
            title="Use card:"
            containerStyle={{marginBottom: 6}}
          />
          <View style={{marginBottom: 30}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {cards.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={{
                      backgroundColor: theme.COLORS.white,
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 12,
                      marginRight: 14,
                    }}
                  >
                    <Image
                      source={item.icon}
                      style={{
                        width: 72,
                        height: 46,
                        marginRight: 14,
                      }}
                    />
                    <View>
                      <Text
                        style={{
                          ...theme.FONTS.Mulish_400Regular,
                          fontSize: 12,
                          color: theme.COLORS.bodyTextColor,
                        }}
                      >
                        {item.number}
                      </Text>
                      <Text
                        style={{
                          ...theme.FONTS.H6,
                          color: theme.COLORS.mainDark,
                        }}
                      >
                        {item.amount}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
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
                backgroundColor: toggle
                  ? theme.COLORS.green
                  : theme.COLORS.grey1,
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
            title="Open deposit"
            containerStyle={{marginBottom: 20}}
            onPress={() => {
              setDeposits(true);
              setOpenMoneyBox(false);
              setOpenDeposit(false);
            }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  };

  const renderOpenMoneybox = () => {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
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
              onPress={() => {
                setOpenDeposit(false);
                setDeposits(true);
                setOpenMoneyBox(false);
              }}
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
            Open moneybox
          </Text>
        </View>
        <View>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}
          >
            <components.SmallHeader
              title="The amount you want to achieve:"
              containerStyle={{
                marginTop: 20,
                paddingHorizontal: 20,
                marginBottom: 6,
              }}
            />
            <View
              style={{
                backgroundColor: theme.COLORS.white,
                borderRadius: 10,
                paddingHorizontal: 20,
                paddingVertical: 14,
                marginRight: 14,
                width: theme.SIZES.width / 2 - 20,
                marginHorizontal: 20,
                marginBottom: 14,
              }}
            >
              <TextInput
                placeholder="$1200"
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
            <components.SmallHeader
              title="Use card:"
              containerStyle={{
                paddingHorizontal: 20,
                marginBottom: 6,
              }}
            />
            <View style={{marginBottom: 30}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingLeft: 20}}
              >
                {cards.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={{
                        backgroundColor: theme.COLORS.white,
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 12,
                        marginRight: 14,
                      }}
                    >
                      <Image
                        source={item.icon}
                        style={{
                          width: 72,
                          height: 46,
                          marginRight: 14,
                        }}
                      />
                      <View>
                        <Text
                          style={{
                            ...theme.FONTS.Mulish_400Regular,
                            fontSize: 12,
                            color: theme.COLORS.bodyTextColor,
                          }}
                        >
                          {item.number}
                        </Text>
                        <Text
                          style={{
                            ...theme.FONTS.H6,
                            color: theme.COLORS.mainDark,
                          }}
                        >
                          {item.amount}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </ScrollView>
        </View>
        <View style={{paddingHorizontal: 20, marginBottom: 20}}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
            onPress={() => {
              setMoneyBoxPerDay(true);
              setDollarPerTransaction(false);
              setTenDollarPerTransaction(false);
            }}
          >
            <View
              style={{
                width: 18,
                height: 18,
                borderWidth: 2,
                borderRadius: 18 / 2,
                borderColor: "#CED6E1",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 14,
              }}
            >
              {moneyBoxPerDay && (
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 10 / 2,
                    backgroundColor: theme.COLORS.green,
                  }}
                />
              )}
            </View>
            <View
              style={{
                paddingHorizontal: 17,
                paddingVertical: 14,
                backgroundColor: theme.COLORS.white,
                borderRadius: 10,
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  ...theme.FONTS.Mulish_400Regular,
                  fontSize: 14,
                  lineHeight: 14 * 1.6,
                  color: theme.COLORS.mainDark,
                }}
              >
                10.00
              </Text>
            </View>
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 16,
                lineHeight: 16 * 1.6,
                color: theme.COLORS.bodyTextColor,
              }}
            >
              USD per day;
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 2,
            }}
            onPress={() => {
              setMoneyBoxPerDay(false);
              setDollarPerTransaction(true);
              setTenDollarPerTransaction(false);
            }}
          >
            <View
              style={{
                width: 18,
                height: 18,
                borderWidth: 2,
                borderRadius: 18 / 2,
                borderColor: "#CED6E1",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 14,
              }}
            >
              {dollarPerTransaction && (
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 10 / 2,
                    backgroundColor: theme.COLORS.green,
                  }}
                />
              )}
            </View>
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 16,
                lineHeight: 16 * 1.6,
                color: theme.COLORS.bodyTextColor,
              }}
            >
              Rounding up to $1 per transaction;
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => {
              setMoneyBoxPerDay(false);
              setDollarPerTransaction(false);
              setTenDollarPerTransaction(true);
            }}
          >
            <View
              style={{
                width: 18,
                height: 18,
                borderWidth: 2,
                borderRadius: 18 / 2,
                borderColor: "#CED6E1",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 14,
              }}
            >
              {tenDollarPerTransaction && (
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 10 / 2,
                    backgroundColor: theme.COLORS.green,
                  }}
                />
              )}
            </View>
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 16,
                lineHeight: 16 * 1.6,
                color: theme.COLORS.bodyTextColor,
              }}
            >
              Rounding up to $10 per transaction.
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            marginBottom: theme.SIZES.height * 0.1,
          }}
        >
          <components.InputField placeholder="Enter your goal" />
        </View>
        <components.Button
          title="Open Moneybox"
          containerStyle={{paddingHorizontal: 20}}
          onPress={() => {
            setOpenDeposit(false);
            setDeposits(true);
            setOpenMoneyBox(false);
          }}
        />
      </SafeAreaView>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
      {deposits && renderDeposit()}
      {openDeposit && renderOpenDeposit()}
      {openMoneyBox && renderOpenMoneybox()}
    </View>
  );
};

export default Deposits;
