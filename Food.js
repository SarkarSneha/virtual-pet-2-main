class Food{
    constructor(){
      this.image=loadImage("Milk.png")
      this.foodStock=0
      this.lastFed

    }
    getFoodStock(){
      //  var foodStock=database.ref('foodS')
      return this.foodStock

    }
    updateFoodStock(foodStock){
        this.foodStock=foodStock
    }

    deductFoodStock(){
    if(this.foodStock>0){
        this.foodStock=this.foodStock-1
    }
    }
    display(){
        imageMode(CENTER)
      //  image(this.image,720,220,70,70)
        var x=80
        var y=200
        if(this.foodStock!==0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10===0){
                    x=80
                    y=y+50
                }
                image(this.image,x,y,70,70)
                x=x+30
                            }
            

        }
    }

   
}