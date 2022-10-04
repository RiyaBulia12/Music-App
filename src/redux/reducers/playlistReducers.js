import { FETCH_PLAYLISTS, FETCH_SINGLE_PLAYLIST } from '../actions/playlistActions';
import { getPlaylists, getPlaylistSongs } from '../api/playlistApi';

const initialState = [];

export const playlistReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYLISTS:
      return action.payload;
    case FETCH_SINGLE_PLAYLIST:
      // state.playlistSongs.push(...action.payload);
      // console.log('state-----------', state, 'reducer-----', action.payload);
      return action.payload;
    default:
      return state;
  }
};

// Side Effects
export const playlistEffect = async (dispatch, getState) => {
  const playlistState = getState().playlist;
  if (playlistState.length === 0) {
    const response = await getPlaylists();
    dispatch({ type: FETCH_PLAYLISTS, payload: response.playlists });
  }
};

export const getSinglePlaylist = (id) => async (dispatch, getState) => {
  //   console.log('playliststate------------', playlistState);
  const response = await getPlaylistSongs(id);
  //   console.log('response----------', response);
  dispatch({ type: FETCH_SINGLE_PLAYLIST, payload: response.tracks });
};
