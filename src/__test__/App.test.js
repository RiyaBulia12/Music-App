import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/configureStore';

test('App Test', () => {
  const MockApp = () => {
    <Provider store={store}>
      <App />
    </Provider>;
  };
  expect(MockApp).toMatchSnapshot();
});
