import {StatusBar} from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Alert,
  TextInput,
} from 'react-native';
import Logo from '../assets/bedelighted-logo.png';
// import {MaterialIcons} from '@expo/vector-icons';
// import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleGuestLogin = () => {
    navigation.navigate('GuestScreen');
  };

  const handleLogin = () => {
    const email = 'Admin@gmail.com';
    const password = 'Admin@123';

    if (email === 'Admin@gmail.com' && password === 'Admin@123') {
      // Successful login
      navigation.replace('Main');
    } else {
      // Unsuccessful login
      Alert.alert('Login Error', 'Invalid Email or Password');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.logo} source={Logo} />
      </View>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.centeredView}>
          <Text style={styles.loginText}>Login in to your account</Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputView}>
            {/* <MaterialIcons
              style={{marginLeft: 8}}
              name="email"
              size={24}
              color="gray"
            /> */}
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.textInput}
              placeholder="Enter your email"
            />
          </View>
        </View>
        <View>
          <View style={styles.inputContainer}>
            <View style={styles.inputView}>
              {/* <AntDesign
                style={{marginLeft: 8}}
                name="lock"
                size={24}
                color="gray"
              /> */}
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                style={styles.textInput}
                placeholder="Enter your password"
              />
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Text>Keep me logged in</Text>
          <Text style={{color: '#007FFF', fontWeight: '700'}}>
            Forgot password
          </Text>
        </View>
        <View style={{marginTop: 80}} />
        <Pressable
          onPress={handleLogin}
          style={{
            width: 200,
            backgroundColor: '#3F6065',
            borderRadius: 6,
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: 15,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Login
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('Register')}
          style={{marginTop: 15}}>
          <Text style={{textAlign: 'center', color: 'gray', fontSize: 16}}>
            Don't have an account? Sign up
          </Text>
        </Pressable>

        <View style={{marginTop: 90}}>
          <Pressable
            onPress={handleGuestLogin}
            style={{
              width: 200,
              backgroundColor: '#3F6065',
              borderRadius: 6,
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: 15,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Login as guest
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6DDED',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 30,
  },
  keyboardView: {
    flex: 1,
    width: '100%',
  },
  centeredView: {
    alignItems: 'center',
  },
  loginText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#041E42',
  },
  inputContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'white',
    paddingVertical: 5,
    borderRadius: 5,
  },
  textInput: {
    marginVertical: 10,
    color: 'gray',
    width: 300,
    fontSize: 16,
  },
});
