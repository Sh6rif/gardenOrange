import Phaser from "phaser";
import PreloadScene from "./scenes/PreloadScene";
import SplashScene from "./scenes/SplashScene";
import MenuScene from "./scenes/MenuScene";
import Level1Scene from "./scenes/Level1Scene";

const WIDTH = 1000;
const HEIGHT = 562.5;

const startName_POSITION = {
  x: WIDTH * 0.76,
  y: HEIGHT * 0.25,
};
const startText_POSITION = {
  x: WIDTH * 0.76,
  y: HEIGHT * 0.57,
};
const seed_POSITION = {
  x: WIDTH * 0.68,
  y: HEIGHT * 0.78,
};
const dirtGround_POSITION = {
  x: WIDTH * 0.82,
  y: HEIGHT * 0.78,
};

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  startName_POSITION: startName_POSITION,
  startText_POSITION: startText_POSITION,
  seed_POSITION: seed_POSITION,
  dirtGround_POSITION: dirtGround_POSITION,
};

const Scenes = [PreloadScene, SplashScene, MenuScene, Level1Scene];
const createScene = (Scene) => new Scene(SHARED_CONFIG);
const initScenes = () => Scenes.map(createScene);

const config = {
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  pixelArt: true,
  physics: {
    default: "arcade",
  },
  scene: initScenes(),
};

new Phaser.Game(config);
