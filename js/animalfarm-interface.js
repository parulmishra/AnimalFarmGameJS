import {Farm , Tamagotchi} from './../js/animalfarm.js';

$(document).ready(function(){


  var image = "";
  $("img").click(function(){
    image = $(this).attr('src');
    console.log(image);
  });

  var allTamagotchis = {};

  $("#create").submit(function(){
    event.preventDefault();
    var name = $("#name").val();
    console.log("what is in the " + name);
    if(allTamagotchis.hasOwnProperty(name))
    {
      alert("Choose a different name");
      return;
    }
    var newTamagotchi = new Tamagotchi(name,image);
    allTamagotchis[name] = newTamagotchi;
    $("#pets").append('<div class = "row">');

        $("#pets").append('<div class="col-md-4">');
        $("#pets").append(newTamagotchi.name);
        $("#pets").append("<img src='" + newTamagotchi.image + "'/>");
        $("#pets").append('</div>');
        $("#pets").append('<div class="col-md-4">' +
        '<div id="'+name+'score">' + newTamagotchi.happiness + '</div>' +
            '<button type="submit" ' +  'id="feed'+ name + '" name="command" class="btn btn-primary btn-lg" value="' +name+'">Feed</button>'+
            '<button type="submit" ' + 'id="sleep'+ name + '" name="command" class="btn btn-primary btn-lg" value="' +name+'">Sleep</button>' +
            '<button type="submit" ' + 'id="play'+ name + '" name="command" class="btn btn-primary btn-lg" value="' +name+'">Play</button>' +
          '</div>' +
        '</div>');
        $("#feed"+name).click(function(){
         var value = this.value;
         var tamagotchi = allTamagotchis[value];
         tamagotchi.feed();
         $("#" + name + "score").html(newTamagotchi.happiness);
        });
        $("#sleep"+name).click(function(){
          var value = this.value;
         var tamagotchi = allTamagotchis[value];
         tamagotchi.sleep();
         $("#" + name + "score").html(newTamagotchi.happiness);
         });
         $("#play"+name).click(function(){
          var value = this.value;
          var tamagotchi = allTamagotchis[value];
          tamagotchi.play();
          $("#" + name + "score").html(newTamagotchi.happiness);
         });
         newTamagotchi.setFeed();
         newTamagotchi.setPlay();
         newTamagotchi.setSleep();
         var inter = setInterval(() => {
           if(newTamagotchi.happiness > 0)
           $("#" + name + "score").html(newTamagotchi.happiness);
           if(newTamagotchi.isDead == true)
           {
            $("#" + name + "score").html("Dead");
            $("#play" +name).prop("disabled",true);
            $("#sleep" +name).prop("disabled",true);
            $("#feed" +name).prop("disabled",true);
            clearInterval(inter);
           }
         },1000);
  });
});
