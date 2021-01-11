import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
    Authorization:'Bearer ULv2PooCuAwjf6oLYb9tDQVT1RDn4UrgBUNydd9duFxKlleO4G-l3s0YayaK_yTTnqv1y1V-vAHyfBboTS-CrBzftujgpIgSYJHrBivJOnq0ekBXTvgwHkRe6vwaX3Yx'
    }
});