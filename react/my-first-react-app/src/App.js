import './App.css';
import React from 'react';
import {useState} from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
import NewEventForm from './components/NewEventForm';


function App() {
const [showModal, setShowModal] = useState(false)
 const [showevents, setShowEvents] = useState(true)
 const [events, setEvents] = useState([])

 const addEvent = (event) => {

    setEvents((prevEvents) => {
      return[...prevEvents, event]
    })

    setShowModal(false)
 }

  const handleClick = (id) => {
    setEvents((prevEvents)=> {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    }) 
    //console.log(id)
  }
  
 

  const handleOpen = () => {
    setShowModal(true)
  }
  
  const subtitle = "All the latest events in Marioland"
  return (
    <div className="App">
      <Title title="Events in your Area" subtitle={subtitle}/> <br />
      
      {showevents && ( 
      <div>
        <button onClick={()=> setShowEvents(false)}>hide events</button>
      </div>)}
     {!showevents && ( 
     <div>
        <button onClick={()=> setShowEvents(true)}>show events</button>
      </div> )}
        {showevents && <EventList events={events} handleClick={handleClick}/>}
      
       {showModal && <Modal isSalesModal={true}>
        <NewEventForm addEvent={addEvent} /> 
        
      </Modal>} <br /> <br /> <br />
      <button onClick={handleOpen}>Add new Event</button>
    </div>
  );
}

export default App;
