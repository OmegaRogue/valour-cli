import axios from "axios";

const valour = axios.create({
    baseURL: 'https://valour.gg/',
    timeout: 1000,
    headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:86.0) Gecko/20100101 Firefox/86.0',
        'Accept': '*/*',
        'Accept-Language': 'en-GB,en;q=0.5',
        'Connection': 'keep-alive'
    }
});