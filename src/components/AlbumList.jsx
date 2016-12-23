import React from 'react';

const AlbumList = (props) => {
  const albums = props.albums.map((album, i) => {
    console.log(album);
    return (
      <li key={i}>
        <img
          src={album.images[1].url}
          alt={album.name}
        />
      </li>
    );
  });

  return (
    <ul>
      {albums}
    </ul>
  );
};

AlbumList.propTypes = {
  albums: React.PropTypes.array.isRequired,
};

export default AlbumList;
