import {React, useState, useEffect} from 'react';
import EventService from '../API/EventService';
import EventCard from '../components/EventCard';

function Event() {
    const [events, setEvent] = useState([]);

    function addNewEvent(id, title, description) {
        setEvent(events => [...events, {id: id, title: title, description: description}])
    }




    async function fetchEvent() {
        const response = EventService.getAll();
        response.then(data => {
            data.rows.map(eventss => {
                addNewEvent(eventss.id, eventss.title, eventss.description)
            })
        })
    }
    
    useEffect(() => {
        fetchEvent();

    }, [])


    return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
        {events.map((event) => (
            <EventCard event={event} key={event.id} />
        ))}
    </div>
  );
}

export default Event;
