import del from 'del';
import task from './lib/task';

export default task(async function remove() {
  // first delete all files in lib/ folder
  await del(['lib/*', '!lib/index.js'], { dot: true });
});
