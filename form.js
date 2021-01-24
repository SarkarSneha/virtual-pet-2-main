class Form {
    constructor(){
        this.title=createElement('h2')
      this.input = createInput("name your pet")
      this.button = createButton("save name")
      this.greeting = createElement('h3')
    }
display(){
  
   this. title.html("VIRTUAL PET")
    this.title.position(486,0)
  
    this.input.position(222,100)
    this.button.position(222,150)
    this.button.mousePressed(()=>{
       this. input.hide()
        this.button.hide()
       var name=this.input.value()
        player.update(name)
       this. greeting.html("WOOFF! WOOFF! I Liked My Name, "+name)
       this. greeting.position(741,100)
     
        
    })


}
}