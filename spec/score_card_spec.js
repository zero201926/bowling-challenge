describe("ScoreCard", function() {
  var score_card;

  beforeEach(function() {
    score_card = new ScoreCard();
  });
  describe("#enter_pins_knocked", function() {
    it("should be able to change pins", function() {
      score_card.enter_pins_knocked(1,1,5)
      expect(score_card.frames[1][1]).toEqual(5);

    });
  });

  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });
  //
  //   xit("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();
  //
  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });
  //
  //   xit("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });
  //
  // // demonstrates use of spies to intercept and test method calls
  // xit("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');
  //
  //   player.play(song);
  //   player.makeFavorite();
  //
  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });
  //
  // //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   xit("should throw an exception if song is already playing", function() {
  //     player.play(song);
  //
  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });
});
