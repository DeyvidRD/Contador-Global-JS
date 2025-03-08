import { Slot } from 'expo-router'; // PERMITE A TROCA DE PAGINAS SEM RECARREGAR
import { Provider } from 'react-redux'; // ESTADO GLOBAL
import store from '../redux/store';


// A FUNÇÃO PERMITE QUE TODO O APP TENHA O ESTADO GLOBAL
export default function RootLayout() {
  return (
    <Provider store={store}>
      <Slot /> {}
    </Provider>
  );
}
