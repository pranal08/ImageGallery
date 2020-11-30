import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:  'Client-ID Dq90Jp8spc9kN_Mu-aPS07iwvPrExPirvqcfSzvqxus'
    }
});