import {View, TouchableOpacity, ScrollView, Image, Text} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import Accordion from "react-native-collapsible/Accordion";

import {svg} from "../svg";
import {theme} from "../constants";
import {components} from "../components";

const frequentlyQuestions = [
  {
    id: "1",
    question: "What's included with a free plan ?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "2",
    question: "What content will my app have ?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "3",
    question: "Can I change my icon ?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "4",
    question: "What is a hybrid app ?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "5",
    question: "How do Push Alerts work ?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "6",
    question: "Why can’t the app upload files ?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const FAQ = () => {
  const [activeSections, setActiveSections] = useState([]);

  const setSections = sections => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = () => {
    return (
      <View>
        <SafeAreaView>
          <components.Header
            goBack={true}
            containerStyle={{marginBottom: 20}}
          />
        </SafeAreaView>
        <Image
          source={require("../assets/bg-01.png")}
          style={{
            height: 350,
            width: theme.SIZES.width,
            position: "absolute",
            zIndex: -1,
          }}
        />
      </View>
    );
  };

  const renderFaqHeader = (section, _, isActive) => {
    return (
      <View
        style={{
          paddingVertical: 18,
          marginLeft: 20,
          marginRight: 18,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            ...theme.FONTS.H5,
            textTransform: "capitalize",
            color: isActive ? theme.COLORS.linkColor : theme.COLORS.mainDark,
          }}
        >
          {section.question}
        </Text>
        {isActive ? <svg.QuestionCloseSvg /> : <svg.QuestionOpenSvg />}
      </View>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <View
        style={{
          marginHorizontal: 20,
          paddingBottom: 20,
        }}
      >
        <Text
          style={{
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 16,
            lineHeight: 15 * 1.7,
            // color: theme.COLORS.gray1,
          }}
        >
          {section.answer}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
      {renderHeader()}

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 20,
        }}
      >
        <Accordion
          activeSections={activeSections}
          sections={frequentlyQuestions}
          touchableComponent={TouchableOpacity}
          renderHeader={renderFaqHeader}
          renderContent={renderContent}
          duration={400}
          onChange={setSections}
          underlayColor={theme.COLORS.linkColor}
          sectionContainerStyle={{
            backgroundColor: theme.COLORS.white,
            marginBottom: 8,
            borderColor: theme.COLORS.linkColor,
            marginHorizontal: 20,
            borderRadius: 10,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default FAQ;
