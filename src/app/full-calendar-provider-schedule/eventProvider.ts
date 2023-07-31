export class EventProvider {
  private id: number;
  private title: string;
  private description:string;
  private start: string;
  private end: string;

  constructor() {
    this.id = 0;
  //  this.dataEvento = new Date().getDate() + '';
    this.title = '';
    this.description = '';
    this.start = '';
    this.end = '';
  }
}
