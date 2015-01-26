module.exports = function(app) {
  var express = require('express');
  var publishersRouter = express.Router();

  publishersRouter.get('/', function(req, res) {
    res.send({
      "publishers": []
    });
  });

  publishersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  publishersRouter.get('/:id', function(req, res) {
    res.send({
      "publishers": {
        "id": req.params.id
      }
    });
  });

  publishersRouter.put('/:id', function(req, res) {
    res.send({
      "publishers": {
        "id": req.params.id
      }
    });
  });

  publishersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/publishers', publishersRouter);
};
