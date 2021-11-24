
import './App.css';
import HooksCakeContainer from './Components/HooksCakeContainer';
import {Provider} from 'react-redux'
import store from './redux/Store'
import CakeContainer from './Components/CakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';
import UserContainer from './Components/UserContainer';

function App() {
  return (
    //passing prop to make Provider aware of store
    <Provider store={store}>
    <div className="App">
      <UserContainer/>
      {/* <ItemContainer cake/>
      <ItemContainer />
      <CakeContainer/>
      <HooksCakeContainer/>
      <IceCreamContainer/>
      <NewCakeContainer/> */}
    </div>
    </Provider>
  );
}

export default App;
