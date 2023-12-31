import { NavigationContainer } from "@react-navigation/native";
import { Navbar } from "../components/Navbar";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm"
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CheckoutScreen } from "../screens/NestLaundryServices/CheckoutScreen";
import LaundryScreen from "../screens/LaundryScreen";
import SearchScreen from "../screens/SearchScreen";
import MyOrderScreen from "../screens/NestProfileScreen/MyOrderScreen";
import MyLaundryScreen from "../screens/NestProfileScreen/MyLaundryScreen";
import EditProfileScreen from "../screens/NestProfileScreen/EditProfileScreen";
import AddLaundryScreen from "../screens/NestProfileScreen/AddLaundryScreen";
import AddServiceScreen from "../screens/NestProfileScreen/AddServiceScreen";
import MyServicesScreen from "../screens/NestProfileScreen/MyServicesScreen";
import MessageScreen from "../screens/NestLaundryServices/MessageScreen";
import TopupScreen from "../screens/NestProfileScreen/TopupScreen";
import TopupWebScreen from "../screens/NestProfileScreen/TopupWebScreen";
const Stack = createNativeStackNavigator()

export default function MainStack() {
  const { isLoggedIn } = useContext(LoginContext)
    
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          statusBarColor: 'white',
          headerShown: false,
          contentStyle: {
            backgroundColor: 'white'
          }
        }}
      >{
        isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={Navbar} />
            <Stack.Screen name="LaundryScreen" component={LaundryScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
            <Stack.Screen name="MyOrderScreen" component={MyOrderScreen} />
            <Stack.Screen name="MyLaundryScreen" component={MyLaundryScreen} />
            <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
            <Stack.Screen name="AddLaundryScreen" component={AddLaundryScreen} />
            <Stack.Screen name="MyServicesScreen" component={MyServicesScreen} />
            <Stack.Screen name="AddServiceScreen" component={AddServiceScreen} />
            <Stack.Screen name="MessageScreen" component={MessageScreen} />
            <Stack.Screen name="TopupScreen" component={TopupScreen} />
            <Stack.Screen name="TopupWeb" component={TopupWebScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginForm} />
            <Stack.Screen name="Register" component={RegisterForm} />
          </> 
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}