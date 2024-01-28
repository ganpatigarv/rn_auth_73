import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import {
    ActivityIndicator,
    Text, View,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { AuthContext } from '../context/Auth';

const AppNav = () => {
    const { isLogin, userToken } = useContext(AuthContext);
    if (isLogin) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }
    return (
        <NavigationContainer>

            {userToken !== null ? <AppStack /> : <AuthStack />}
        </NavigationContainer>

    );
}

export default AppNav;