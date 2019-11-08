function ScoreCard(){
  this.frames = {
      1:{1:"pins", 2:"pins"},
      2:{1:"pins", 2:"pins"},
      3:{1:"pins", 2:"pins"},
      4:{1:"pins", 2:"pins"},
      5:{1:"pins", 2:"pins"},
      6:{1:"pins", 2:"pins"},
      7:{1:"pins", 2:"pins"},
      8:{1:"pins", 2:"pins"},
      9:{1:"pins", 2:"pins"},
      10:{1:"pins", 2:"pins"}
    };
}
ScoreCard.prototype.enter_pins_knocked = function(frame, roll, pins){
  this.frames[frame][roll] = pins
  };
// score = new ScoreCard
// console.log(score.frames["1"][1])
