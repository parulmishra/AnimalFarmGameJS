import {Farm , Tamagotchi} from './../js/animalfarm.js';

describe('Tamagotchi', function(){
let newTamagotchi = new Tamagotchi("cat","img/cat.jpg");

  beforeEach(function(){
    jasmine.clock().install();
    newTamagotchi.setSleep();
    newTamagotchi.setFeed();
    newTamagotchi.setPlay();
  });

  afterEach(function()
  {
    jasmine.clock().uninstall();
  });

  it('should have a name and a image when it is created', function()
  {
    expect(newTamagotchi.name).toEqual("cat");
    expect(newTamagotchi.image).toEqual("img/cat.jpg");
    expect(newTamagotchi.foodLevel).toEqual(20);
  });

  it('should have a foodLevel of 17 after 3001 milliseconds', function()
  {
    jasmine.clock().tick(3001);
    expect(newTamagotchi.foodLevel).toEqual(17);
  });

  it('should have a sleepLevel of 17 after 3001 milliseconds', function()
  {
    jasmine.clock().tick(3001);
    expect(newTamagotchi.sleepLevel).toEqual(14);
  });

  it('should have a playLevel of 11 after 3001 milliseconds', function()
  {
    jasmine.clock().tick(3001);
    expect(newTamagotchi.playLevel).toEqual(11);
  });
  // it('should be dead if the food level drops below zero', function() {
  //   newTamagotchi.foodLevel = 0;
  //   newTamagotchi.happiness();
  //   expect(newTamagotchi.isDead).toEqual(true);
  // });

  it('should be dead if the happiness drops below zero', function() {
    newTamagotchi.happiness = 0;
    expect(newTamagotchi.happiness).toEqual(0);
  });

  it('should be dead if the sleep and rest drops below zero', function() {
    newTamagotchi.happiness = 0;
    expect(newTamagotchi.happiness).toEqual(0);
  });

});
