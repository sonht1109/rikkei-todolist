import { useEffect } from 'react';
import db from './db';

export default function GlobalSetup() {
  useEffect(() => {
    db.data?.members.push({age: 18, name: "String"})
  }, []);

  return null;
}
