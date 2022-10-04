const PlaylistSongs = () => (
  <>
    <div className="text-white lg:bg-white">
      <div className="">
        <div className="grid-cols-2 lg:grid lg:grid-row-2 lg:gap-24 lg:m-24">
          <div className="relative w-full text-right font-black lg:text-left">
            <img
              src="http://direct.napster.com/imageserver/v2/playlists/pp.225974698/artists/images/230x153.jpg"
              alt="Add"
              className="h-48 w-full object-cover object-center group-hover:opacity-75 lg:h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 px-4 py-1">
              <h3 className="mt-1 px-2 text-xl uppercase">Trending Playlist</h3>
              <p className="my-1 px-2 text-sm">2631 likes</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <div className="px-4 py-1 text-sm font-medium uppercase bg-slate-500">
                    <p>Trending List breakdown - "year"</p>
                  </div>
                  <table className="min-w-full">
                    <tbody>
                      <tr className="bg-slate-700">
                        <td className="text-lg font-extra px-6 lg:px-12 py-4">
                          Mark
                        </td>
                        <td className="text-lg font-extra px-6 lg:px-12 py-4 text-right">
                          Otto
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>
);

export default PlaylistSongs;
