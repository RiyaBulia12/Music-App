const apiKey = '?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm';
const baseUrl = 'https://api.napster.com/v2.0/playlists';

const getPlaylists = async () => {
  const data = await fetch(`${baseUrl}${apiKey}`);
  return data.json();
};

const getPlaylistSongs = async (id) => {
  const data = await fetch(`${baseUrl}${id}/tracks${apiKey}`);
  return data.json();
};

export { getPlaylists, getPlaylistSongs };
