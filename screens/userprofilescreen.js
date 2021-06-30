import React from 'react';
import {
  ButtonOutline,
  IconButton,
  ScreenContainer,
  Touchable,
  CircleImage,
  withTheme,
} from '@draftbit/ui';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const AccountScreen = props => {
  const { theme } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  const list = [{
    url: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6012d1658ec58b0085e29334%2F0x0.jpg",
    title: "hi",
    key: "Ab7",
    description: "H58",
  }];

  return (
    <ScreenContainer style={styles.ScreenContainer_0E}>
      <View style={styles.View_9q} pointerEvents="auto">
        <View style={styles.Viewcz} pointerEvents="auto">
          <View style={styles.ViewXZ} pointerEvents="auto">
            <Text
              style={[styles.Textdk, { color: theme.colors.strong }]}
              numberOfLines={1}
              ellipsizeMode="clip"
            >
              {'evan.vera@hotmail.com'}
            </Text>
          </View>

          <View style={styles.ViewKe} pointerEvents="auto">
            <IconButton icon="Ionicons/md-settings-outline" size={32} />
          </View>
        </View>

        <View style={styles.ViewMr} pointerEvents="auto">
          <Touchable>
            <Image
              style={styles.ImageOU}
              source={{
                uri: 'https://static.draftbit.com/images/placeholder-image.png',
              }}
              resizeMode="cover"
            />
          </Touchable>

          <Text style={[styles.TextzB, { color: theme.colors.strong }]}>
            {'0 Posts'}
          </Text>

          <Text style={[styles.TextWF, { color: theme.colors.strong }]}>
            {'0 Friends'}
          </Text>
        </View>

        <View style={styles.View_2w} pointerEvents="auto">
          <TextInput
            style={[styles.TextInputOa, { color: theme.colors.strong }]}
            placeholder="Evan Vera"
            value={textInputValue}
            onChangeText={textInputValue => setTextInputValue(textInputValue)}
            placeholderTextColor={theme.colors.strong}
          />
          <TextInput
            style={[styles.TextInputau, { color: theme.colors.strong }]}
            placeholder="Expert Plumber"
            value={textInputValue}
            onChangeText={textInputValue => setTextInputValue(textInputValue)}
            placeholderTextColor={theme.colors.strong}
          />
          <TextInput
            style={[styles.TextInputJl, { color: theme.colors.strong }]}
            placeholder="Bachelor's from Harvard University"
            value={textInputValue}
            onChangeText={textInputValue => setTextInputValue(textInputValue)}
            placeholderTextColor={theme.colors.strong}
          />
          <TextInput
            style={[styles.TextInputny, { color: theme.colors.strong }]}
            placeholder="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            value={textInputValue}
            onChangeText={textInputValue => setTextInputValue(textInputValue)}
            placeholderTextColor={theme.colors.strong}
            multiline={true}
          />
        </View>

        <ButtonOutline style={styles.ButtonOutline_68} title="Edit Profile">
          {`Log In`}
        </ButtonOutline>

        <View style={styles.ViewF0} pointerEvents="auto">
          <Text style={[styles.Textgp, { color: theme.colors.strong }]}>
            {'Your Posts'}
          </Text>
          <FlatList
            data={list}
            renderItem={({ item }) => (
              <View style={styles.Viewvv} pointerEvents="auto">
                <View style={styles.ViewlZ} pointerEvents="auto">
                  <CircleImage
                    source={{
                      uri: 'https://static.draftbit.com/images/placeholder-image.png',
                    }}
                    size={60}
                  />
                  <View style={styles.ViewhX} pointerEvents="auto">
                    <Text style={[styles.Textqs, { color: theme.colors.strong }]}>
                      {'Evan Vera'}
                    </Text>

                    <Text
                      style={[styles.TextgJ, { color: theme.colors.strong }]}
                      numberOfLines={3}
                    >
                      {'Looking for Experienced Taxidermists'}
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.Imagego}
                  source={{
                    uri: 'https://static.draftbit.com/images/placeholder-image.png',
                  }}
                  resizeMode="cover"
                />
              </View>
            )}
            contentContainerStyle={styles.FlatListPF}
            numColumns={1}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textdk: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewXZ: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 50,
  },
  ViewKe: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 50,
    height: 50,
  },
  Viewcz: {
    flexDirection: 'row',
    marginTop: '12%',
    width: '95%',
    height: 50,
  },
  ImageOU: {
    width: 100,
    height: 100,
  },
  TextzB: {
    marginLeft: 30,
    fontSize: 18,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextWF: {
    marginLeft: 30,
    fontSize: 18,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewMr: {
    flexDirection: 'row',
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  TextInputOa: {
    textAlign: 'left',
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextInputau: {
    textAlign: 'left',
    fontSize: 18,
    fontFamily: 'System',
    fontWeight: '400',
  },
  TextInputJl: {
    textAlign: 'left',
    fontSize: 18,
    fontFamily: 'System',
    fontWeight: '400',
  },
  TextInputny: {
    textAlign: 'left',
    fontSize: 15,
    marginTop: 15,
    fontFamily: 'System',
    fontWeight: '400',
  },
  View_2w: {
    minHeight: 50,
    marginTop: '5%',
    width: 330,
  },
  ButtonOutline_68: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    textAlign: 'center',
    marginTop: '6%',
    fontFamily: 'System',
    fontWeight: '700',
  },
  Textgp: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'System',
    fontWeight: '600',
  },
  FlatListPF: {
    flex: 1,
  },
  ViewF0: {
    width: 350,
    height: 270,
    marginTop: '6%',
  },
  View_9q: {
    minHeight: 50,
    flexGrow: 1,
    alignItems: 'center',
  },
  ScreenContainer_0E: {
    alignItems: 'center',
  },
});

export default withTheme(AccountScreen);