import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1011102Navigator from '../features/BlankScreen1011102/navigator';
import EmailAuth811054Navigator from '../features/EmailAuth811054/navigator';
import BlankScreen511049Navigator from '../features/BlankScreen511049/navigator';
import BlankScreen410903Navigator from '../features/BlankScreen410903/navigator';
import BlankScreen310862Navigator from '../features/BlankScreen310862/navigator';
import BlankScreen010819Navigator from '../features/BlankScreen010819/navigator';
import BlankScreen010694Navigator from '../features/BlankScreen010694/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen1011102: { screen: BlankScreen1011102Navigator },
EmailAuth811054: { screen: EmailAuth811054Navigator },
BlankScreen511049: { screen: BlankScreen511049Navigator },
BlankScreen410903: { screen: BlankScreen410903Navigator },
BlankScreen310862: { screen: BlankScreen310862Navigator },
BlankScreen010819: { screen: BlankScreen010819Navigator },
BlankScreen010694: { screen: BlankScreen010694Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
