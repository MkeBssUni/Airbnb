import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";

const firebaseConfig = {
  apiKey: "AIzaSyCynrJ4ma-pC1ar7Y1073J12_BUEuAlikI",
  authDomain: "airbnb-dfd38.firebaseapp.com",
  projectId: "airbnb-dfd38",
  storageBucket: "airbnb-dfd38.appspot.com",
  messagingSenderId: "905326658826",
  appId: "1:905326658826:web:67c65c5a3a5a9349b6e6f3"
};

export const app = initializeApp(firebaseConfig);
  export const auth = initializeAuth(app,{persistence: getReactNativePersistence(AsyncStorage)})