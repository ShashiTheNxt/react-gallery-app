import React from 'react';

const Gallery = ({ data }) => {
  return (
    <div className="row">
      {data.map((image) => (
        <div key={image.id} className='col-md-4' style={{ display: 'inline-block' }}>
          <img
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
            height="200"
            width="200"
            alt={image.title}
            style={{ marginBottom: '20px', marginRight: '10px' }}
            className="rounded-image" 
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
