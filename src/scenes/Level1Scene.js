import BaseScene from "./BaseScene";

class Level1Scene extends BaseScene {
  constructor(config) {
    super("Level1Scene", config);
  }

  create() {
    super.create();
    super.createCursor();
    this.createStartGame();
  }

  update() {}

  createStartGame() {
    this.add
      .image(
        this.config.startName_POSITION.x,
        this.config.startName_POSITION.y,
        "startName"
      )
      .setScale(0.18)
      .setOrigin(0.5);
    this.add
      .image(
        this.config.startText_POSITION.x,
        this.config.startText_POSITION.y,
        "startText"
      )
      .setScale(0.11)
      .setOrigin(0.5);
    this.add
      .image(
        this.config.dirtGround_POSITION.x,
        this.config.dirtGround_POSITION.y,
        "ground_dirt"
      )
      .setScale(0.73)
      .setOrigin(0.5);

    this.seed = this.add
      .image(this.config.seed_POSITION.x, this.config.seed_POSITION.y, "seed")
      .setScale(0.065)
      .setOrigin(0.5);
  }
}
export default Level1Scene;
