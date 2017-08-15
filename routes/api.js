/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var mfp = require('mfp');

module.exports = function (app) {

  app.route('/api/threads/:board')
    .get(function(req, res){
      mfp.fetchSingleDate('rudolphho', '2016-04-11', 'all', function(data){
        console.log(data);
        res.json(data);
      });
    })
    .post(function(req, res){

    })
    .put(function(req, res){

    })
    .delete(function(req, res){

    });

  app.route('/api/replies/:board')
    .get(function(req, res){

    })
    .post(function(req, res){

    })
    .put(function(req, res){

    })
    .delete(function(req, res){

    });

};
