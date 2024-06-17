import React, {useState, useEffect} from "react";

function EventCard(event) {
    const [description, setDescription] = useState(event.event.description);

    const length = 187
	useEffect(() => {
		if (description.length > length) {
			const newDescription = description.slice(0, length - 4) + '...';
			setDescription(newDescription);
		}
	}, []);

    return (
        <div key={event.id} style={styles.card}>
                <div style={{display:'initial'}}>
                    <div style={{}}>
                        {/*Container with title and description*/}
                        <div>
                            <p style={{margin: '0px', fontSize: '2.0em', fontFamily: '"Montserrat" sans-serif', fontOpticalSizing: 'auto', }}>{event.event.title}</p>
                            <p style={{fontSize: '1em', margin: '0px'}}>{description}</p>
                        </div>

                        {/* Container with buttons */}
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <button
                                style={{ ...styles.btn,  backgroundColor: '#D2ECF9', color: '#253B6E'}}
                            >
                                Register
                            </button>
                            <button
                                style={{ ...styles.btn, backgroundColor: '#D2ECF9', color: '#253B6E'}}
                            >
                                View
                            </button>
                        </div>
                        
                    {/* <h1 style={{opacity: '0%'}}>{event.event.id}</h1> */}
                    </div>
                </div>
                
            </div>
    )
}


const styles = {
    card: {
      width: '280px',
      height: '130px',
      backgroundColor: '#D2ECF9',
      border: '1px solid #ddd',
      borderRadius: '4px',
      margin: '10px',
      padding: '15px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    btn: {
      alignItems: 'bottom',
      fontSize: '1em',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '4px',
    },
};

export default EventCard;