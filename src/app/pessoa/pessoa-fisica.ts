export class PessoaFisica {
  public id: number;
  public username: string;
  public nomeCompleto: string;
  public dataNascimento: string;
  public telefoneFixo: string;
  public telefoneCelular: string;
  public logradouro: string;
  public numero: number;
  public tipoPerfil: number;
  public complemento: string;
  public bairro: string;
  public cidade: string;
  public estado: string;
  public cep: string;
  public cpf: string;
  public email: string;
  public senha: string;
  public fotoPerfil: string;
  /* Para PetWalker */
  public petWalker: boolean;
  public descricao: string;
  public fotos: string;
  public active: boolean;


  constructor() {
      this.id = 0;
     this.nomeCompleto = '' ;
     this.username = '';
     this.dataNascimento = '' ;
     this.telefoneFixo = '' ;
     this.telefoneCelular = '' ;
     this.logradouro = '' ;
     this.numero = null ;
     this.tipoPerfil = 0 ;
     this.complemento = '' ;
     this.bairro = '' ;
     this.cidade = '' ;
     this.estado = '' ;
     this.cep = '' ;
     this.cpf = '' ;
     this.email = '' ;
     this.senha = '' ;
     this.fotoPerfil = '' ;
    /* Para PetWalker */
    this.descricao = '' ;
    this.fotos = '' ;
    this.active = true;
  }
}
