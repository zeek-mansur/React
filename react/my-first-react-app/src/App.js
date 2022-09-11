import './App.css';
import React from 'react';
import {useState} from 'react'
import Title from './components/Title'


function App() {
 const [showevents, setShowEvents] = useState(true)
 const [events, setEvents] = useState([
  {title: "mario's birthday bash", id: 1},
  {title: "browser's live stream", id: 2},
  {title: "race on moo moo farm", id: 3}
 ])
 console.log(showevents)
  const handleClick = (id) => {
    setEvents((prevEvents)=> {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  const subtitle = "All the latest events in Marioland"
  return (
    <div className="App">
      <Title title="Events in your Area" subtitle={subtitle}/> <br />
      <Title title = "another title" subtitle="another subtitle" />
      {showevents && ( 
      <div>
        <button onClick={()=> setShowEvents(false)}>hide events</button>
      </div>)}
     {!showevents && ( 
     <div>
        <button onClick={()=> setShowEvents(true)}>show events</button>
      </div> )}
        {showevents && events.map((event, index)=> (
            <React.Fragment key = {event.id}>
              <h2>{index} - {event.title}</h2>
              <button onClick = {()=> handleClick(event.id)}>delete event</button>
            </React.Fragment>
        ))}
    </div>
  );
}

export default App;
