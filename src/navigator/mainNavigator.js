import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen57494Navigator from '../features/BlankScreen57494/navigator';
import BlankScreen67493Navigator from '../features/BlankScreen67493/navigator';
import BlankScreen57491Navigator from '../features/BlankScreen57491/navigator';
import BlankScreen57489Navigator from '../features/BlankScreen57489/navigator';
import BlankScreen67486Navigator from '../features/BlankScreen67486/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen57494: { screen: BlankScreen57494Navigator },
BlankScreen67493: { screen: BlankScreen67493Navigator },
BlankScreen57491: { screen: BlankScreen57491Navigator },
BlankScreen57489: { screen: BlankScreen57489Navigator },
BlankScreen67486: { screen: BlankScreen67486Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
