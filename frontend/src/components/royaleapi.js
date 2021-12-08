import axios from 'axios';

// Url API
const API_URL1 = "https://api.clashroyale.com/v1/clans";
const API_URL2 = "https://api.clashroyale.com/v1/players/%23C9Q0QCPL";
const API_URL3 = "https://api.clashroyale.com/v1/players/%23C9Q0QCPL/upcomingchests";
const API_URL4 = "https://api.clashroyale.com/v1/cards";
const API_URL5 = "https://api.clashroyale.com/v1/globaltournaments";
const config = {
    headers: { "authorization":  "Bearer : eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjhlNDY4OWQ1LTU4ODEtNDhiZS1iZDNkLTk1NTE2NTUzZTY5YyIsImlhdCI6MTYzODkxMjQ0OCwic3ViIjoiZGV2ZWxvcGVyL2QxNmIzOTYzLTQ0ZTktNzUwZi1iZTc5LTkzYTNhNmVjMDYxMiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI4My4xMTQuMTEuMTA4Il0sInR5cGUiOiJjbGllbnQifV19.SP0mhkDFFdFZhb9PbAzaMtO7y-Hz5oTt9-ciTlJXvW6EBArNtch8fgu-uGIi1r0-dZqnbF9xdpkgVpsCj5g3rg" },
    crossdomain: true
};
//https://api.clashroyale.com/v1/clans
//https://api.clashroyale.com/v1/players/%23C9Q0QCPL
//https://api.clashroyale.com/v1/players/%23C9Q0QCPL/upcomingchests
export default class Royaleapi {
    fetchClansByName(clanName) {
        const URL = `${API_URL1}?name=${clanName}`;
        return axios
            .get(URL, config)
    }
    fetchPlayerByTag(playerTag) {
        const URL = `${API_URL2}`;
        return axios
            .get(URL, config)
    }
    fetchUpcomingChests(playerTag) {
        const URL = `${API_URL3}`;
        return axios
            .get(URL, config)
    }
    fetchCard() {
        const URL = `${API_URL4}`;
        return axios
            .get(URL, config)
    }
    fetchTournament() {
        const URL = `${API_URL5}`;
        return axios
            .get(URL, config)
    }

}