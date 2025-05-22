require('dotenv').config();

const { execSync } = require('child_process');

const apiUrl = process.env.API_URL;
if (!apiUrl) {
  console.error("Missing API_URL in .env");
  process.exit(1);
}

const fullUrl = `${apiUrl}/api-json`;
execSync(`npx openapi-generator-cli generate  -g typescript   -i ${fullUrl} -o ./api-client`, {
  stdio: 'inherit'
});