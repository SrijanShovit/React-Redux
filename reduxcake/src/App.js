
import './App.css';
import CakeContainer from './Components/CakeContainer';
import {Provider} from 'react-redux'
import store from './redux/Cakes/Store'

function App() {
  return (
    //passing prop to make Provider aware of store
    <Provider store={store}>
    <div className="App">
      <CakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
