// Space Penguin
// Game obj
let game = {
  width: 20000,
  height: 10000,
  stats: {
    pencoin: 0
  },
  space: {
    sfx: {},
    stats: {},
    mode: "cannon"
  }
};

// Phaser game
const phaserGame = new Phaser.Game(config);
