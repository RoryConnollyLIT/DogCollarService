const app = require('./app');

const port = process.env.PORT || 3999;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port ${port}`);
});
