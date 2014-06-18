function Fencepost (x, y, postNum){
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
}
Fencepost.prototype = {
  sendRopeTo: function ( connectedPost ){
    this.connectionsTo.push(connectedPost);
  },
  removeRope: function ( removeTo ){
    var temp = [];
    for(var i = 0; i<this.connectionsTo.length; i++){
      if(this.connectionsTo[i].postNum != removeTo){
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  },
  movePost: function (x, y){
    this.x = x;
    this.y = y;
  },
  valueOf: function (){
  return Math.sqrt( this.x*this.x + this.y*this.y );
  }
};
Fencepost.prototype.toString = function(){
  var list = "";
  for(var i = 0; i <this.connectionsTo.length; i++){
   list += "\n" + this.connectoinsTo[i].postNum;
  }
  return "Fence post #"+this.postNum+":\nConnected to posts:\n"+list+"\nDistance from ranch: "+this.valueOf() +" yards";
};