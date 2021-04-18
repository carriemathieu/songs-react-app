import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >Select</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="ui divided list">{this.renderList()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs }
    // this.props === { songs: state.songs }
}

// first set of parenth returns function, 2nd set (SongList) invokes func that was returned from 1st func
export default connect(mapStateToProps, {selectSong})(SongList)
// mapStateToProps, { selectSong: selectSong } // action creator