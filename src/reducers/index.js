import { combineReducers } from 'redux'

// always stays the same, doesn't expecting any args
const songReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All Star', duration: '3:15'},
        {title: 'I Want it That Way', duration: '1:45'}
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

// keys for this object are keys that show up in state
export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})