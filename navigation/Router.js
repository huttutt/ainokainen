import { createRouter } from '@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import DrugsList from '../screens/DrugsList';
import DrugDetails from '../screens/DrugDetails';
import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  home: () => HomeScreen,
  links: () => LinksScreen,
  drugs: () => DrugsList,
  drug: () => DrugDetails,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
}));
