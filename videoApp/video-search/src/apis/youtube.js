import axios from 'axios';

const KEY = 'AIzaSyDE7g5j3P5SwKMb_OF89BYvDosurKk2gyo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});