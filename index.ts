import { Game } from './src/game';

class App {
  private game: Game;
  constructor(game: Game) {
    this.game = game;
  }
  public setup(): void {
    this.gameLoop();
  }
  private gameLoop(): void {
    requestAnimationFrame(this.gameLoop.bind(this));
    this.game.render();
  }
}
window.onload = () => {
  let app = new App(
    new Game(document.getElementById('canvas') as HTMLCanvasElement)
  );
  app.setup();
};
