# Cheerio Web Scraping

### About

This simple app gives a basic introduction into how to scrape web pages for specific pieces of information.

Because web scraping can be an invasive process, it's not encouraged, and from what i understand, the legality is questionable, so proceed with caution!  Only use a URL that you have been given permission to scrape.

### Use

Here's the block of code used to achieve this process.  After being run, the scraped data is outputted into a comma-separated-values "CSV" file for further review and processing.

```
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

// Write Headers
writeStream.write(`Title,Link,Date \n`);

request('https://samplewebsite_blahblah.com/', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    $('.content').each((i, el) => {
      const title = $(el)
        .find('.title')
        .text()
        .replace(/\s\s+/g, '');
      const link = $(el)
        .find('a')
        .attr('href');
      const date = $(el)
        .find('.excerpt')
        .text()
        .replace(/,/, '');

      // Write Row To CSV
      writeStream.write(`${title}, ${link}, ${date} \n`);
    });

    console.log('Scraping Done...');
  }
});

```

### Built With:

* Cheerio
* Request
* JavaScript


### Acknowledgement

Thanks to Traversy Media for this awesome tutorial.