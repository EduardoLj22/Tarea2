const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  readFromFile('./db/diagnostics.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for error logging
diagnostics.post('/', (req, res) => {
  const { isValid, errors } = req.body;

  if (!isValid) {
    const payload = {
      time: new Date(),
      errors,
      error_id: uuidv4(),
    };

    readAndAppend(payload, './db/diagnostics.json');
    res.json('Diagnostic information added');
  } else {
    res.json('No errors to log');
  }
});

module.exports = diagnostics;