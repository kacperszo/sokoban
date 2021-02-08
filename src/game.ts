/**
 * Main game class
 */
export class Game {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private height: number = 600;
  private width: number = 800;

  /**
   * Class constructor specifying canvas for game to render in.
   * @param canvas Canvas for game to rander into
   */
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }
  /**
   * main game loop
   */
  public render(): void {
    this.clear();
  }

  private clear(): void {
    let ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillStyle = '#fff';
    ctx.fill();
  }
}
