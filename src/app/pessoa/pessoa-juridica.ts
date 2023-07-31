export class PessoaJuridica {

  //Infos do estabelecimento
  public mediaAvaliacao: number;
  public razaoSocial: string;
  public cpf: string;
  public telefoneFixo: string;
  public telefoneCelular: string;
  public logradouro: string;
  public numero: number;
  public complemento: string;
  public bairro: string;
  public cidade: string;
  public estado: string;
  public cep: string;

  //Dados de acesso
  public email: string;
  public senha: string;
  public fotoPerfil: string;

  //Infos do cadastro
  public id: number;
  public situacaoAprovacao: string;
  public checkStatus: boolean;
  public active: boolean;
  public tipoPerfil: number;

  //Servicos
  public descricaoPetProvider: string
  public banhoETosa:  string;
  public consulta: string;
  public tosaExotica: string;
  public vacinacao: string;
  public cirurgiaGeral: string;
  public hidratacao: string;
  public penteadosArtisticos: string;
  public acupuntura: string;
  public spa: string;
  public hotel: string;
  public creche: string;
  public taxi: string;
  public ensaioFotografico: string;
  public adestramento: string;
  public massagem: string;
  public petwalk: string;
  public exames: string


  constructor() {

    this.mediaAvaliacao = 0;
    this.id = 0;
    this.razaoSocial = '' ;
    this.cpf = '' ;
    this.telefoneFixo = '' ;
    this.telefoneCelular = '' ;
    this.logradouro = '' ;
    //this.numero = 0 ;
    this.tipoPerfil = 0;
    this.complemento = '' ;
    this.bairro = '' ;
    this.cidade = '' ;
    this.estado = '' ;
    this.cep = '' ;
    this.email = '' ;
    this.senha = '' ;
    this.fotoPerfil = '' ;
    this.situacaoAprovacao = '';
    this.checkStatus = false;
    this.descricaoPetProvider = "";
    this.banhoETosa = '';
    this.consulta = '';
    this.tosaExotica = '';
    this.vacinacao = '';
    this.cirurgiaGeral = '';
    this.hidratacao = '';
    this.penteadosArtisticos = '';
    this.acupuntura = '';
    this.spa = '';
    this.hotel = '';
    this.creche = '';
    this.taxi = '';
    this.ensaioFotografico = '';
    this.adestramento = '';
    this.massagem = '';
    this.petwalk = '';
    this.exames = '';
    this.active = true;
  }
}
