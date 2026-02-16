import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 9000;
export const GITHUB_TOKEN = process.env.GITHUB_TOKEN;