import {Text, View, TouchableOpacity, Image, TextInput} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {components} from "../components";
import {theme} from "../constants";

const CreateInvoice = ({navigation}) => {
  const [chooseCurrency, setChooseCurrency] = useState("USD");

  const renderHeader = () => {
    return <components.Header title="Create invoice" goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{paddingHorizontal: 20}}
        enableOnAndroid={true}
      >
        <components.InputField
          placeholder="Company name"
          containerStyle={{marginTop: 20, marginBottom: 14}}
        />
        <TouchableOpacity
          style={{
            width: "100%",
            height: 50,
            backgroundColor: theme.COLORS.white,
            borderRadius: 10,
            marginBottom: 14,
            paddingHorizontal: 20,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              ...theme.FONTS.Mulish_400Regular,
              fontSize: 14,
              color: "#868698",
            }}
          >
            Country
          </Text>
          <Image
            source={require("../assets/other-icons/08.png")}
            style={{width: 16, height: 16}}
          />
        </TouchableOpacity>
        <components.InputField
          placeholder="Company email"
          containerStyle={{marginBottom: 14}}
        />
        <components.InputField
          placeholder="Amount"
          containerStyle={{marginBottom: 14}}
          leftIcon={
            <Image
              source={require("../assets/other-icons/03.png")}
              style={{width: 16, height: 16, marginRight: 6}}
            />
          }
        />
        <components.SmallHeader
          title="Choose currency:"
          containerStyle={{marginBottom: 6}}
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
              backgroundColor:
                chooseCurrency === "USD"
                  ? theme.COLORS.mainDark
                  : theme.COLORS.white,
              paddingVertical: 8,
              borderRadius: 10,
              marginRight: 14,
            }}
            onPress={() => setChooseCurrency("USD")}
          >
            <Text
              style={{
                color:
                  chooseCurrency === "USD"
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
              backgroundColor:
                chooseCurrency === "EUR"
                  ? theme.COLORS.mainDark
                  : theme.COLORS.white,
              paddingVertical: 8,
              borderRadius: 10,
            }}
            onPress={() => setChooseCurrency("EUR")}
          >
            <Text
              style={{
                color:
                  chooseCurrency === "EUR"
                    ? theme.COLORS.white
                    : theme.COLORS.mainDark,
              }}
            >
              EUR
            </Text>
          </TouchableOpacity>
        </View>
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
        <Text
          style={{
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 12,
            color: theme.COLORS.bodyTextColor,
            marginBottom: theme.SIZES.height * 0.1,
          }}
        >
          Bank fee is charged from the payer.
        </Text>
        <components.Button
          title="Send invoice"
          containerStyle={{marginBottom: 20}}
          onPress={() => navigation.navigate("InvoiceSent")}
        />
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

export default CreateInvoice;
