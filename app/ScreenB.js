import { View, Text, TouchableOpacity } from 'react-native'; // COMPONENTES DO REACT NATIVE
import { useSelector, useDispatch } from 'react-redux'; // ACESSA O ESTADO DE ARMAZENAMENTO GLOBAL (PARA QUE AS DUAS PAGINAS ESTEJA EM SINCRONIA)   
import { increment, decrement, reset } from '../redux/counterSlice';
import { router } from 'expo-router'; // USADO PARA NAVEGAR ENTRE PAGINAS
import { styles } from './styles'; // LIGANDO O ARQUIVO DE ESTILOS



// FUNCAO PARA ACESSAR O VARLOR DO CONTADOR
export default function ScreenB() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen B</Text>
      <Text style={styles.count}>Contador: {count}</Text>

      <TouchableOpacity style={styles.button} onPress={() => dispatch(increment())}>
        <Text style={styles.buttonText}>Acrecentar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => dispatch(decrement())}>
        <Text style={styles.buttonText}>Diminuir</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => dispatch(reset())}>
        <Text style={styles.buttonText}>Resetar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/ScreenA')}>
        <Text style={styles.buttonText}>Screen A</Text>
      </TouchableOpacity>
    </View>
  );
}
