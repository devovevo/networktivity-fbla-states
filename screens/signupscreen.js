import React from 'react';
import {
  ButtonSolid,
  Icon,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Alert,
} from 'react-native';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const SignUpScreen = props => {
  const { theme } = props;

  const [_fullNameInputValue, _setFullNameInputValue] = React.useState('');
  const [_usernameInputValue, _setUsernameInputValue] = React.useState('');
  const [_emailInputValue, _setEmailInputValue] = React.useState('');
  const [_passwordInputValue, _setPasswordInputValue] = React.useState('');
  const [_professionInputValue, _setProfessionInputValue] = React.useState('');
  const [_experienceInputValue, _setExperienceInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ImageBackground
        style={styles.ImageBackground_5o}
        source={require("../assets/5124620.png")}
        resizeMode="cover"
      >
        <ScrollView
          style={styles.ScrollView}
          contentContainerStyle={styles.ScrollViewContainerStyle}
        >
          <View style={styles.View_7Z} pointerEvents="auto">
            <Icon name="Entypo/circle" color={theme.colors.medium} size={60} />
            <Icon name="AntDesign/minus" color={theme.colors.medium} size={60} />
            <Icon name="Entypo/time-slot" color={theme.colors.medium} size={60} />
            <Icon name="AntDesign/minus" color={theme.colors.medium} size={60} />
            <Icon
              color={theme.colors.medium}
              size={60}
              name="AntDesign/checkcircle"
            />
          </View>

          <Text style={[styles.Textew, { color: theme.colors.divider }]}>
            {'Welcome\n'}
          </Text>

          <View
            style={[
              styles.ViewU6,
              { borderRadius: 10, backgroundColor: theme.colors.light },
            ]}
            pointerEvents="auto"
          >
            <Icon
              style={styles.IconcY}
              name="MaterialCommunityIcons/card-account-details"
              color={theme.colors.strong}
              size={35}
            />
            <TextInput
              style={[styles.TextInputKr, { color: theme.colors.background }]}
              placeholder="Full Name"
              value={_fullNameInputValue}
              onChangeText={_fullNameInputValue => _setFullNameInputValue(_fullNameInputValue)}
              placeholderTextColor={theme.colors.background}
            />
          </View>

          <View
            style={[
              styles.Viewaa,
              { borderRadius: 10, backgroundColor: theme.colors.light },
            ]}
            pointerEvents="auto"
          >
            <Icon
              style={styles.Iconje}
              color={theme.colors.strong}
              size={40}
              name="MaterialCommunityIcons/rename-box"
            />
            <TextInput
              style={[styles.TextInput_7N, { color: theme.colors.background }]}
              placeholder="Username"
              value={_usernameInputValue}
              onChangeText={_usernameInputValue => _setUsernameInputValue(_usernameInputValue)}
              placeholderTextColor={theme.colors.background}
            />
          </View>

          <View
            style={[
              styles.Viewaa,
              { borderRadius: 10, backgroundColor: theme.colors.light },
            ]}
            pointerEvents="auto"
          >
            <Icon
              style={styles.Iconje}
              color={theme.colors.strong}
              size={40}
              name="MaterialCommunityIcons/email"
            />
            <TextInput
              style={[styles.TextInput_7N, { color: theme.colors.background }]}
              placeholder="Email"
              value={_emailInputValue}
              onChangeText={_emailInputValue => _setEmailInputValue(_emailInputValue)}
              placeholderTextColor={theme.colors.background}
            />
          </View>

          <View
            style={[
              styles.Viewaa,
              { borderRadius: 10, backgroundColor: theme.colors.light },
            ]}
            pointerEvents="auto"
          >
            <Icon
              style={styles.Iconje}
              color={theme.colors.strong}
              size={40}
              name="MaterialCommunityIcons/form-textbox-password"
            />
            <TextInput
              style={[styles.TextInput_7N, { color: theme.colors.background }]}
              placeholder="Password"
              secureTextEntry={true}
              value={_passwordInputValue}
              onChangeText={_passwordInputValue => _setPasswordInputValue(_passwordInputValue)}
              placeholderTextColor={theme.colors.background}
            />
          </View>

          <View
            style={[
              styles.Viewaa,
              { borderRadius: 10, backgroundColor: theme.colors.light },
            ]}
            pointerEvents="auto"
          >
            <Icon
              style={styles.IconG5}
              color={theme.colors.strong}
              size={40}
              name="MaterialIcons/work"
            />
            <TextInput
              style={[styles.TextInput_7N, { color: theme.colors.background }]}
              placeholder="Profession"
              value={_professionInputValue}
              onChangeText={_professionInputValue => _setProfessionInputValue(_professionInputValue)}
              placeholderTextColor={theme.colors.background}
            />
          </View>

          <View
            style={[
              styles.Viewaa,
              { borderRadius: 10, backgroundColor: theme.colors.light },
            ]}
            pointerEvents="auto"
          >
            <Icon
              style={styles.IconCF}
              color={theme.colors.strong}
              size={40}
              name="Feather/award"
            />
            <TextInput
              style={[styles.TextInput_7N, { color: theme.colors.background }]}
              placeholder="Experience"
              value={_experienceInputValue}
              onChangeText={_experienceInputValue => _setExperienceInputValue(_experienceInputValue)}
              placeholderTextColor={theme.colors.background}
            />
          </View>

          <ButtonSolid
            style={[
              styles.ButtonSolidvy,
              {
                backgroundColor: theme.colors.primary,
                borderRadius: 64,
                color: theme.colors.divider,
              },
            ]}
            title="Sign Up"
          >
            {`Sign Up`}
          </ButtonSolid>
        </ScrollView>
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  View_7Z: {
    minHeight: 50,
    flexDirection: 'row',
  },
  Textew: {
    fontSize: 50,
    marginTop: '7%',
    fontFamily: 'System',
    fontWeight: '600',
  },
  IconcY: {
    marginTop: 5,
  },
  TextInputKr: {
    width: 250,
    marginLeft: 20,
    fontSize: 25,
  },
  ViewU6: {
    flexDirection: 'row',
    opacity: 0.61,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: '-6%',
  },
  Iconje: {
    marginTop: 5,
  },
  TextInput_7N: {
    width: 250,
    marginLeft: 20,
    fontSize: 25,
  },
  Viewaa: {
    flexDirection: 'row',
    opacity: 0.61,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: '8%',
  },
  IconG5: {
    marginTop: 5,
  },
  PickerVU: {
    marginLeft: 20,
    height: 50,
    width: 200,
  },
  Viewqr: {
    flexDirection: 'row',
    opacity: 0.61,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: '8%',
    paddingTop: 4,
    paddingBottom: 4,
    width: 350,
  },
  Iconef: {
    marginTop: 5,
  },
  PickerZx: {
    marginLeft: 20,
  },
  Viewua: {
    flexDirection: 'row',
    opacity: 0.61,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: '8%',
    paddingTop: 4,
    paddingBottom: 4,
    width: 350,
  },
  IconCF: {
    marginTop: 5,
  },
  Pickerao: {
    marginLeft: 20,
  },
  ViewLK: {
    flexDirection: 'row',
    opacity: 0.61,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: '8%',
    paddingTop: 4,
    paddingBottom: 4,
    width: 350,
  },
  ButtonSolidvy: {
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 60,
    paddingRight: 60,
    fontSize: 20,
    marginTop: '8%',
    fontFamily: 'System',
    fontWeight: '700',
  },
  ImageBackground_5o: {
    width: '100%',
    height: '115%',
    marginTop: '-12%',
    flexGrow: 1,
    flex: 1,
  },
  ScrollViewContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ScrollView: {
    marginTop: '15%',
  },
});

export default withTheme(SignUpScreen);