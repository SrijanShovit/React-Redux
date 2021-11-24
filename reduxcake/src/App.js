
import './App.css';
import HooksCakeContainer from './Components/HooksCakeContainer';
import {Provider} from 'react-redux'
import store from './redux/Store'
import CakeContainer from './Components/CakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';

function App() {
  return (
    //passing prop to make Provider aware of store
    <Provider store={store}>
    <div className="App">
      <CakeContainer/>
      <HooksCakeContainer/>
      <IceCreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
