class Tree extends Rectangle {
  constructor(x, y, width) {
    super(x, y, width, width);
    this.treeType = random([1, 2, 3, 4])
    this.appear = random([true,false])
  }
  
  update() {
    this.y += speedY;
    if (this.y >= height) {
      this.appear = random([true,false])
      this.y = -grid ;
    }
  }
  show() {
    if(this.appear){
      image(treeImg[this.treeType], this.x, this.y, this.width, this.width)
    }
  }
}