const glob = require('glob');
const ReadLine = require('readline');
const fs = require('fs');


const query = process.argv.slice(2, process.argv.length)
console.dir(query);
glob("*.log*", null, (err, files) => {
    const uniqueMessages = new Set();
    console.log('reading from ', files);
    for (const filename of files) {
        const lineReader = ReadLine.createInterface({
            input: fs.createReadStream(`./${filename}`)
        })
        lineReader.on('line', (line) => {
            const logData = JSON.parse(line);
            const tokens = logData.msg 
            if (!uniqueMessages.has(tokens)
                && matchesQuery(tokens, query)) {

                uniqueMessages.add(tokens)
                console.log(`${tokens}\n`);
            }
        })
    }
})

const matchesQuery = (msg, queryTerms) => {
    const tokens = msg.toLowerCase();
    return queryTerms.every((elem) => tokens.includes(elem))
}