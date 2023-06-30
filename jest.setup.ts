import dotenv from 'dotenv';
dotenv.config({ path: '.env.test' });

jest.mock('./src/helpers/getVariables', () => ({
    getVariables: () => ({ ...process.env })
}));