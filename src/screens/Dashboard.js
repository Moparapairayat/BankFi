import {
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  FlatList,
  StatusBar,
} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";

import {svg} from "../svg";
import {theme} from "../constants";
import {components} from "../components";

const cards = [
  {
    id: "1",
    card: require("../assets/cards/01.png"),
  },
  {
    id: "2",
    card: require("../assets/cards/02.png"),
  },
  {
    id: "3",
    card: require("../assets/cards/03.png"),
  },
];

const paymentTypes = [
  {
    id: "1",
    type: "Top-Up\nPayment",
    bgColor: "#3EB290",
    icon: <svg.TypeCardSvg />,
  },
  {
    id: "2",
    type: "Mobile\nPayment",
    bgColor: "#FF8A71",
    icon: <svg.TypeCardSvg />,
  },
  {
    id: "3",
    type: "Money\nTransfer",
    bgColor: "#55ACEE",
    icon: <svg.TypeCardSvg />,
  },
  {
    id: "4",
    type: `Make a\nPayment`,
    bgColor: "#EECC55",
    icon: <svg.TypeCardSvg />,
  },
];

const Dashboard = () => {
  const navigation = useNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  function updateCurrentSlideIndex(e) {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.SIZES.width);
    setCurrentSlideIndex(currentIndex);
  }

  const renderStatusBar = () => {
    return (
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
    );
  };

  const renderHeader = () => {
    return (
      <ImageBackground
        source={require("../assets/bg-03.png")}
        imageStyle={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <SafeAreaView style={{paddingTop: 12}}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 14,
              borderBottomWidth: 0.5,
              paddingHorizontal: 20,
              borderBottomColor: "#CED6E1",
              marginBottom: 20,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image
                source={require("../assets/users/01.png")}
                style={{width: 22, height: 22}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ExchangeRates")}
            >
              <Text
                style={{
                  ...theme.FONTS.Mulish_400Regular,
                  fontSize: 16,
                  color: theme.COLORS.white,
                  lineHeight: 16 * 1.6,
                }}
              >
                € 1.08 / 1.12
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("CardMenu")}>
              <svg.CreditCardSvg />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <FlatList
          data={cards}
          horizontal={true}
          contentContainerStyle={{
            paddingLeft: 20,
            marginBottom: 20,
          }}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={index}
                style={{marginRight: 20}}
                activeOpacity={0.9}
              >
                <Image source={item.card} style={{width: 290, height: 176}} />
              </TouchableOpacity>
            );
          }}
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginBottom: 51,
          }}
        >
          {cards.map((_, index) => {
            return (
              <View
                key={index}
                style={[
                  {
                    width: 8,
                    height: 8,
                    marginHorizontal: 5,
                    borderRadius: 50,
                    borderWidth: 3,
                    borderColor: "#D1D2DB",
                  },
                ]}
              />
            );
          })}
        </View>
      </ImageBackground>
    );
  };

  const renderCategories = () => {
    return (
      <View
        style={{
          top: -30,
          paddingHorizontal: 33,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {paymentTypes.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() =>
                item.id === "1"
                  ? navigation.navigate("TopUpPayment")
                  : item.id === "2"
                  ? navigation.navigate("MobilePayment")
                  : item.id === "3"
                  ? navigation.navigate("FundTransfer")
                  : item.id === "4"
                  ? navigation.navigate("IbanPayment")
                  : null
              }
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: item.bgColor,
                  borderRadius: 60 / 2,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                {item.icon}
              </View>
              <Text
                style={{
                  textAlign: "center",
                  ...theme.FONTS.Mulish_600SemiBold,
                  fontSize: 10,
                  lineHeight: 10 * 1.2,
                  color: theme.COLORS.bodyTextColor,
                }}
              >
                {item.type}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderContent = () => {
    return (
      <View style={{paddingHorizontal: 20}}>
        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: "#CED6E1",
            top: -16,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 14,
            paddingTop: 20,
          }}
        >
          <Text
            style={{
              ...theme.FONTS.H4,
              color: theme.COLORS.mainDark,
            }}
          >
            Latest transactions
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("TransactionHistory")}
          >
            <Text
              style={{
                ...theme.FONTS.Mulish_500Medium,
                fontSize: 16,
                color: theme.COLORS.linkColor,
                lineHeight: 16 * 1.3,
              }}
            >
              View all
            </Text>
          </TouchableOpacity>
        </View>
        <components.Transaction
          paymentType="Adalyn Roth"
          transactionType="Money transfer"
          amount="- 140.00"
          containerStyle={{marginBottom: 6}}
          transfer={true}
          onPress={() => navigation.navigate("TransactionDetails")}
        />
        <components.Transaction
          paymentType="Amazon"
          transactionType="Online payments"
          amount="- 239.57"
          containerStyle={{marginBottom: 6}}
          amazon={true}
          onPress={() => navigation.navigate("TransactionDetails")}
        />
        <components.Transaction
          paymentType="Paypal"
          transactionType="Deposits"
          amount="+ 700.00"
          deposit={true}
          payPal={true}
          onPress={() => navigation.navigate("TransactionDetails")}
          containerStyle={{marginBottom: 25}}
        />
      </View>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
      {renderStatusBar()}
      {renderHeader()}
      {renderCategories()}
      {renderContent()}
    </ScrollView>
  );
};

export default Dashboard;
