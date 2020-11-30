import React from 'react';
import { useProviderValue } from '../ContextState/Provider';
import he from 'he';
import SongList from '../SongList/SongList';

import './PlaylistView.css';

function PlaylistView () {
  const [{
    currPlaylist
  }, dispatch] = useProviderValue();

  return (
    <div>
      <div className="playlist-info p10">
        <img src={currPlaylist?.images[0]?.url} alt='' />
        <div className="playlist-text">
          <h1>{currPlaylist?.name}</h1>
          <p>{he.decode(currPlaylist?.description)}</p>
        </div>
      </div>
      <SongList currPlaylist={currPlaylist} />
    </div>
  );
}

export default PlaylistView;