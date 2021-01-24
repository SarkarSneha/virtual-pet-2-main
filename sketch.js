var doggy
var dogIMG
var happyIMG
var foodS
var foodStock
var foodObj
var fedTime,lastFed
function preload()
{
	dogIMG=loadImage("Dog.png")
  happyIMG=loadImage("happy dog.png")
  milkIMG=loadImage("MILK - Copy.png")
  
}

function setup() {
  createCanvas(1000,400);
    
  database = firebase.database();

  milk=createSprite(460, 287, 10,10);
  milk.addImage(milkIMG)
  milk.scale=0.7


  doggy=createSprite(839, height/2, 10,10);
    doggy.addImage(dogIMG)
    doggy.scale=0.4

  
    foodStock = database.ref('FOOD');
    foodStock.on("value",readdata,showerr);

    feed=createButton("Feed Your Pet")
    feed.position(234,200)
    feed.mousePressed(feedDog)

    addFood=createButton("Buy Milk")
    addFood.position(350,200)
    addFood.mousePressed(addFoodS)

  

    
    foodObj=new Food()
    form= new Form()
    player=new Player()
}

function readdata(data){
  foodS = data.val();
  foodObj.updateFoodStock(foodS)
	}
	function showerr(){
		console.log("error")
	
	}

function draw() {
  background("yellow");
  drawSprites();
  foodObj.display()
  form.display()
  
fedTime=database.ref('lastFed')
fedTime.on("value",function(data){
  lastFed=data.val()
})
fill("magenta")
textSize(15)
if(lastFed>=12){
  text("LAST FED:"+lastFed%12+"PM",750,388)
}
else if(lastFed===0){

 text("LAST FED:12 AM",750,388)
  }
else{

  text("LAST FED:"+lastFed+"AM",750,388)
}


text(mouseX+" ," +mouseY, mouseX,mouseY)
fill("blue")
text("The milk bottles are being poured in the milkbowl",13,380)
}



//function to read food Stock
	

//function to update food stock and last fed time
function feedDog(){
doggy.addImage(happyIMG)
doggy.x=560

foodObj.updateFoodStock(foodObj.getFoodStock()-1)
database.ref('/').update({
  FOOD:foodObj.getFoodStock(),
  lastFed:hour()
})
}

//function to add food in stock
function addFoodS(){
  foodS++
  database.ref('/').update({
    FOOD:foodS
  })
}


