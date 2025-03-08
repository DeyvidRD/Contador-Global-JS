import * as React from 'react';
import { Provider } from 'react-redux'; //Permite que os componentes vejam os estados globais
import store from '../redux/store';
import { useLoadedAssets } from 'expo-router'; //Garantia de que os recursos sejam carregados devidamente

export default function App() {
  const isAssetsLoaded = useLoadedAssets(); //Ve se os recursos carregaram

  
  if (!isAssetsLoaded) {
    return null;
  }

  // Conecta ao store e permite acessar ao estado
  return (
    <Provider store={store}> 
      {}
    </Provider>
  );
}