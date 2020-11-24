// Reducer to listen for actions.
const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      };
    case 'SET_SPOTIFY':
      return {
        ...state,
        token: action.spotify
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      };
    case 'SET_CURR_PLAYLIST':
      return {
        ...state,
        currPlaylist: action.currPlaylist
      };
    case 'SET_SONG_STATUS':
      return {
        ...state,
        songStatus: action.isPlaying
      };
    case 'SET_CURR_SONG':
      return {
        ...state,
        currSong: action.songObj
      };
    default:
      return state;
  }
}

export default reducer;
