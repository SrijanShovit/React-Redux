
import './App.css';
import HooksCakeContainer from './Components/HooksCakeContainer';
import {Provider} from 'react-redux'
import store from './redux/Cakes/Store'

function App() {
  return (
    //passing prop to make Provider aware of store
    <Provider store={store}>
    <div className="App">
      <HooksCakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
