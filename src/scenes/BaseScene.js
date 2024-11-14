import Phaser from "phaser";
class BaseScene extends Phaser.Scene {
  constructor(key, config) {
    super(key);
    this.config = config;
    this.screenCenter = [config.width / 2, config.height / 2];
    this.lineHeight = 150;
  }

  create() {
    this.createBackGround();
    this.createCursor();
    this.backGroundMusic();
  }

  createBackGround() {
    this.add.image(0, 0, "background").setScale(0.25).setOrigin(0);
  }

  createCursor() {
    this.input.setDefaultCursor("none");
    this.customCursor = this.physics.add
      .image(this.input.activePointer.x, this.input.activePointer.y, "cursor")
      .setScale(0.04)
      .setOrigin(0.25)
      .setDepth(1000);

    this.input.on("pointermove", (pointer) => {
      this.customCursor.x = pointer.x;
      this.customCursor.y = pointer.y;
    });
  }

  backGroundMusic() {
    this.backgroundMusic = this.sound.add("gameSound", {
      loop: true,
      volume: 1,
    });
    this.backgroundMusic.play();
  }

  createMenu(menu, setupMenuEvents) {
    let lastMenuPositionY = 0;
    menu.forEach((menuItem) => {
      const menuPosition = [
        this.screenCenter[0],
        this.screenCenter[1] + lastMenuPositionY,
      ];
      menuItem.imageGO = this.add
        .image(...menuPosition, menuItem.image)
        .setOrigin(0.5, 0.8);
      lastMenuPositionY += this.lineHeight;
      setupMenuEvents(menuItem);
    });
  }
}
export default BaseScene;
