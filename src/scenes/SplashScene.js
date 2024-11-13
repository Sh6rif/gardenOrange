import BaseScene from "./BaseScene";

class SplashScene extends BaseScene {
  constructor(config) {
    super("SplashScene", config);
  }

  create() {
    super.create();

    const centerX = this.config.width / 2;
    const centerY = this.config.height / 2;

    this.add
      .image(centerX, centerY - 100, "splash")
      .setScale(0.15)
      .setOrigin(0.5);

    const loadingImage = this.add
      .image(centerX, centerY + 125, "loading")
      .setScale(0.2)
      .setOrigin(0.5);

    this.tweens.add({
      targets: loadingImage,
      yoyo: true,
      scale: 0.25,
      duration: 500,
      repeat: -1,
    });

    this.time.delayedCall(5000, () => {
      this.scene.start("MenuScene");
    });
  }
}
export default SplashScene;
