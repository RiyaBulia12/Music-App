import {
  render, screen, waitFor, act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import Playlist from '../components/Playlist';
import store from '../redux/configureStore';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([
    {
      id: 'pp.225974698',
      name: 'New Music Weekly',
      images: [
        {
          url: 'mockUrl1',
        },
      ],
      favoriteCount: 9064,
    },
    {
      id: 'pp.225974000',
      name: 'Trending Weekly',
      images: [
        {
          url: 'mockUrl2',
        },
      ],
      favoriteCount: 10078,
    },
  ]),
}));

describe('Playlist Test', () => {
  const MockPlaylist = () => {
    <Provider store={store}>
      <Playlist />
    </Provider>;
  };

  afterEach(() => {
    act(() => store.dispatch({
      type: 'FETCH_PLAYLIST',
      payload: [],
    }));
  });

  test('renders Playlist correctly', () => {
    expect(MockPlaylist).toMatchSnapshot();
  });

  test('should render the playlist page', async () => {
    render(MockPlaylist);
    await waitFor(() => {
      expect(screen.findAllByText('New Music Weekly')).toBeTruthy();
    });
  });
});
