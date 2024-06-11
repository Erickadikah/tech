import clientPromise from '../../../utils/mongodb';
import { generateToken } from '../../../utils/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, password } = req.body;

  const client = await clientPromise;
  const db = client.db();
  const usersCollection = db.collection('users');

  const user = await usersCollection.findOne({ email, password });
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const token = generateToken(user);
  res.status(200).json({ token });
}

