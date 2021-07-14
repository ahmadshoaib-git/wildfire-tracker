import React from 'react';
import LoaderGif from '../assets/gif/loader_Gif.gif';
const Loader = () => {
    return(
        <div className="loading">
            <img src={LoaderGif} alt="Loading" />
            <h2>Fetching Data</h2>
        </div>
    );
}

export default Loader;