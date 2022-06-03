import fs from 'fs';
import fetch from 'node-fetch';

const citys = JSON.parse(fs.readFileSync('./citys.json', 'utf8'));

for (const city in citys) {
    // info@distance24.org
    fetch(`https://www.distance24.org/route.json?stops=${city}|Berlin`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => console.log(res));
        /*res.json()).then(json => {
        console.log(city, json.distance);
    }).catch(err => {
        console.log(err);
    });*/
}