import { FETCH_PLAYLISTS, FETCH_SINGLE_PLAYLIST } from '../actions/playlistActions';
import { getPlaylists } from '../api/playlistApi';

const initialState = [];

export const playlistReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYLISTS:
      return action.payload;
    case FETCH_SINGLE_PLAYLIST:
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

export const singlePlaylistEffect = async (dispatch, getState) => {
  const playlistState = getState().playlist;
  if (playlistState.length === 0) {
    const response = await get();
    dispatch({ type: FETCH_PLAYLISTS, payload: response.playlists });
  }
};
