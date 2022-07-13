import { join, dirname } from 'path';
import { Low, JSONFile } from 'lowdb';
import { fileURLToPath } from 'url';
import { Todo } from 'containers/Home/store';
import { Member } from 'containers/Member/store';

type Data = {
  members: Member[];
  todos: Todo[];
};

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
const file = join(__dirname, 'db.json');
const adapter = new JSONFile<Data>(file);
const db = new Low(adapter);

db.data = db.data || {}

export default db;
