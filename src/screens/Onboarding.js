import {View, Text, FlatList, ImageBackground, StatusBar} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import React, {useState} from "react";

import {theme, onboardingData} from "../constants";
import {svg} from "../svg";
import {components} from "../components";

const Onboarding = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  function updateCurrentSlideIndex(e) {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.SIZES.width);
    setCurrentSlideIndex(currentIndex);
  }

  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <FlatList
        data={onboardingData}
        keyExtractor={item => item.id}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        renderItem={({item, index}) => {
          return (
            <ImageBackground
              style={{
                width: theme.SIZES.width,
                height: theme.SIZES.height,
                justifyContent: "flex-end",
              }}
              source={{uri: item.image}}>
              <View
                style={{
                  backgroundColor: "white",
                  paddingTop: theme.SIZES.height * 0.08,
                  paddingBottom: theme.SIZES.height * 0.07,
                  paddingHorizontal: 20,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}>
                <View
                  style={{
                    alignSelf: "center",
                    marginBottom: 20,
                  }}>
                  <svg.LogoSvg />
                </View>
                <Text
                  style={{
                    textAlign: "center",
                    ...theme.FONTS.H3,
                    color: theme.COLORS.mainDark,
                    marginBottom: 18,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 16,
                    color: theme.COLORS.bodyTextColor,
                    lineHeight: 16 * 1.6,
                    marginBottom: 24,
                  }}>
                  {item.description}
                </Text>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    marginBottom: 45,
                  }}>
                  {onboardingData.map((_, index) => {
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
                          currentSlideIndex == index && {
                            borderColor: theme.COLORS.mainDark,
                          },
                        ]}
                      />
                    );
                  })}
                </View>
                <components.Button
                  title="Get Started"
                  onPress={() => navigation.navigate("SignIn")}
                />
              </View>
            </ImageBackground>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Onboarding;
