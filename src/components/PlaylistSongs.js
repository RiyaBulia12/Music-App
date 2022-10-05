import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSinglePlaylist } from '../redux/reducers/playlistReducers';

const PlaylistSongs = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.playlist.trackState);

  const { playlistId, playlistName } = params;

  useEffect(() => {
    dispatch(getSinglePlaylist(playlistId));
  }, [playlistId, dispatch]);

  const imageUrl = `http://direct.rhapsody.com/imageserver/v2/albums/${tracks[0]?.albumId}/images/300x300.jpg`;
  return (
    <>
      {tracks.length === 0 && imageUrl !== '' ? (
        <p className="text-center text-2xl font-bold text-slate-800 mt-[10%]">
          Please wait...
        </p>
      )
        : (
          <div className="text-slate-800 lg:bg-white">
            <div className="">
              <div className="grid-cols-2 lg:grid lg:grid-row-2 lg:gap-48 lg:mx-48 lg:my-24">
                <div className="flex w-full text-center font-black">
                  <img
                    src={imageUrl}
                    alt="Add"
                    className="h-48 w-auto object-cover object-center group-hover:opacity-75 lg:w-full lg:h-fit"
                  />
                  <div className="block w-full px-4 py-1 self-center lg:hidden">
                    <h3 className="mt-1 px-2 text-xl uppercase">{playlistName}</h3>
                    <h4 className="my-1 px-2">{tracks[0]?.albumName}</h4>
                    <p className="my-1 px-2 text-sm">{tracks[0]?.artistName}</p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden text-white">
                        <div className="px-4 py-1 text-sm font-medium uppercase bg-slate-500">
                          <p>
                            {playlistName}
                            {' '}
                            Breakdown
                          </p>
                        </div>

                        <table className="min-w-full">
                          <tbody>
                            {tracks.map((track) => (
                              <tr className="bg-slate-700 even:bg-slate-600" key={track.id}>
                                <td className="text-lg font-extra lg:px-12 pl-4">
                                  {track.albumName}
                                </td>
                                <td className="text-lg font-extra pr-6 lg:px-12 py-4 text-right">
                                  {track.artistName}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default PlaylistSongs;
