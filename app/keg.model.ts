export class Keg {
  public pintsRemaining: number = 124;
  public date: Date = new Date();
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number) { }
}
