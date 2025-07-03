import './index.css'

import {Component} from 'react'
import {FaSearch} from 'react-icons/fa'
import {AiOutlineDelete} from 'react-icons/ai'

const {initialTracksList} = this.props
class EdSongsList extends Component {
  state = {searchValue: '', tracksList: initialTracksList}

  onChangesearchInput = event => {
    this.setState({
      searchValue: event.target.value,
    })
  }

  onClickDeleteButton = trackId => {
    this.setState(prevState => ({
      tracksList: prevState.tracksList.filter(
        eachItem => eachItem.id !== trackId,
      ),
    }))
  }

  renderMusicPlaylist = () => {
    const {searchValue, tracksList} = this.state
    const searchedValue = tracksList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchValue.toLowerCase()),
    )

    return (
      <>
        {searchedValue.length === 0 ? (
          <div className="not-found-container">
            <p className="not-found-heading">No Songs Found</p>
          </div>
        ) : (
          <>
            <ul className="initialTracksListContainer">
              {searchedValue.map(eachTrack => (
                <li className="eachTrackItem" key={eachTrack.id}>
                  <div className="eachrowContiainer">
                    <div className="firstSection">
                      <img
                        src={eachTrack.imageUrl}
                        alt="track"
                        className="trackImage"
                      />
                      <div className="eachTrackDetailsContainer">
                        <p className="name">{eachTrack.name}</p>
                        <p className="genre">{eachTrack.genre}</p>
                      </div>
                    </div>

                    <div className="eachTrackDetailsRowContainer">
                      <p className="duration">{eachTrack.duration}</p>
                      <button
                        type="button"
                        className="deleteButton"
                        data-testid="delete"
                        onClick={() => this.onClickDeleteButton(eachTrack.id)}
                      >
                        <AiOutlineDelete size={28} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    )
  }

  renderSearchContainer = () => {
    const {searchValue} = this.state
    return (
      <div className="searchContainer">
        <h1 className="profession">Songs Playlist</h1>
        <div className="searchboxContainer">
          <input
            type="search"
            className="usersearchInput"
            placeholder="Search"
            value={searchValue}
            onChange={this.onChangesearchInput}
          />
          <FaSearch className="searchIcon" />
        </div>
      </div>
    )
  }

  render() {
    return (
      <>
        <div className="bannerContainer">
          <h1 className="singerName">Ed Sheeran</h1>
          <p className="profession">Singer</p>
        </div>
        <div className="bodyContainer">
          {this.renderSearchContainer()}
          {this.renderMusicPlaylist()}
        </div>
      </>
    )
  }
}

export default EdSongsList
