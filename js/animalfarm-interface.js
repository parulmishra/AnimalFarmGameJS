import {Farm , Tamagotchi} from './../js/animalfarm.js';

$(document).ready(function(){

  var name = $("#name").val();

  $("#images").click(function(){
    var image = $(this).attr('src');
  });
  var newTamagotchi = new Tamagotchi(name,image);
  var tamagotchis = newTamagotchi.allTamagotchis(name,image);

  $("#pets").append('<div class = "row">');
  for(var i = 0; i < tamagotchis.length; i++)
  {
    $("#pets").append('<div class="col-md-4">');
    $("#pets").append(tamagotchis["name"]);
    $("#pets").append(tamagotchis["image"]);
    $("#pets").append('</div>');
    $("#pets").append('<div class="col-md-4">' +
        '<button type="submit" name="command" class="btn btn-primary btn-lg" value="feed">Feed</button>'+
        '<button type="submit" name="command" class="btn btn-primary btn-lg" value="sleep">Sleep</button>' +
        '<button type="submit" name="command" class="btn btn-primary btn-lg" value="play">Play</button>' +
      '</div>' +
    '</div>');
  }
});
