import axios from 'axios';

const API_URL = 'https://randomuser.me/api/';

const consumirAPI = async () => {
    const resp = await axios.get(API_URL);
    return resp.data.results[0];
};

export async function obtenerCandidato() {
    return await consumirAPI();
}
