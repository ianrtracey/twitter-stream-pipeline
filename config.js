const fs = require('fs');

export const getCreds = (callback) => {
  const data = fs.readFileSync('./.credentials.json', 'utf8')
  const credentials = JSON.parse(data);
  return credentials;
}
