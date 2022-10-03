import { FETCH_PLAYLISTS } from '../actions/playlistActions';
import { getPlaylists } from '../api/playlistApi';

const initialState = [];

export const playlistReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYLISTS:
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
