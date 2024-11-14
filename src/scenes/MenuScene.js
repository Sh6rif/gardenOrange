import BaseScene from "./BaseScene";

class MenuScene extends BaseScene {
  constructor(config) {
    super("MenuScene", config);
    this.menu = [
      { scene: null, image: "startName" },
      { scene: "Level1Scene", image: "startButton" },
    ];
  }

  create() {
    super.create();
    this.createMenu(this.menu, this.setupMenuEvents.bind(this));
  }

  setupMenuEvents(menuItem) {
    const imageGO = menuItem.imageGO.setScale(0.25);
    if (menuItem.image === "startButton") {
      imageGO.setInteractive();
      imageGO.on("pointerover", () => {
        this.tweens.add({
          targets: imageGO,
          scale: 0.275,
          duration: 300,
          ease: "Power2",
        });
      });

      imageGO.on("pointerout", () => {
        this.tweens.add({
          targets: imageGO,
          scale: 0.25,
          duration: 300,
          ease: "Power2",
        });
      });
    }

    imageGO.on("pointerup", () => {
      menuItem.scene && this.scene.start(menuItem.scene);
    });
  }
}

export default MenuScene;
