import { FETCH_PLAYLISTS, FETCH_SINGLE_PLAYLIST } from '../actions/playlistActions';
import { getPlaylists, getPlaylistSongs } from '../api/playlistApi';

const initialState = { playlistState: [], trackState: [] };

export const playlistReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYLISTS:
      return {
        ...state,
        playlistState: [...action.payload],
      };
    case FETCH_SINGLE_PLAYLIST:
      return {
        ...state,
        trackState: [...action.payload],
      };
    default:
      return state;
  }
};

// Side Effects
export const playlistEffect = async (dispatch) => {
  const response = await getPlaylists();
  dispatch({ type: FETCH_PLAYLISTS, payload: response.playlists });
};

export const getSinglePlaylist = (id) => async (dispatch) => {
  const response = await getPlaylistSongs(id);
  dispatch({ type: FETCH_SINGLE_PLAYLIST, payload: response.tracks });
};
