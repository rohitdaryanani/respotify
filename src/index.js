import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import AlbumList from './components/AlbumList';
import * as musicApi from './api/musicApi';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      albums: [],
    });
    this.getAlbums = this.getAlbums.bind(this);
    this.processAlbums = this.processAlbums.bind(this);
  }

  getAlbums(artists) {
    musicApi.getAlbums(artists, this.processAlbums);
  }

  processAlbums(payload) {
    console.log(payload);
    this.setState({
      albums: payload.albums.items,
    });
  }
  render() {
    return (
      <div>
        <SearchBar getAlbums={this.getAlbums} />
        <AlbumList albums={this.state.albums} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
