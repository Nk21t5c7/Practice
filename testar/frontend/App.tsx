import React from 'react';
import { ViroARSceneNavigator } from '@viro-community/react-viro';
import MyScene from './src/components/MyScene';

export default function App() {
  return <ViroARSceneNavigator initialScene={{scene: MyScene}} />;
}
