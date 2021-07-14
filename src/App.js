import {useState, useEffect} from 'react';
import Map from "./components/map";
import Header from './components/header'
import Loader from './components/loader';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    const fetchEvents = async () => {
      setLoading(true);
      const NASA_API = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events';
      const res = await fetch(NASA_API);
      const {events} = await res.json();

      setEventData(events);
      setLoading(false);
    }
    fetchEvents();
    console.log("events >",eventData);
  },[]);
  return (
    <div className="App">
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
