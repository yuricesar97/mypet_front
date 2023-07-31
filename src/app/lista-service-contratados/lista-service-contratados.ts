export class ServiceContratados  {
  id: number;
  nomeCliente = '';
  nomeProvider = '';
  dataEscolhida = new Date();
  tempoInicio = '';
  tempoFim = '';
  tipoService = '';
  siglaDia = '';
  idPetClient = '';
  idPetProvider = '';
  dataCalendarioCorrecao = '';
  status = false;
  cancelado = false;
  notificaCancelamento = false;
  motivoCancelamento = '';
  mostraStatus = '';
  avaliacao = 0;
  tempoInicioReplicacao = new Date();
  tempoFimReplicacao = new Date();
  comentarioAvaliacao = '';
  observacaoAtendimento = '';
  dataParaOrdenacao = new Date();
  idAgendaProvider = 0;
  nomePet = '';
  idPet = 0;
  racaPet = '';
  especiePet = '';


  constructor() {
    this.id = 0;
    this.nomeCliente = '';
    this.nomeProvider = '';
    this.tempoInicio = '';
    this.dataEscolhida = null;
    this.tempoFim = '';
    this.tipoService = '';
    this.siglaDia = '';
    this.idPetClient = '';
    this.idPetProvider = '';
    this.dataCalendarioCorrecao = '';
    this.status = false;
    this.cancelado = false;
    this.notificaCancelamento = false;
    this.motivoCancelamento =  '';
    this.mostraStatus = '';
    this.avaliacao = 0;
    this.tempoInicioReplicacao = new Date();
    this.tempoFimReplicacao = new Date();
    this.comentarioAvaliacao = '';
    this.observacaoAtendimento = '';
    this.dataParaOrdenacao = new Date();
    this.idAgendaProvider = 0;
    this.nomePet = '';
    this.idPet = 0;
    this.racaPet = '';
    this.especiePet = '';
  }
}
