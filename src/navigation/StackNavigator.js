import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {screens} from "../screens";
import {screenNames} from "../constants";

import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screenNames.Onboarding}
        screenOptions={{
          gestureEnabled: false,
          cardStyle: {backgroundColor: "white"},
        }}
      >
        <Stack.Screen
          name={screenNames.Onboarding}
          component={screens.Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.TabNavigator}
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.Profile}
          component={screens.Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.EditPersonalInfo}
          component={screens.EditPersonalInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.ExchangeRates}
          component={screens.ExchangeRates}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.CardMenu}
          component={screens.CardMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.CardDetails}
          component={screens.CardDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.SignIn}
          component={screens.SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.SignUp}
          component={screens.SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.SignInCode}
          component={screens.SignInCode}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.ChangePinCode}
          component={screens.ChangePinCode}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.SignUpAccountCreated}
          component={screens.SignUpAccountCreated}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.Statistics}
          component={screens.Statistics}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.TopUpPayment}
          component={screens.TopUpPayment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.TransactionDetails}
          component={screens.TransactionDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.TransactionHistory}
          component={screens.TransactionHistory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.VerifyYourPhoneNumber}
          component={screens.VerifyYourPhoneNumber}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.ConfirmationCode}
          component={screens.ConfirmationCode}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.CreateInvoice}
          component={screens.CreateInvoice}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.FAQ}
          component={screens.FAQ}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.ForgotPassword}
          component={screens.ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.ForgotPasswordSentEmail}
          component={screens.ForgotPasswordSentEmail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.FundTransfer}
          component={screens.FundTransfer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.IbanPayment}
          component={screens.IbanPayment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.InvoiceSent}
          component={screens.InvoiceSent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.MobilePayment}
          component={screens.MobilePayment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.NewPassword}
          component={screens.NewPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.PaymentFailed}
          component={screens.PaymentFailed}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.Payments}
          component={screens.Payments}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.PaymentSuccess}
          component={screens.PaymentSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.PrivacyPolicy}
          component={screens.PrivacyPolicy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.OpenNewCard}
          component={screens.OpenNewCard}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
