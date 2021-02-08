export abstract class GameScreen {
  protected ctx: HTMLCanvasElement;
  constructor(context: HTMLCanvasElement) {
    this.ctx = context;
  }
  abstract update(delta: Number);
}
