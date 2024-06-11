import clientPromise from '../../../utils/mongodb';
import { generateToken } from '../../../utils/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const client = await clientPromise;
  const db = client.db();
  const usersCollection = db.collection('users');

  const existingUser = await usersCollection.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ error: 'User already exists' });
  }

  const newUser = { email, password };
  await usersCollection.insertOne(newUser);

  const token = generateToken(newUser);
  res.status(201).json({ token });
}
