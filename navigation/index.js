import React from 'react';
import {AuthProvider} from './AuthProvider'
import RouteNavigation from './RouteNavigation'
import FlashMessage from "react-native-flash-message";

function MyNavigation() {
  return (
    <AuthProvider>
      <RouteNavigation />
      <FlashMessage position="top" />
    </AuthProvider>

  );
}

export default MyNavigation
