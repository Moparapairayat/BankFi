import {View, Text, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {theme} from "../constants";

const ProfileCategory = ({
  onPress,
  icon,
  title,
  rightElement,
  toggleButton,
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <View style={{width: "100%", height: 62, marginBottom: 6}}>
      <View
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 10,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
          onPress={onPress}
        >
          <View style={{flexDirection: "row", alignItems: "center"}}>
            {icon && icon}
            <Text
              style={{
                marginLeft: 10,
                ...theme.FONTS.H5,
                color: theme.COLORS.mainDark,
              }}
              numberOfLines={1}
            >
              {title}
            </Text>
          </View>
          {rightElement && (
            <View style={{marginLeft: "auto"}}>{rightElement}</View>
          )}
          {toggleButton && (
            <TouchableOpacity
              style={{
                width: 40,
                marginLeft: "auto",
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
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileCategory;
