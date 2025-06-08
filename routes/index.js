const express = require('express');
const router = express.Router();

const messages = [
  { text: 'Hello World!', user: 'Alice', added: new Date() },
  { text: 'Hi,there!', user: 'Bob', added: new Date() }
];

router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Message Board', messages });
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'Add New Message' });
});

router.post('/new', (req, res) => {
  const { user, message } = req.body;
  messages.push({ text: message, user: user, added: new Date() });
  res.redirect('/');
});

module.exports = router;
