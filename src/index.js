const express = require('express');
const app = express();
app.get('/', (req, res) => res.json({ msg: "hello from demo" }));
app.get('/health', (req,res) => res.status(200).send('OK'));
const port = process.env.PORT || 3050;
if (require.main === module) app.listen(port, () => console.log('listening', port));
module.exports = app;
