import axios from "axios";

const KEY = 'AIzaSyCun0y0kWbaYsgoMhHjbBrn0eH-rof7jio'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }

})


