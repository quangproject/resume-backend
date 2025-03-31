const requiredEnvVars = [
  "BASIC_AUTH_USERNAME",
  "BASIC_AUTH_PASSWORD",
  "GATEWAY_URL",
  "CMS_API_KEY",
  "USER_ID"
];

for (const key of requiredEnvVars) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

export const ENV = {
  PORT: process.env.PORT! || "3000",
  BASIC_AUTH_USERNAME: process.env.BASIC_AUTH_USERNAME!,
  BASIC_AUTH_PASSWORD: process.env.BASIC_AUTH_PASSWORD!,
  GATEWAY_URL: process.env.GATEWAY_URL!,
  CMS_API_KEY: process.env.CMS_API_KEY!,
  USER_ID: process.env.USER_ID!
};
