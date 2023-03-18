import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Navigator } from './src/navigator/Navigator';
import { PermissionProvider } from './src/context/PermissionsContext';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

const AppState = ({ children }: any) => {
    return (
        <PermissionProvider>
            {children}
        </PermissionProvider>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                <Navigator />
            </AppState>
        </NavigationContainer>
    );
};

export default App;
