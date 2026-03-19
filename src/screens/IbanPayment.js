import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {components} from "../components";
import {theme} from "../constants";

const cards = [
  {
    id: "1",
    cardNumber: "**** **** **** 1234",
    cardIcon: require("../assets/cards/06.png"),
    amount: "2 423.88",
  },
  {
    id: "2",
    cardNumber: "**** **** **** 8492",
    cardIcon: require("../assets/cards/06.png"),
    amount: "1 103.22",
  },
  {
    id: "3",
    cardNumber: "**** **** **** 1038",
    cardIcon: require("../assets/cards/06.png"),
    amount: "7 734.77",
  },
];

const IbanPayment = () => {
  const [selectedCard, setSelectedCard] = useState("1");

  const renderHeader = () => {
    return <components.Header title="IBAN payment" goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <components.SmallHeader
          title="Use card:"
          containerStyle={{
            marginTop: 20,
            marginBottom: 6,
            paddingHorizontal: 20,
          }}
        />
        <View style={{marginBottom: 14}}>
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
                    width: 315,
                    backgroundColor: theme.COLORS.white,
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 14,
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor:
                      selectedCard === item.id ? "#CED6E1" : theme.COLORS.white,
                  }}
                  onPress={() => setSelectedCard(item.id)}
                >
                  <Image
                    source={item.cardIcon}
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
                        lineHeight: 12 * 1.6,
                      }}
                    >
                      {item.cardNumber}
                    </Text>
                    <Text
                      style={{
                        ...theme.FONTS.H5,
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
        <components.SmallHeader
          title="Beneficiary info:"
          containerStyle={{
            marginBottom: 6,
            paddingHorizontal: 20,
          }}
        />
        <View style={{paddingHorizontal: 20}}>
          <components.InputField
            placeholder="IBAN number"
            containerStyle={{marginBottom: 14}}
          />
          <components.InputField
            placeholder="Beneficiary name"
            containerStyle={{marginBottom: 14}}
          />
          <components.InputField
            placeholder="BIC code"
            containerStyle={{marginBottom: 14}}
          />
          <components.InputField
            placeholder="Beneficiary bank"
            containerStyle={{marginBottom: 14}}
          />
          <components.InputField
            placeholder="Amount"
            containerStyle={{marginBottom: 14}}
            leftIcon={
              <Image
                source={require("../assets/other-icons/03.png")}
                style={{
                  width: 16,
                  height: 16,
                  marginRight: 6,
                }}
              />
            }
          />
          <View
            style={{
              backgroundColor: theme.COLORS.white,
              width: "100%",
              borderRadius: 10,
              paddingHorizontal: 20,
              paddingVertical: 14,
              marginBottom: 14,
            }}
          >
            <TextInput
              placeholder="Comment"
              multiline={true}
              numberOfLines={7}
              style={{flex: 1, height: 120}}
              textAlignVertical="top"
            />
          </View>
          <components.Button title="Send" containerStyle={{marginBottom: 20}} />
        </View>
      </KeyboardAwareScrollView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default IbanPayment;
