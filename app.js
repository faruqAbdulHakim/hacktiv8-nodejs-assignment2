import express from 'express';
import router from './routers/index.js';

const app = express();
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log('Server berjalan di port 3000');
});
