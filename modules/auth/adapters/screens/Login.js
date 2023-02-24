import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input, Button, Image, Icon } from "@rneui/base";
import { isEmpty } from "lodash";
import Loading from "../../../../kernel/components/Loading";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login(props) {
  const { navigation } = props;
  const [error, setError] = useState({email: '', password: ''});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [show, setShow] = useState(false);
  const auth = getAuth();
  const [failedSession, setFailedSession] = useState(false);

  const login = () => {
    if (!(isEmpty(email) && isEmpty(password))) {
      setShow(true);
      setError({email: '', password: 'Usuario o contraseña incorrectos'});
      signInWithEmailAndPassword(auth, email, password)
        .then( async (userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          setShow(false);
          //navigation.navigate("userGuestStack"); 
          try {
            await AsyncStorage.setItem('@session', JSON.stringify(user))
          } catch (e) {
            console.log("error al guardar la sesion", e);
          }
          
        })
        .catch((error) => {
          setShow(false);
          const errorCode = error.code;
          const errorMessage = error.message;

          // ..
        });
    } else {
      setError({email: 'El email es obligatorio', password: 'La contraseña es obligatoria'});
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
      <Image
          source={require("../../../../assets/airbnb.png")}
          resizeMode="contain"
          style={styles.logotype}
        />
        <Input
          placeholder="Correo electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
          containerStyle={styles.input}
          rightIcon={
            <Icon
              type="material-community"
              name="at"
              color={error.email ? "#c2c2c2" : "tomato"}
            />
          }
          onChange={(event) => setEmail(event.nativeEvent.text)} //Seteamos el email
          errorMessage={error.email}
        />
        <Input
          placeholder="Contraseña"
          containerStyle={styles.input}
          onChange={(event) => setPassword(event.nativeEvent.text)} //Seteamos el password
          secureTextEntry={showPassword}
          rightIcon={
            <Icon
              type="material-community"
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              color={showPassword ? "tomato" : "#c2c2c2"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          errorMessage={error.password}
        />
        <Button
          title="Iniciar sesión"
          icon={
            <Icon
              type="material-community"
              name="login"
              size={22}
              color="#fff"
            />
          }
          buttonStyle={styles.btnSuccess}
          containerStyle={styles.btnContainer}
          onPress={login}
        />
        <Loading show={show} text="Iniciando Sesión, awanta ya casi" />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: "100%",
  },
  logotype: {
    width: "100%",
    height: 150,
    marginTop: 16,
    marginBottom: 50,
  },
  input: {
    width: "95%",
    marginBottom: 20,
    alignSelf: "center",
  },
  btnSuccess: {
    color: "#fff",
    backgroundColor: "tomato",
    borderRadius: 10,
  },
  btnContainer: {
    width: "70%",
    flex: 1,
    alignSelf: "center",
  },
  createAccount: {
    color: "#077bff",
    marginTop: 16,
    alignSelf: "center",
  },
});