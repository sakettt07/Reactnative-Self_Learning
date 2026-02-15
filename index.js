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


AppRegistry.registerComponent(appName, () => CoreComponents);
