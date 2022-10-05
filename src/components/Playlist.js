import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { playlistEffect } from '../redux/reducers/playlistReducers';

const Playlists = ({ playlist }) => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(playlistEffect);
  }, [dispatch]);

  const filteredPlaylist = playlist.filter((item) => {
    const itemArr = item.name.toLowerCase().includes(filter.toLowerCase());
    return itemArr;
  });

  return (
    <>
      <div className="absolute right-[2%]  lg:right-[14%] top-4 lg:top-7 text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 hidden lg:flex">
          <button type="submit" className="p-1 focus:outline-none focus:shadow-outline ">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </span>
        <input
          type="search"
          name="search"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          className="py-2 text-sm text-white bg-gray-900 rounded-md pl-2 focus:outline-none focus:bg-white focus:text-gray-900 lg:pl-10"
          placeholder="Search Playlist"
          autoComplete="off"
        />
      </div>
      {filteredPlaylist.length > 0
        ? (
          <div className="bg-white">
            <div className="mx-auto max-w-2xl lg:max-w-7xl lg:p-8">
              <div className="grid grid-cols-2 lg:gap-y-10 lg:gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {filteredPlaylist.map((item) => {
                  const imgUrl = `${item.name}/${item.id}`;
                  return (
                    <a href={imgUrl} className="text-right lg:text-left hover:opacity-75" key={item.id}>
                      <div className="w-full overflow-hidden lg:rounded-lg bg-gray-200">
                        <img
                          src={item?.images[0]?.url}
                          alt="Add"
                          className="h-48 w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <h3 className="mt-2 px-3 text-sm text-gray-700">{item.name}</h3>
                      <p className="my-2 px-3 text-lg font-medium text-gray-900">{item.favoriteCount}</p>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )
        : null}
      {filter === '' && (
      <p className="text-center text-2xl font-bold text-slate-800 mt-[10%]">
        Please wait...
      </p>
      )}

      {filter !== '' && filteredPlaylist.length === 0 && (
      <p className="text-center text-2xl font-bold text-slate-800 mt-[10%]">
        No Result found for &apos;
        {filter}
        &apos;
      </p>
      )}
    </>
  );
};

Playlists.propTypes = {
  playlist: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Playlists;
