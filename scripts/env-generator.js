const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
const targetPath = './src/environments/environment.ts';


const content = `
// ⚠️ This file is auto-generated from .env — DO NOT EDIT MANUALLY
export const environment = {
  production: true,
  apiUrl: '${process.env.API_URL}',
  googleClientId: '${process.env.GOOGLE_CLIENT_ID}',
};
`;

fs.writeFileSync(targetPath, content, 'utf8');
console.log(`✅ Generated: ${targetPath}: ${content}`);
