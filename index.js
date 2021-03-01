import axios from "axios";
import url from "url";
import prompt from "prompt";


prompt.start();


prompt.get(['username', 'email'], function (err, result) {
    if (err) {
        return onErr(err);
    }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Email: ' + result.email);
});


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

const params = new url.URLSearchParams({email: 'bar'});
valour.get("User/RequestStandardToken")