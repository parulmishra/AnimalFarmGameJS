import {Farm , Tamagotchi} from './../js/animalfarm.js';

describe('Tamagotchi', function(){
let newTamagotchi = new Tamagotchi("cat","img/cat.jpg");

  beforeEach(function(){
    jasmine.clock().install();
    newTamagotchi.setParameters();
  });

  afterEach(function()
  {
    jasmine.clock().uninstall();
  });

  it('should have a name and a image when it is created', function()
  {
    expect(newTamagotchi.name).toEqual("cat");
    expect(newTamagotchi.image).toEqual("img/cat.jpg");
    expect(newTamagotchi.foodLevel).toEqual(10);
  });

  it('should have a foodLevel of 7 after 3001 milliseconds', function()
  {
    jasmine.clock().tick(3001);
    expect(newTamagotchi.foodLevel).toEqual(7);
    expect(newTamagotchi.playLevel).toEqual(7);
    expect(newTamagotchi.sleepLevel).toEqual(7);
    expect(newTamagotchi.happiness).toEqual(7);
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
