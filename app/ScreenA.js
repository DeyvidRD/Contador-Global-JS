import { View, Text, TouchableOpacity } from 'react-native'; // Componentes react
import { useSelector, useDispatch } from 'react-redux'; // Entra no estado de armazenamento global (serve para que as duas paginas estajam sincronizadas)
import { increment, decrement, reset } from '../redux/counterSlice';
import { router } from 'expo-router'; // Navegação entre as paginas
import { styles } from './styles'; // Ligado ao css

// Function para acessar o contador
export default function ScreenA() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.containerA}>
      <Text style={styles.title}>Contador Global Screen A</Text>
      <Text style={styles.count}>Contador: {count}</Text>

      <TouchableOpacity style={styles.button} onPress={() => dispatch(increment())}>
        <Text style={styles.buttonText}>Aumentar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => dispatch(decrement())}>
        <Text style={styles.buttonText}>Diminuir</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => dispatch(reset())}>
        <Text style={styles.buttonText}>Resetar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/ScreenB')}>
        <Text style={styles.buttonText}>Screen B</Text>
      </TouchableOpacity>
    </View>
  );
}
