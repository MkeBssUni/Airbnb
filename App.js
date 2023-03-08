import React, {useEffect, useState} from "react";
import Navigation from './config/navigation/Navigation'
import UserNavigation from './config/navigation/UserNavigation'
import {app} from './config/utils/firebase'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { LogBox } from 'react-native';
import Loading from './kernel/components/Loading'
LogBox.ignoreAllLogs(true);


export default function App() {
  
  const [session, setSession] = useState(null)

  useEffect(()=>{
    const auth = getAuth()
    onAuthStateChanged(auth, (credential)=>{
      !credential ? setSession(false) : setSession(true)
    })
  },[])

  if(session === null) return <Loading show={true} text="Cargando..."/>
  return session ? <UserNavigation/> : <Navigation/>
}

