// Write your code here
class Breakfast{
    constructor(food,drink) {
      this.food = food;
        this.drink = drink;
    }
}

const bfast = new  Breakfast ("eggs","juice") 



class Lunch{
  constructor (salad,soup,drink) {
   this.salad = salad;
   this.soup = soup;
   this.drink=drink
  }
}

const lunch = new  Lunch (
    "side salad",
    "broccoli cheddar soup",
    "iced tea"
  );

class Dinner{
  constructor (salad,soup,entree) {
      this.salad = salad;
      this.soup = soup;
      this.entree=entree;
}
}

const dinner = new  Dinner (
  "balsamic salad",
  "consomme",
  "filet mignon",
  "cheesecake"
);