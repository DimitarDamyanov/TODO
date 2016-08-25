/**
 * Created by D on 4.8.2016 г..
 */
var express = require('express');

var NoteRoutes = function (Note) {
    var router = express.Router();

    router.get('/', function (req, res) {
        Note.find({}, function (err, notes) {
            if(err){
                //log the error just for now
                res.status(500) ;
                res.json(err);

            } else {
                res.json(notes);
            }
        })
    }).get('/:id', function (req, res) {
        Note.findOne({_id: req.params.id}, function (err, note) {
            if(err){
                //log the error just for now
                res.status(500);
                res.json(err);
            }
            res.json(note);
        })
    }).post('/', function (req, res) {
        console.log("Request");
        console.log(req.body);
        var note = new Note(req.body);
        note.save(function (err) {
            if(err){
                //call error handle func
            }
            Note.findOne({_id: note._id}, function (err, note) {
                console.log(note);
                //return the saved note
                res.json(note);
                res.status(200);
            });
        })
    }).put('/:id', function (req, res) {
        console.log(req.params.id);
        Note.update({_id: req.params.id},{task: req.body.task, status: req.body.status}, function (err, note) {
            if(err){
                //log the error just for now
                res.status(500);
                res.json(err);
            } else {
                res.json(note);
            }
        });
    }).delete('/:id', function (req, res) {
       Note.remove({_id : req.params.id}, function (err) {
           if(err){
               res.code(500);
               res.json(err);
           }
           res.status(200);
           res.send();
       });
    });

    return router;
};

module.exports = NoteRoutes;
