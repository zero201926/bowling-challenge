describe("Bowling", function() {
  var score_card;
  var player;
  var bowling;

  beforeEach(function() {
    score_card = jasmine.createSpyObj('score_card', ["frames", {
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
    }]);
    player = jasmine.createSpyObj('player', [score_card]);
    // score_card = new ScoreCard
    // player = new Player(score_card)
    bowling = new Bowling(player)
  });
  describe("#edit_score_board", function(){
    it("should be able to change pins", function(){
      bowling.edit_score_board(1,1,5)
      expect(bowling.player.score_card.frames[1][1]).toEqual(5);
    });
  });
  describe("#get_score", function(){
    it("should be able to view your score", function(){
      expect(bowling.get_score()).toEqual(bowling.player.score_card)
    });
  });
});
