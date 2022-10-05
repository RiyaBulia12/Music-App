import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const playlist = useSelector((state) => state.playlist.playlistState);

  return (
    <>
      <div className="flex items-center sticky top-0 p-4 bg-slate-700 text-white justify-between items-center lg:py-8 lg:px-24">
        <div className="flex items-center ">
          {playlist.length === 0
            ? (
              <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </Link>
            ) : null }

          <div className="flex items-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
            </svg>
            <h1 className="text-2xl">Musicana</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
