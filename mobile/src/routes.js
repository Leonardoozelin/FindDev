import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './Pages/Main';
import Profile from './Pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'FindDev',
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil no Github',
      }
    },
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerBackTitleVisible: null,
      headerStyle: {
        backgroundColor: '#7D40E7',

      },
      headerTitleStyle: {
        alignContent: 'center',
        flex: 1
      },
    },
  }),
);

export default Routes;
