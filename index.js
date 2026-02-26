/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import FunctionalComponent from './src/components/FunctionalComponent';
import ClassComponent from './src/components/ClassComponent';
import InlineStyles from './src/styles/InlineStyles';
import CoreComponents from './src/core-component/CoreComponents'
import FlexBoxDemo from './src/components/FlexBoxDemo';
import StackDemo from './src/navigation/stack/StackDemo'
import DrawerNavigation from './src/navigation/drawer/DrawerNavigation';
import UseContext from './src/components/UseContext/UseContext';
import UseReducer from './src/components/UseReducerHook/UseReducer'


AppRegistry.registerComponent(appName, () => UseReducer);
