export class Tamagotchi
{
  constructor(name,image)
  {
    this.name = name;
    this.image = image;
    this.foodLevel = 10;
    this.playLevel = 10;
    this.sleepLevel = 10;
    this.happiness = 10;
    this.isDead = false;
  }
  allTamagotchis(name,image)
  {
    name = this.name;
    image = this.image;
    var allPets = {};
    var newTamagotchi = new Tamagotchi(name,image);
    allPets.push["name"] = image;
    return allPets;
  }
  setParameters()
  {
    const paramterInterval = setInterval(() => {
      this.foodLevel--;
      this.playLevel--;
      this.sleepLevel--;
      this.happiness--;
      if(this.isDead == true)
      {
        clearInterval(paramterInterval);
      }
    },1000);
  }

  feed()
  {
    if(isDead == true)
    {
      return ;
    }
    this.foodLevel = this.foodLevel + 10;
    this.happiness++;
  }

  sleep()
  {
    if(isDead == true)
    {
      return ;
    }
    this.sleepLevel = this.sleepLevel + 10;
    this.happiness++;
  }

  play()
  {
    if(isDead == true)
    {
      return ;
    }
    this.playLevel = this.playLevel + 10;
    this.happiness++;
  }
  happiness()
  {
    if(this.foodLevel <= 0 || this.playLevel <= 0 || this.sleepLevel <= 0)
    {
      this.happiness = 0;
      this.isDead = true;
    }
  }
}
