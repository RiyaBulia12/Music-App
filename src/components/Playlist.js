import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playlistEffect } from '../redux/reducers/playlistReducers';

const Playlists = () => {
  const playlistObj = useSelector((state) => state.playlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playlistEffect);
  }, [dispatch]);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl lg:max-w-7xl lg:p-8">
          <div className="grid grid-cols-2 lg:gap-y-10 lg:gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {playlistObj.map((item) => {
              const imgUrl = `${item.name}/${item.id}`;
              return (
                <a href={imgUrl} className="text-right lg:text-left hover:opacity-75" key={item.id}>
                  <div className="w-full overflow-hidden lg:rounded-lg bg-gray-200">
                    <img
                      src={item.images[0].url}
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
    </>
  );
};

export default Playlists;
