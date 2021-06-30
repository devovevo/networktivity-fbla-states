import React from 'react';
import { ButtonSolid, Link, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, ImageBackground, StyleSheet, TextInput } from 'react-native';

const SignInScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [usernameInputValue, setUsernameInputValue] = React.useState('');
  const [passwordInputValue, setPasswordInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <ImageBackground
        style={styles.ImageBackgroundoh}
        source={require("../assets/5124620.png")}
        resizeMode="cover"
      >
        <Image
          style={styles.ImageRa}
          source={require("../assets/output-onlinepngtools.png")}
          resizeMode="cover"
        />
        <Image
          style={styles.ImageRZ}
          resizeMode="cover"
          source={require("../assets/text-1623352562189.png")}
        />
        <TextInput
          style={[
            styles.TextInputm6,
            { backgroundColor: theme.colors.background, borderRadius: 54 },
          ]}
          placeholder="Username"
          value={usernameInputValue}
          onChangeText={usernameInputValue => setUsernameInputValue(usernameInputValue)}
          numberOfLines={1}
          keyboardAppearance="default"
          maxLength={30}
          placeholderTextColor={theme.colors.strong}
        />
        <TextInput
          style={[
            styles.TextInputOr,
            { backgroundColor: theme.colors.background, borderRadius: 54 },
          ]}
          placeholder="Password"
          value={passwordInputValue}
          onChangeText={passwordInputValue => setPasswordInputValue(passwordInputValue)}
          numberOfLines={1}
          keyboardAppearance="default"
          maxLength={30}
          placeholderTextColor={theme.colors.strong}
          secureTextEntry={true}
        />
        <ButtonSolid
          style={[
            styles.ButtonSolidYZ,
            {
              backgroundColor: theme.colors.primary,
              borderRadius: 64,
              color: theme.colors.divider,
            },
          ]}
          title="Log In"
        >
          {`Sign Up`}
        </ButtonSolid>
        <Link
          style={[styles.LinkvJ, { color: theme.colors.medium }]}
          title="No account? Create one here"
          onPress={() => {
            try {
              navigation.navigate('Sign Up', {});
            } catch (err) {
              console.error(err);
            }
          }}
        />
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageRa: {
    width: '75%',
    height: '32%',
  },
  ImageRZ: {
    marginTop: '5%',
    width: '82%',
    height: '13%',
  },
  TextInputm6: {
    textAlign: 'center',
    opacity: 0.42,
    fontSize: 20,
    marginTop: '12%',
    width: '80%',
    height: '6%',
  },
  TextInputOr: {
    textAlign: 'center',
    opacity: 0.42,
    fontSize: 20,
    marginTop: '12%',
    width: '80%',
    height: '6%',
  },
  ButtonSolidYZ: {
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 60,
    paddingRight: 60,
    fontSize: 20,
    marginTop: '12%',
    fontFamily: 'System',
    fontWeight: '700',
  },
  LinkvJ: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 0,
    textDecorationLine: 'underline',
    marginTop: '17%',
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ImageBackgroundoh: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
});

export default withTheme(SignInScreen);