import { randomUUID } from 'crypto';

import pkg from 'pg';
const { Client } = pkg;

export const userController = async ({ user, email }: { user: string; email: string }) => {
    console.log('@@@@@');
    const ID = randomUUID();

    const client = new Client();
    console.log('ID', ID);
    await client.query(
        `INSERT INTO users (user, email, ID) VALUES ('${user}', '${email}', '${ID}')`,
        (err: any, res: any) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error adding user');
            } else {
                console.log('User added successfully!');
                console.log(res.rows);
                res.send('User added successfully!');
            }
        }
    );
};

export default userController;
