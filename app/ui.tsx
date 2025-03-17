
// import * as React from 'react';
import App from './App';
// import { render } from 'react-figma';

import { registerRootComponent } from 'expo';

// // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// // It also ensures that whether you load the app in Expo Go or in a native build,
// // the environment is set up appropriately
registerRootComponent(App);

// Render your React application to the Figma plugin UI
// render(<App />);
