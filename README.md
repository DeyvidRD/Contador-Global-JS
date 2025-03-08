# Contador utilizando React Native e Redux 🖥️

Este projeto é um exemplo simples de um aplicativo React Native que utiliza Redux para gerenciar o estado global de um contador. O aplicativo possui duas telas (ScreenA e ScreenB), onde o valor do contador é compartilhado e atualizado globalmente. Além disso, o projeto utiliza Expo Router para a navegação entre as telas.

## Funcionalidades

1. Contador Global 🌐:
   
      Valor do contador é armazenado no estado global do Redux.

      Contador pode ser incrementado, decrementado e resetado.

      O valor do contador é atualizado em tempo real em ambas as telas.

3. Navegação entre Telas 📲:
   
      O aplicativo possui duas telas: ScreenA e ScreenB.

      É possível navegar entre as telas usando o Expo Router.

5. Botões de Ação 🔘: 
   
      Incrementar: Aumenta o valor do contador em 1.

      Decrementar: Diminui o valor do contador em 1.

      Resetar: Reseta o valor do contador para 0.

      Navegar para Screen B: Redireciona para a tela ScreenB.


## Como Executar o Projeto  

1. Clone o repositório:
      ```bash
      git clone <URL_DO_REPOSITORIO>
      cd ContadorApp
      ```

2. Instale as dependências:
      ```bash
      npm install
      ```
3. Execute o projeto:
      ```bash
      npx expo start
      ```

- Use o Expo Go no seu dispositivo físico ou emulador para abrir o aplicativo.



## Conclusão 🏁

Este projeto demonstra como usar Redux para gerenciar o estado global em um aplicativo React Native, juntamente com Expo Router para navegação entre telas. É um exemplo simples, mas eficaz, para entender os conceitos básicos de gerenciamento de estado e navegação em React Native.

Para mais informações, consulte a documentação oficial do [React-Native](https://reactnative.dev), [Redux](https://redux.js.org/introduction/getting-started), e  [Expo Router](https://docs.expo.dev/router/introduction/).
