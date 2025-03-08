import * as React from 'react';
import { Provider } from 'react-redux'; //PERMITE QUE OS COMPONENTES CONHEÇAM O ESTADO GLOBAL
import store from '../redux/store';
import { useLoadedAssets } from 'expo-router'; //USADO PARA GARANTIR QUE OS RECURSOS SEJAM CARREGADOS

export default function App() {
  const isAssetsLoaded = useLoadedAssets(); //POSSIBILITA VER SE OS RECURSOS FORAM CARREGADOS

  
  if (!isAssetsLoaded) {
    return null;
  }


  // CONECTA NO STORE PEMITINDO O COMPONENTE ACESSAR O ESTADO
  return (
    <Provider store={store}> 
      {}
    </Provider>
  );
}