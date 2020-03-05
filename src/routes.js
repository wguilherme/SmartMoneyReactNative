import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from './pages/Main';
import NewEntry from './pages/NewEntry';
import Report from './pages/Report';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      NewEntry,
      Report,
    },
    {
      //ele também seta o initial de acordo da ordem
      initialRouteName: 'Main',
      backBehavior: 'order',
    },
  ),
);

export default Routes;
