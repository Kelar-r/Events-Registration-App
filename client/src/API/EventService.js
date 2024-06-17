import axios from 'axios';

export default class EventService {
    static async getAll() {
        try {
            console.log(`${process.env.REACT_APP_API_URL}/event/getALL`)
            const response = await axios.get(`${process.env.REACT_APP_API_URL}event/getALL`)
            return response.data
        }
        catch (e) {
            console.log(e)
        }
    }
}


            // const response = new Promise( await axios.get('http://192.168.0.4:5000/api/event/getALL'))
