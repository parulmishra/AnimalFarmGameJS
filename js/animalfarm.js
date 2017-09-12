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
  setSleep()
  {

      var sleepInterval = setInterval(() => {
      this.sleepLevel--;
      this.happiness--;
      this.checkHappiness();
      if(this.isDead == true)
      {
        clearInterval(sleepInterval);
      }
    },11000);
  }
  setFeed()
  {

      var feedInterval = setInterval(() => {
      this.foodLevel--;
      this.happiness--;
      this.checkHappiness();
      if(this.isDead == true)
      {
        clearInterval(feedInterval);
      }
    },3000);
  }
  setPlay()
  {
      var playInterval = setInterval(() => {
      this.playLevel--;
      this.happiness--;
      this.checkHappiness();
      if(this.isDead == true)
      {
        clearInterval(playInterval);
      }
    },9000);
  }
  feed()
  {
    this.checkHappiness();
    if(this.isDead == true)
    {
      return ;
    }
    this.foodLevel = this.foodLevel + 10;
    this.happiness++;
  }

  sleep()
  {
    this.checkHappiness();
    if(this.isDead == true)
    {
      return ;
    }
    this.sleepLevel = this.sleepLevel + 10;
    this.happiness++;
  }

  play()
  {
    this.checkHappiness();
    if(this.isDead == true)
    {
      return ;
    }
    this.playLevel = this.playLevel + 10;
    this.happiness++;
  }
  checkHappiness()
  {
    if(this.foodLevel <= 0 || this.playLevel <= 0 || this.sleepLevel <= 0)
    {
      this.happiness = 0;
      this.isDead = true;
    }
  }
}
