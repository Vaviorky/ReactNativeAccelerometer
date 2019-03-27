import {createStackNavigator, createAppContainer} from 'react-navigation';
import MainView from "./components/MainView";
import Model3D from "./components/Model3D";

const MainNavigator = createStackNavigator({
  MainView: {screen: MainView},
  Model3D: {screen: Model3D}
});

const App = createAppContainer(MainNavigator);

export default App;