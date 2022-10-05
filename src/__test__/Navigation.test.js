import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Navigation from '../components/Navigation';

describe('Navigation Test', () => {
  const initialState = { albumName: 'ABC', counts: 230 };
  const mockStore = configureStore();
  let store;

  const MockNav = () => {
    store = mockStore(initialState);
      <Provider store={store}>
        <Navigation />
      </Provider>;
  };

  test('renders navigation correctly', () => {
    expect(MockNav).toMatchSnapshot();
  });
});
