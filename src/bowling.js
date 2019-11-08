function Bowling(player) {
  this.player = player == null ? new Player : new Player
  this.game_score = this.player.score_card
  // this.player2 = player == null ? new Player : new Player
  // don't know hoe to make doubles of methods in jasmine chamge second new Player
  // to player if i get it working
}

Bowling.prototype.get_score = function () {
   return this.game_score
 }

Bowling.prototype.edit_score_board = function(frame, roll, pins) {
  this.player.enter_frame_result(frame, roll, pins)
};
//
// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
