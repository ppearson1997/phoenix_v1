import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class RegistrationFunc{

    getClient() {
        const url = `${API_URL}/api/client/`;
        return axios.get(url).then(response => response.data);
    }
    getClientsByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getClients(pk) {
        const url = `${API_URL}/api/client/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteClients(client){
        const url = `${API_URL}/api/client/${client.pk}`;
        return axios.delete(url);
    }
    createClients(client){
        console.log(client)
        const url = `${API_URL}/api/client/`;
        return axios.post(url,client);
    }
    updateClients(client){
        const url = `${API_URL}/api/client/${client.pk}`;
        return axios.put(url,client);
    }
}