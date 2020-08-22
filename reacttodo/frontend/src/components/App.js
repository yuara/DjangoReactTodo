import Dashboard from './todos/Dashboard';
import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store=(store)>
        <Dashboard />
      </Provider>
    );
  }
}
