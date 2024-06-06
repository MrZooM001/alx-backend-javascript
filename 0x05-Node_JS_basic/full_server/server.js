import express from 'express';
import routes from './routes';

const app = express();
const port = 1245;

routes(app);

app.listen(port, () => {
  console.log(`more complex express server is listening on: http://localhost:${port}`);
});

export default app;
module.exports = app;
