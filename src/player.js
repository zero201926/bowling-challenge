function Player(score_card){
  this.score_card = score_card == null ? new ScoreCard : new ScoreCard
  // don't know hoe to make doubles of methods in jasmine chamge second new ScoreCard
  // to score_card if i get it working

}

Player.prototype.enter_frame_result = function(frame, roll, pins){
  this.score_card.enter_pins_knocked(frame, roll, pins)
}
