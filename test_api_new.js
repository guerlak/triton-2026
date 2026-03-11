const fetch = require('node-fetch');

async function test() {
  const url = "https://api.raceresult.com/371805/52CHLQ2F75QS7P4MFBU2J3AZIVFHXUUU";
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0...',
      'Accept': 'application/json'
    }
  });
  const data = await res.json();
  console.log(JSON.stringify(data[0], null, 2));
}

test().catch(err => console.error(err));
