import {View, ScrollView, Image, Text} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";

import {theme} from "../constants";
import {components} from "../components";

const exchange = [
  {
    id: 1,
    currency: "GBP",
    currencyDescription: "British Pound",
    rate: 0.866,
    rateInUSD: 1.155,
    icon: "https://dl.dropbox.com/s/qc8eghdpgcjtxue/02.jpg?dl=0",
  },
  {
    id: 2,
    currency: "CHF",
    currencyDescription: "Swiss Franc",
    rate: 0.963,
    rateInUSD: 1.039,
    icon: "https://dl.dropbox.com/s/0w0qhfucydd20e2/03.jpg?dl=0",
  },
  {
    id: 3,
    currency: "CHF",
    currencyDescription: "Swiss Franc",
    rate: 1,
    rateInUSD: 0.999,
    icon: "https://dl.dropbox.com/s/sw5ri8815m18pyh/04.jpg?dl=0",
  },
  {
    id: 4,
    currency: "CHF",
    currencyDescription: "Swiss Franc",
    rate: 1.32,
    rateInUSD: 0.759,
    icon: "https://dl.dropbox.com/s/0zbnooi0nzg4xly/05.jpg?dl=0",
  },
  {
    id: 5,
    currency: "CHF",
    currencyDescription: "Swiss Franc",
    rate: 1.48,
    rateInUSD: 0.674,
    icon: "https://dl.dropbox.com/s/z4sxeqdbfl6ntw4/06.jpg?dl=0",
  },
  {
    id: 6,
    currency: "CHF",
    currencyDescription: "Swiss Franc",
    rate: 6.96,
    rateInUSD: 0.144,
    icon: "https://dl.dropbox.com/s/3tcaz1evzdienrf/07.jpg?dl=0",
  },
  {
    id: 7,
    currency: "CHF",
    currencyDescription: "Swiss Franc",
    rate: 79.5,
    rateInUSD: 0.013,
    icon: "https://dl.dropbox.com/s/wyrgb12ctvlazpm/08.jpg?dl=0",
  },
];

const ExchangeRates = () => {
  const renderHeader = () => {
    return <components.Header title="Exchange rates" goBack={true} />;
  };

  const renderCurrencyHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          borderBottomWidth: 1,
          borderBottomColor: "#CED6E1",
          paddingTop: 8,
          paddingBottom: 10,
        }}
      >
        <View style={{marginRight: "auto"}}>
          <Text
            style={{
              ...theme.FONTS.Mulish_400Regular,
              fontSize: 16,
              lineHeight: 16 * 1.6,
              color: theme.COLORS.bodyTextColor,
            }}
          >
            Currency
          </Text>
        </View>
        <View
          style={{
            width: theme.SIZES.width * 0.22,
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
            $1
          </Text>
        </View>
        <View style={{width: 70}}>
          <Text
            style={{
              ...theme.FONTS.Mulish_400Regular,
              fontSize: 16,
              lineHeight: 16 * 1.6,
              color: theme.COLORS.bodyTextColor,
            }}
          >
            in Dollars
          </Text>
        </View>
      </View>
    );
  };

  const renderCurrency = () => {
    return (
      <View style={{paddingHorizontal: 20}}>
        {exchange.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#CED6E1",
                paddingBottom: 10,
                paddingTop: 8,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  marginRight: "auto",
                  flexDirection: "row",
                  alignItems: "flex-start",
                }}
              >
                <Image
                  source={{uri: item.icon}}
                  style={{
                    width: 20.59,
                    height: 14,
                    marginVertical: 3.5,
                    marginRight: 10,
                  }}
                />
                <View>
                  <Text style={{...theme.FONTS.H5}}>{item.currency}</Text>
                  <Text
                    style={{
                      ...theme.FONTS.Mulish_400Regular,
                      fontSize: 12,
                      lineHeight: 12 * 1.6,
                      color: theme.COLORS.bodyTextColor,
                    }}
                  >
                    {item.currencyDescription}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: theme.SIZES.width * 0.22,
                }}
              >
                <Text
                  style={{
                    ...theme.FONTS.H5,
                    color: theme.COLORS.mainDark,
                  }}
                  numberOfLines={1}
                >
                  {item.rate}
                </Text>
              </View>

              <View style={{width: 70}}>
                <Text
                  style={{
                    ...theme.FONTS.H5,
                    color: theme.COLORS.mainDark,
                  }}
                  numberOfLines={1}
                >
                  {item.rateInUSD}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {renderCurrencyHeader()}
        {renderCurrency()}
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

export default ExchangeRates;
