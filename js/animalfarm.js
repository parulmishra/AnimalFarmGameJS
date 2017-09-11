export class Farm
{
  constructor(username)
  {
    this.username = username;
  }
}
export class Tamagotchi extends Farm
{
  constructor(name,image)
  {
    super();
    this.name = name;
    this.image = image;
    this.foodLevel = foodLevel;
    this.playLevel = playLevel;
    this.sleepLevel = sleepLevel;
    this.happiness = happiness;
    this.isDead = false;
  }
  allTamagotchis : function(this.name,this.image)
  {
    var allPets = {};
    var newTamagotchi = new Tamagotchi(this.name, this.image);
    allPets.push["this.name"] = this.image;
    return allPets;
  }
  setParameters : function()
  {
    setInterval(() => {
      this.foodLevel--;
      this.playLevel--;
      this.sleepLevel--;
      this.happiness--;
    },1000);
  }

  feed : function()
  {
    if(isDead == true)
    {
      return
    }
    this.foodLevel = this.foodLevel + 10;
    this.happiness++;
  }

  sleep : function()
  {
    if(isDead == true)
    {
      return
    }
    this.sleepLevel = this.sleepLevel + 10;
    this.happiness++;
  }

  play : function()
  {
    if(isDead == true)
    {
      return
    }
    this.playLevel = this.playLevel + 10;
    this.happiness++;
  }
  happiness : function()
  {
    if(this.foodLevel == 0 || this.playLevel == 0 || this.sleepLevel == 0)
    {
      this.happiness = 0;
      this.isDead = true;
    }
  }
}
