import { Slot } from 'expo-router'; // Faz com que as paginas troquem sem carregar / mais rapido
import { Provider } from 'react-redux'; // Estado global
import store from '../redux/store';


// Esta função permitira que todo o app tenha o estado global
export default function RootLayout() {
  return (
    <Provider store={store}>
      <Slot /> {}
    </Provider>
  );
}
