const fs = require('fs');
const dotenv = require('dotenv');
const env = dotenv.config().parsed;

const targetPath = './src/environments/environment.ts';


const content = `
// ⚠️ This file is auto-generated from .env — DO NOT EDIT MANUALLY
export const environment = {
  production: false,
  apiUrl: '${env.API_URL}',
  googleClientId: '${env.GOOGLE_CLIENT_ID}',
};
`;

fs.writeFileSync(targetPath, content, 'utf8');
console.log(`✅ Generated: ${targetPath}`);
