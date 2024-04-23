import React, { useState } from 'react';
import axios from 'axios';
import Gallery from './gallery'; // Assuming gallery is a component

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

const App = () => {
  const [search, setSearch] = useState(""); // declaring empty value
  const [data, setData] = useState([]); // array of values set value for setdata

  const changeHandler = e => {
    // on change event handler
    setSearch(e.target.value);
  }

  const submitHandler = e => {
    e.preventDefault(); // prevent any pending events
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        console.log(response.data.photos.photo);
        setData(response.data.photos.photo); // Assuming you want to set the fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    console.log(search);
  }

  return (
    <div>
      <center>
        <h2 className='heading'>Snapshots</h2>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={changeHandler} style={{ fontSize: '20px' }} /><br />
          <input className='text' type="submit" name='search' /> 
        </form>
        <br />
        {data.length >= 1 ? <Gallery data={data} /> : <h5 className='h5'>No Data Loaded</h5>}
        <h6>search for images</h6>
      </center>
    </div>
  )
}

export default App;
