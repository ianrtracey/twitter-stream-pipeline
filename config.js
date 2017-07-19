const fs = require('fs');

export const getCreds = () => {
  fs.readFile('./.credentials.json', 'utf8', (err, data) => {
    const credentials = JSON.parse(data);
    return credentials;
  });
}
