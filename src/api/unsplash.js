import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID j4HrFGzFmzYFusA5eD9eKcLvx7FfjqsdnJrZ88zU-Dc'
    }

});