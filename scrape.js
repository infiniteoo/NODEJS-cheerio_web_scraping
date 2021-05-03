const request = require('request');
const cheerio = require('cheerio');

request('http://codedemos.com/sampleblog', (error, response, html) => {

    if(!error && response.statusCode === 200) {
        const $ = cheerio.load(html);
        
    } 

})