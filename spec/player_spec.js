describe("Player", function() {
  var score_card;
  var player;

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
    // score_card = jasmine.createSpyObj('score_card', ["enter_pins_knocked"]).and.callFake(
    //   function(frame, roll, pins){this.frames[frame][roll] = pins}
    // );
    player = new Player(score_card)
  });
  describe("#enter_frame_result", function() {
    it("should be able to change pins", function() {
      player.enter_frame_result(1,1,5)
      expect(player.score_card.frames[1][1]).toEqual(5);

    });
  });
});
// .and.callFake()
