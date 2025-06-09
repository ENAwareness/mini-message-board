const express = require('express');
const router = express.Router();

const messages = [
  { id: 0, text: 'Hello World!', user: 'Alice', added: new Date() },
  { id: 1, text: 'Hi,there!', user: 'Bob', added: new Date() }
];

router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Message Board', messages });
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'Add New Message' });
});

router.post('/new', (req, res) => {
  const { user, message } = req.body;
  messages.push({ id: messages.length, text: message, user: user, added: new Date() });
  res.redirect('/');
});

router.get('/message/:id', (req, res) => {
  const message = messages.find((m) => m.id === parseInt(req.params.id));
  if (!message) {
    return res.status(404).send('Message not found');
  }
  res.render('message', { title: 'Message Detail', message });
});

module.exports = router;
