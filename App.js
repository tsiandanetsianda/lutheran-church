import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import AnnualPlanScreen from './screens/AnnualPlanScreen';
import AlmanacScreen from './screens/AlmanacScreen';
import MediaScreen from './screens/MediaScreen';
import CurrentAffairsScreen from './screens/CurrentAffairsScreen';
import SearchScreen from './screens/SearchScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AnnualPlan" component={AnnualPlanScreen} options={{ title: 'Annual Plan' }} />
      <Stack.Screen name="Almanac" component={AlmanacScreen} options={{ title: 'Almanac' }} />
      <Stack.Screen name="Media" component={MediaScreen} options={{ title: 'Media' }} />
      <Stack.Screen name="CurrentAffairs" component={CurrentAffairsScreen} options={{ title: 'Current Affairs' }} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Home' }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{ title: 'Search' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
