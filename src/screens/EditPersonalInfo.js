import {
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";

import {svg} from "../svg";
import {theme} from "../constants";
import {components} from "../components";

const EditPersonalInfo = ({navigation}) => {
  const renderHeader = () => {
    return <components.Header title="Edit personal info" goBack={true} />;
  };

  const renderUserPhoto = () => {
    return (
      <TouchableOpacity
        style={{
          width: 70,
          height: 70,
          alignSelf: "center",
          marginVertical: 20,
        }}
      >
        <ImageBackground
          source={{
            uri: "https://dl.dropbox.com/s/g61a6dbx2t5adiv/01.jpg?dl=0",
          }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 35,
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(27, 29, 77, 0.5)",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 35,
            }}
          >
            <svg.EditPhotoSvg />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderInputFields = () => {
    return (
      <View>
        <components.InputField
          placeholder="Cristina Wolf"
          containerStyle={{paddingHorizontal: 20, marginBottom: 14}}
        />
        <components.InputField
          placeholder="+17 | xxxxxxxxxx"
          containerStyle={{paddingHorizontal: 20, marginBottom: 14}}
          leftIcon={
            <Image
              source={{
                uri: "https://dl.dropbox.com/s/ima3jsg6qhzu8v1/01.jpg?dl=0",
              }}
              style={{width: 20.59, height: 14, marginRight: 6}}
            />
          }
        />
        <components.InputField
          placeholder="Enter your email"
          containerStyle={{paddingHorizontal: 20, marginBottom: 14}}
        />
        <components.InputField
          placeholder="MM/DD/YYYY"
          containerStyle={{paddingHorizontal: 20, marginBottom: 14}}
          rightIcon={
            <Image
              source={require("../assets/other-icons/24.png")}
              style={{width: 16, height: 16}}
            />
          }
        />
        <components.InputField
          placeholder="Enter your address"
          containerStyle={{paddingHorizontal: 20, marginBottom: 14}}
        />
      </View>
    );
  };

  const renderButton = () => {
    return (
      <components.Button title="Save" onPress={() => navigation.goBack()} />
    );
  };

  const renderContent = () => {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingHorizontal: 20}}>
        {renderUserPhoto()}
        {renderInputFields()}
        {renderButton()}
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

export default EditPersonalInfo;
