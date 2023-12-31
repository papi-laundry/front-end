import {createContext, useState, useEffect} from 'react'
import * as SecureStore from 'expo-secure-store';

export const LoginContext = createContext()

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  return result
}

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  async function loginAction(key, value) {
    try {
      await SecureStore.setItemAsync(key, value);
      setIsLoggedIn(true)
    } catch (error) {
      console.log(error);
    }
  }

  async function logoutAction(key) {
    try {
      await SecureStore.deleteItemAsync(key);
      setIsLoggedIn(false)
    } catch (error) {
      console.log(error);
    }
  }

  async function getToken() {
    try {
      return getValueFor("token")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    SecureStore.deleteItemAsync('token')
    getValueFor("token").then((data) => {
      if(data) {
        setIsLoggedIn(false)
      }
    })
  }, [])

  return (
    <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn, loginAction, logoutAction, getToken}}>
      {children}
    </LoginContext.Provider>
  )
}
