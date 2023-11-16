import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import appJson from './app.json';
import { theme } from './src/styles/theme/v1/theme';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/screens/Home';
import HospitalHistory from './src/screens/HospitalHistory';
import MyHealth from './src/screens/MyHealth';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import MedicalConsultations from './src/screens/MedicalConsultations';
import InfoConsulta from './src/screens/InfoConsulta';
import AgendarConsulta from './src/screens/AgendarConsulta';
import { AuthProvider, useAuth } from './src/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  );
}

function Layout() {
  const Tab = createMaterialBottomTabNavigator();
  const { authState, onLogout } = useAuth()
  console.log('AUTH_STATE: ', authState?.authenticated)
  console.log('ON_LOGOUT: ', onLogout)
  return (
      <PaperProvider theme={theme}>
        <NavigationContainer> 
          <Tab.Navigator>
            { authState?.authenticated ? 
              (
                <>
                  <Tab.Screen
                    name="AgendarConsulta"
                    component={AgendarConsulta}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                      ),
                    }}
                  />
                  <Tab.Screen
                    name="Consultas"
                    component={MedicalConsultations}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="clock-edit-outline" color={color} size={26} />
                      ),
                    }}
                  />
                  <Tab.Screen
                    name="InfoConsulta"
                    component={InfoConsulta}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                      ),
                    }}
                  />
                  <Tab.Screen
                    name="Minha Saude"
                    component={MyHealth}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="pill" color={color} size={26} />
                      ),
                    }}
                  />
                  <Tab.Screen
                    name="HospitalHistory"
                    component={HospitalHistory}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={26} />
                      ),
                    }}
                  />
                  <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                      ),
                    }}
                  />
                </>
              )
            : (
                <>
                  <Tab.Screen
                    name="Login"
                    component={Login}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                      ),
                    }}
                  />
                  <Tab.Screen
                    name="Register"
                    component={Register}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                      ),
                    }}
                  />
                </>
              )}
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent(appJson.expo.name, () => App);