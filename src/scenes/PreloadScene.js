import Phaser from "phaser";

class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.image("background", "assets/Background.png");

    this.load.image("splash", "assets/Splash Image.png");
    this.load.image("loading", "assets/Loading.png");

    this.load.image("ok", "assets/Ok.png");
    this.load.image("startButton", "/assets/Start Button.png");
    this.load.image("startName", "/assets/Start Name.png");
    this.load.image("startText", "/assets/Start Text.png");
    this.load.image("finish", "/assets/Finish.png");

    this.load.image("ground_grass", "assets/Ground 1.png");
    this.load.image("ground_stones", "assets/Ground 2.png");
    this.load.image("ground_stones2", "assets/Ground 3.png");
    this.load.image("ground_dirt", "assets/Ground 4.png");
    this.load.image("groundDirt", "assets/Ground 4.png");

    this.load.image("seed", "assets/Seed.png");
    this.load.image("cursor", "assets/Cursor.png");

    this.load.image("plant", "assets/Plant 1.png");
    this.load.image("tree1", "assets/Tree1.png");
    this.load.image("tree2", "assets/Tree2.png");
    this.load.image("plant1", "assets/P1.png");
    this.load.image("plant2", "assets/P2.png");
    this.load.image("plant3", "assets/P3.png");

    this.load.image("rake", "assets/Object 01.png");
    this.load.image("shovel", "assets/Object 02.png");
    this.load.image("box", "assets/Object 03.png");
    this.load.image("sickle", "assets/Object 04.png");
    this.load.image("boot", "assets/Object 05.png");
    this.load.image("scissors", "assets/Object 06.png");

    this.load.image("fence", "assets/Fence.png");
    this.load.image("house", "assets/House.png");

    this.load.audio("failSound", "assets/Fail.wav");
    this.load.audio("gameSound", "assets/In Game Sound.mp3");
    this.load.audio("completeSound", "assets/Complete.mp3");
    this.load.audio("successSound", "assets/Success.mp3");
  }

  create() {
    this.scene.start("SplashScene");
  }
}

export default PreloadScene;
