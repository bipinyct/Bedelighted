import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  KeyboardAvoidingView,
  TextInput,
  Image,
  Alert,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
// import {MaterialIcons} from '@expo/vector-icons';
// import {AntDesign} from '@expo/vector-icons';
// import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import Logo from '../assets/bedelighted-logo.png';
import {ScrollView} from 'react-native-gesture-handler';

const RegisterScreen = () => {
  const [name, setName] = useState('Admin');
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('Admin@123');
  const navigation = useNavigation();

  const handleRegister = async () => {
    const user = {name, email, password};
    const serverUrl =
      Platform.OS === 'android'
        ? 'http://localhost:8081/register'
        : 'http://localhost:8081/register';

    try {
      console.log('Making API request to:', serverUrl, 'with user:', user);
      const response = await axios.post(serverUrl, user);
      console.log('Response from server:', response);

      Alert.alert(
        'Registration Successful',
        'You have registered successfully',
      );

      setName('');
      setPassword('');
      setEmail('');

      navigation.navigate('Login');
    } catch (error) {
      console.log('Catch Registration error:', error.message);

      Alert.alert(
        'Registration Error',
        'An error occurred during registration. Please try again.',
      );
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
          <Text style={styles.loginText}>Register to your account</Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputView}>
            {/* <Ionicons
              name="person"
              size={24}
              color="gray"
              style={{marginLeft: 8}}
            /> */}
            <TextInput
              value={name}
              editable={false}
              style={styles.textInput}
              placeholder="Enter your name"
            />
          </View>
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
              editable={false}
              style={styles.textInput}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

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
              editable={false}
              secureTextEntry={true}
              style={styles.textInput}
              placeholder="Enter your password"
            />
          </View>
        </View>

        <View style={styles.optionsContainer}>
          <Text>Keep me logged in</Text>
          <Text style={{color: '#007FFF', fontWeight: '700'}}>
            Forgot password
          </Text>
        </View>

        <View style={{marginTop: 15}} />
        <Pressable onPress={handleRegister} style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </Pressable>

        <Pressable onPress={() => navigation.goBack()} style={{marginTop: 15}}>
          <Text style={{textAlign: 'center', color: 'gray', fontSize: 16}}>
            Already have an account? Sign in
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
    // flex: 1,
    // width: "100%",
    // justifyContent: "center",
  },
  centeredView: {
    alignItems: 'center',
  },
  loginText: {
    fontSize: 17,
    fontWeight: 'bold',
    // marginTop: 12,
    color: '#041E42',
  },
  inputContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
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
  optionsContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  registerButton: {
    width: 200,
    backgroundColor: '#3F6065',
    borderRadius: 6,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 15,
  },
  registerButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
