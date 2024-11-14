import BaseScene from "./BaseScene";

class Level1Scene extends BaseScene {
  constructor(config) {
    super("Level1Scene", config);
    this.dirtTiles = [];
    this.isDragging = false;
  }

  create() {
    super.create();
    this.createStartGame();
    this.createFarm();
    this.setupSeed();
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
        "groundDirt"
      )
      .setScale(0.7);
  }

  createFarm() {
    const farmContainer = this.add.container(0, 0);

    const positions = [
      ...[
        { x: 300, y: 200, type: "ground_grass" },
        { x: 332, y: 217, type: "ground_grass" },
        { x: 364, y: 234, type: "ground_grass" },
        { x: 396, y: 251, type: "ground_grass" },
        { x: 268, y: 217, type: "ground_grass" },
        { x: 300, y: 234, type: "ground_grass" },
        { x: 332, y: 251, type: "ground_grass" },
        { x: 364, y: 268, type: "ground_grass" },
        { x: 236, y: 234, type: "ground_grass" },
        { x: 268, y: 251, type: "ground_grass" },
        { x: 300, y: 268, type: "ground_grass" },
        { x: 332, y: 285, type: "ground_grass" },
        { x: 204, y: 251, type: "ground_grass" },
        { x: 236, y: 268, type: "ground_grass" },
        { x: 268, y: 285, type: "ground_grass" },
        { x: 300, y: 302, type: "ground_grass" },
        { x: 172, y: 268, type: "ground_grass" },
        { x: 204, y: 285, type: "ground_grass" },
        { x: 236, y: 302, type: "ground_grass" },
        { x: 268, y: 319, type: "ground_grass" },
        { x: 140, y: 285, type: "ground_grass" },
        { x: 172, y: 302, type: "ground_grass" },
        { x: 204, y: 319, type: "ground_grass" },
        { x: 236, y: 336, type: "ground_grass" },
        { x: 108, y: 302, type: "ground_grass" },
        { x: 140, y: 319, type: "ground_grass" },
        { x: 172, y: 336, type: "ground_grass" },
        { x: 204, y: 355, type: "ground_grass" },
        { x: 460, y: 285, type: "ground_grass" },
        { x: 492, y: 302, type: "ground_grass" },
        { x: 524, y: 319, type: "ground_grass" },
        { x: 428, y: 302, type: "ground_grass" },
        { x: 460, y: 319, type: "ground_grass" },
        { x: 492, y: 336, type: "ground_grass" },
        { x: 524, y: 355, type: "ground_grass" },
        { x: 396, y: 319, type: "ground_grass" },
        { x: 492, y: 372, type: "ground_grass" },
        { x: 364, y: 336, type: "ground_grass" },
        { x: 460, y: 387, type: "ground_grass" },
        { x: 332, y: 355, type: "ground_grass" },
        { x: 428, y: 406, type: "ground_grass" },
        { x: 300, y: 372, type: "ground_grass" },
        { x: 332, y: 389, type: "ground_grass" },
        { x: 364, y: 406, type: "ground_grass" },
        { x: 396, y: 425, type: "ground_grass" },
      ],
      ...[
        { x: 428, y: 268, type: "ground_stones" },
        { x: 396, y: 285, type: "ground_stones" },
        { x: 364, y: 302, type: "ground_stones" },
        { x: 332, y: 317, type: "ground_stones" },
        { x: 300, y: 336, type: "ground_stones" },
        { x: 268, y: 351, type: "ground_stones" },
        { x: 556, y: 336, type: "ground_stones" },
      ],
      ...[
        { x: 428, y: 336, type: "ground_dirt" },
        { x: 460, y: 355, type: "ground_dirt" },
        { x: 396, y: 355, type: "ground_dirt" },
        { x: 428, y: 372, type: "ground_dirt" },
        { x: 364, y: 372, type: "ground_dirt" },
        { x: 396, y: 389, type: "ground_dirt" },
      ],
    ];

    positions.sort((a, b) => a.y - b.y);

    positions.forEach((pos, index) => {
      const tile = this.add
        .image(pos.x, pos.y, pos.type)
        .setOrigin(0.5)
        .setScale(0.4)
        .setDepth(index);

      if (pos.type === "ground_dirt") {
        this.dirtTiles.push(tile);
      }

      farmContainer.add(tile);
    });

    farmContainer.add(
      this.add.image(208, 282, "fence").setOrigin(0.5).setScale(0.4)
    );
    farmContainer.add(
      this.add.image(408, 142, "house").setOrigin(0.5).setScale(0.27)
    );
    farmContainer.add(
      this.add.image(461, 231, "tree1").setOrigin(0.5).setScale(0.25)
    );
    farmContainer.add(
      this.add.image(208, 179, "tree2").setOrigin(0.5).setScale(0.35)
    );
    farmContainer.add(
      this.add.image(531, 251, "tree2").setOrigin(0.5).setScale(0.35)
    );
  }

  setupSeed() {
    this.seedOriginalPosition = {
      x: this.config.seed_POSITION.x,
      y: this.config.seed_POSITION.y,
    };

    this.seed = this.physics.add
      .image(this.seedOriginalPosition.x, this.seedOriginalPosition.y, "seed")
      .setScale(0.05)
      .setOrigin(0.5)
      .setInteractive();

    this.input.on("pointerdown", this.startDrag, this);
  }

  startDrag(pointer, targets) {
    if (targets[0] === this.seed) {
      this.isDragging = true;
      this.dragObj = this.seed;
      this.input.on("pointermove", this.doDrag, this);
      this.input.on("pointerup", this.stopDrag, this);
    }
  }

  doDrag(pointer) {
    if (this.dragObj) {
      this.dragObj.x = pointer.x;
      this.dragObj.y = pointer.y;
    }
  }

  stopDrag() {
    this.input.off("pointermove", this.doDrag, this);
    this.input.off("pointerup", this.stopDrag, this);
    const droppedOnDirt = this.dirtTiles.some((dirtTile, index) => {
      const distance = Phaser.Math.Distance.Between(
        this.seed.x,
        this.seed.y,
        dirtTile.x,
        dirtTile.y
      );
      if (distance < 20) {
        dirtTile.setTexture("ground_grass");
        this.dirtTiles.splice(index, 1);
        return true;
      }
      return false;
    });

    if (droppedOnDirt) {
      this.successPlaceSound();
      if (this.dirtTiles.length === 0) {
        this.showCompleteMessage();
      }
    } else {
      this.wrongPlaceSound();
    }

    this.seed.x = this.seedOriginalPosition.x;
    this.seed.y = this.seedOriginalPosition.y;
  }

  showCompleteMessage() {
    this.sound.play("completeSound", { loop: false, volume: 1 });
    this.add
      .image(this.config.width / 2, this.config.height / 2, "finish")
      .setOrigin(0.5)
      .setScale(0.15)
      .setDepth(900);
    this.time.delayedCall(5000, () => {
      this.scene.stop("Level1Scene");
      this.scene.start("MenuScene");
    });
  }

  successPlaceSound() {
    this.sound.play("successSound", { loop: false, volume: 1 });
  }

  wrongPlaceSound() {
    if (this.isDragging) {
      this.isDragging = false;
      this.sound.play("failSound", { loop: false, volume: 1 });
    }
  }
}

export default Level1Scene;
