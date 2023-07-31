export class PetEvent{
    public title;
    public description;
    public start;
    public end;
    public local;
    public data;
    public idProvider;
    public nomeProvider;
    public idCliente;
    public nomeCliente;

    constructor(){
        this.title = '';
        this.description = '';
        this.start = '';
        this.end = '';
        this.local = '';
        this.data = '';
        this.idProvider = 0;
        this.nomeProvider = '';
        this.idCliente = 0;
        this.nomeCliente = '';
    }
}