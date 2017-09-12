(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tamagotchi = exports.Tamagotchi = function () {
  function Tamagotchi(name, image) {
    _classCallCheck(this, Tamagotchi);

    this.name = name;
    this.image = image;
    this.foodLevel = 10;
    this.playLevel = 10;
    this.sleepLevel = 10;
    this.happiness = 10;
    this.isDead = false;
  }

  _createClass(Tamagotchi, [{
    key: "setSleep",
    value: function setSleep() {
      var _this = this;

      var sleepInterval = setInterval(function () {
        _this.sleepLevel--;
        _this.happiness--;
        _this.checkHappiness();
        if (_this.isDead == true) {
          clearInterval(sleepInterval);
        }
      }, 11000);
    }
  }, {
    key: "setFeed",
    value: function setFeed() {
      var _this2 = this;

      var feedInterval = setInterval(function () {
        _this2.foodLevel--;
        _this2.happiness--;
        _this2.checkHappiness();
        if (_this2.isDead == true) {
          clearInterval(feedInterval);
        }
      }, 3000);
    }
  }, {
    key: "setPlay",
    value: function setPlay() {
      var _this3 = this;

      var playInterval = setInterval(function () {
        _this3.playLevel--;
        _this3.happiness--;
        _this3.checkHappiness();
        if (_this3.isDead == true) {
          clearInterval(playInterval);
        }
      }, 9000);
    }
  }, {
    key: "feed",
    value: function feed() {
      this.checkHappiness();
      if (this.isDead == true) {
        return;
      }
      this.foodLevel = this.foodLevel + 10;
      this.happiness++;
    }
  }, {
    key: "sleep",
    value: function sleep() {
      this.checkHappiness();
      if (this.isDead == true) {
        return;
      }
      this.sleepLevel = this.sleepLevel + 10;
      this.happiness++;
    }
  }, {
    key: "play",
    value: function play() {
      this.checkHappiness();
      if (this.isDead == true) {
        return;
      }
      this.playLevel = this.playLevel + 10;
      this.happiness++;
    }
  }, {
    key: "checkHappiness",
    value: function checkHappiness() {
      if (this.foodLevel <= 0 || this.playLevel <= 0 || this.sleepLevel <= 0) {
        this.happiness = 0;
        this.isDead = true;
      }
    }
  }]);

  return Tamagotchi;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _animalfarm = require("./../js/animalfarm.js");

$(document).ready(function () {

  var image = "";
  $("img").click(function () {
    image = $(this).attr('src');
    console.log(image);
  });

  var allTamagotchis = {};

  $("#create").submit(function () {
    event.preventDefault();
    var name = $("#name").val();
    console.log("what is in the " + name);
    if (allTamagotchis.hasOwnProperty(name)) {
      alert("Choose a different name");
      return;
    }
    var newTamagotchi = new _animalfarm.Tamagotchi(name, image);
    allTamagotchis[name] = newTamagotchi;
    $("#pets").append('<div class = "row">');

    $("#pets").append('<div class="col-md-4">');
    $("#pets").append(newTamagotchi.name);
    $("#pets").append("<img src='" + newTamagotchi.image + "'/>");
    $("#pets").append('</div>');
    $("#pets").append('<div class="col-md-4">' + '<div id="' + name + 'score">' + newTamagotchi.happiness + '</div>' + '<button type="submit" ' + 'id="feed' + name + '" name="command" class="btn btn-primary btn-lg" value="' + name + '">Feed</button>' + '<button type="submit" ' + 'id="sleep' + name + '" name="command" class="btn btn-primary btn-lg" value="' + name + '">Sleep</button>' + '<button type="submit" ' + 'id="play' + name + '" name="command" class="btn btn-primary btn-lg" value="' + name + '">Play</button>' + '</div>' + '</div>');
    $("#feed" + name).click(function () {
      var value = this.value;
      var tamagotchi = allTamagotchis[value];
      tamagotchi.feed();
      $("#" + name + "score").html(newTamagotchi.happiness);
    });
    $("#sleep" + name).click(function () {
      var value = this.value;
      var tamagotchi = allTamagotchis[value];
      tamagotchi.sleep();
      $("#" + name + "score").html(newTamagotchi.happiness);
    });
    $("#play" + name).click(function () {
      var value = this.value;
      var tamagotchi = allTamagotchis[value];
      tamagotchi.play();
      $("#" + name + "score").html(newTamagotchi.happiness);
    });
    newTamagotchi.setFeed();
    newTamagotchi.setPlay();
    newTamagotchi.setSleep();
    var inter = setInterval(function () {
      if (newTamagotchi.happiness > 0) $("#" + name + "score").html(newTamagotchi.happiness);
      if (newTamagotchi.isDead == true) {
        $("#" + name + "score").html("Dead");
        $("#play" + name).prop("disabled", true);
        $("#sleep" + name).prop("disabled", true);
        $("#feed" + name).prop("disabled", true);
        clearInterval(inter);
      }
    }, 1000);
  });
});

},{"./../js/animalfarm.js":1}]},{},[2]);
