
import { Component, OnInit, Input } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { ActivatedRoute, Router } from '@angular/router';
import { PesquisarService } from '../../home.service';
import { CriacaoAgendaProvider } from 'src/app/petservice/criacao-agenda-petprovider/criacao-agenda-petprovider';
import { ServiceContratados } from 'src/app/lista-service-contratados/lista-service-contratados';
import { PessoaFisica } from 'src/app/pessoa/pessoa-fisica';
import { ListaOpcoesHorariosServiceDisponiveisService } from 'src/app/lista-opcoes-horarios-service-disponiveis/lista-opcoes-horarios-service-disponiveis.service';
import { Pet } from 'src/app/pet/pet';
import { HistoricoPetproviderService } from 'src/app/historico-petprovider/historico-petprovider.service';
import Swal from 'sweetalert2';
import { HorarioServico } from './horario';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  pessoa: PessoaJuridica;
  @Input() media: number = 0;

  msg: string;
  varCriacaoAgendaProvider: CriacaoAgendaProvider;
  @Input() lstCriacaoAgendaProvider: CriacaoAgendaProvider[] = [];
  varServiceContratados: ServiceContratados;
  idProvider: string;
  varPessoaFisica: PessoaFisica = new PessoaFisica;
  idClientAux;
  atributosPet: string[] = ['Nome'];
  aux: string[] = [];
  listaServicos: ServicosSelecionados[] = [];
  varServicosSelecionados: ServicosSelecionados;
  listaDatas: string[] = [];
  varDataSelecionada: string;
  listaHorarios: HorarioServico[] = [];
  horarioSelecionado: HorarioServico;
  listaPetsBanco: Pet[] = [];
  listaPets: PetSelecionado[] = [];
  petSelecionado: PetSelecionado;
  auxAvaliacoes: ServiceContratados[] = [];
  avaliacoes: ServiceContratados[] = [];
  islogged = false;
  perfil = "";
  listaGeralDeServicos: ServicosSelecionados[] = [];
  pet: Pet;

  constructor(private pesquisarService: PesquisarService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private serviceCriacaoAgendaProvider: ListaOpcoesHorariosServiceDisponiveisService,
    private serviceServiceContratados: HistoricoPetproviderService) {

    this.listaServicos =
      [
        { label: 'Selecionar', name: 'Selecione o serviço desejado' }
      ];
    this.listaDatas.push('Selecione uma data');
    this.listaHorarios.push({ horarioInicio: 'Selecione um horário', horarioFim: '' });
    // this.listaPets = [
    //   { label: 'Selecionar', name: 'Selecione o pet' }
    // ]
    setTimeout(() => {
      this.trazerListaDeServicos();
    }, 1000);

    setTimeout(() => {
      this.serviceServiceContratados.listContratadosProviderFiltro(this.idProvider)
        .subscribe(
          res => {
            this.auxAvaliacoes = res
            this.filtrarAvaliacoes()
          });
    }, 1000)

  }

  ngOnInit() {
    const pessoa = this.activatedRoute.snapshot.params.id;
    this.pesquisarService.buscarDetalhes(pessoa).subscribe(retorno => {
      this.pessoa = retorno
    });

    this.idProvider = this.activatedRoute.snapshot.params.id;
    this.listAgendaProviderFiltrar(this.idProvider);

    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);

    this.serviceCriacaoAgendaProvider.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
      this.varPessoaFisica = retorno;
      this.perfil = retorno.tipoPerfil;
      if (this.idClientAux != 0) {
        if (this.perfil == "PESSOAFISICA") {
          this.islogged = true;
        }
      }
      // this.idClientAux = this.varPessoaFisica.id;
      // this.serviceCriacaoAgendaProvider.buscaPet(this.idClientAux).subscribe(
      //   (response) => {
      //     this.listaPetsBanco = response;
      //   });
    });
  }

  filtrarAvaliacoes() {
    for (const element of this.auxAvaliacoes) {
      if (element.avaliacao != 0) {
        this.avaliacoes.push(element);
      }
    }
  }

  carregarServiços() {
    if (this.pessoa.acupuntura == 'acupuntura') {
      this.listaGeralDeServicos.push({ label: 'acupuntura', name: 'Acupuntura' })
    }
    if (this.pessoa.adestramento == 'adestramento') {
      this.listaGeralDeServicos.push({ label: 'adestramento', name: 'Adestramento' })
    }
    if (this.pessoa.banhoETosa == 'banhoETosa') {
      this.listaGeralDeServicos.push({ label: 'banhoETosa', name: 'Banho/Tosa' })
    }
    if (this.pessoa.cirurgiaGeral == 'cirurgiaGeral') {
      this.listaGeralDeServicos.push({ label: 'cirurgiaGeral', name: 'Cirurgia Geral' })
    }
    if (this.pessoa.consulta == 'consulta') {
      this.listaGeralDeServicos.push({ label: 'consulta', name: 'Consulta' })
    }
    if (this.pessoa.creche == 'creche') {
      this.listaGeralDeServicos.push({ label: 'creche', name: 'Creche' })
    }
    if (this.pessoa.ensaioFotografico == 'ensaioFotografico') {
      this.listaGeralDeServicos.push({ label: 'ensaioFotografico', name: 'Ensaio Fotográfico' })
    }
    if (this.pessoa.hidratacao == 'hidratacao') {
      this.listaGeralDeServicos.push({ label: 'hidratacao', name: 'Hidratação' })
    }
    if (this.pessoa.hotel == 'hotel') {
      this.listaGeralDeServicos.push({ label: 'hotel', name: 'Hotel' })
    }
    if (this.pessoa.massagem == 'massagem') {
      this.listaGeralDeServicos.push({ label: 'massagem', name: 'Massagem' })
    }
    if (this.pessoa.penteadosArtisticos == 'penteadosArtisticos') {
      this.listaGeralDeServicos.push({ label: 'penteadosArtisticos', name: 'Penteados Artísticos' })
    }
    if (this.pessoa.petwalk == 'petwalk') {
      this.listaGeralDeServicos.push({ label: 'petwalk', name: 'Pet Walk' })
    }
    if (this.pessoa.spa == 'spa') {
      this.listaGeralDeServicos.push({ label: 'spa', name: 'SPA' })
    }
    if (this.pessoa.taxi == 'taxi') {
      this.listaGeralDeServicos.push({ label: 'taxi', name: 'Táxi' })
    }
    if (this.pessoa.tosaExotica == 'tosaExotica') {
      this.listaGeralDeServicos.push({ label: 'tosaExotica', name: 'Tosa Exótica' })
    }
    if (this.pessoa.vacinacao == 'vacinacao') {
      this.listaGeralDeServicos.push({ label: 'vacinacao', name: 'Vacinação' })
    }
    if (this.pessoa.exames == 'exames') {
      this.listaGeralDeServicos.push({ label: 'exames', name: 'Exames' })
    }
  }

  trazerListaDeServicos() {

    for (let element of this.lstCriacaoAgendaProvider) {
      if (!this.aux.includes(element.servicoEscolhido)) {
        this.aux.push(element.servicoEscolhido)
      }
    }

    for (let element of this.aux) {
      if (element == 'Acupuntura') {
        this.listaServicos.push({ label: 'acupuntura', name: 'Acupuntura' })
      }
      if (element == 'Adestramento') {
        this.listaServicos.push({ label: 'adestramento', name: 'Adestramento' })
      }
      if (element == 'Banho/Tosa') {
        this.listaServicos.push({ label: 'banhoETosa', name: 'Banho/Tosa' })
      }
      if (element == 'Cirurgia Geral') {
        this.listaServicos.push({ label: 'cirurgiaGeral', name: 'Cirurgia Geral' })
      }
      if (element == 'Consulta') {
        this.listaServicos.push({ label: 'consulta', name: 'Consulta' })
      }
      if (element == 'Creche') {
        this.listaServicos.push({ label: 'creche', name: 'Creche' })
      }
      if (element == 'Ensaio Fotográfico') {
        this.listaServicos.push({ label: 'ensaioFotografico', name: 'Ensaio Fotográfico' })
      }
      if (element == 'Hidratação') {
        this.listaServicos.push({ label: 'hidratacao', name: 'Hidratação' })
      }
      if (element == 'Hotel') {
        this.listaServicos.push({ label: 'hotel', name: 'Hotel' })
      }
      if (element == 'Massagem') {
        this.listaServicos.push({ label: 'massagem', name: 'Massagem' })
      }
      if (element == 'Penteados Artísticos') {
        this.listaServicos.push({ label: 'penteadosArtisticos', name: 'Penteados Artísticos' })
      }
      if (element == 'Pet Walk') {
        this.listaServicos.push({ label: 'petwalk', name: 'Pet Walk' })
      }
      if (element == 'SPA') {
        this.listaServicos.push({ label: 'spa', name: 'SPA' })
      }
      if (element == 'Táxi') {
        this.listaServicos.push({ label: 'taxi', name: 'Táxi' })
      }
      if (element == 'Tosa Exótica') {
        this.listaServicos.push({ label: 'tosaExotica', name: 'Tosa Exótica' })
      }
      if (element == 'Vacinação') {
        this.listaServicos.push({ label: 'vacinacao', name: 'Vacinação' })
      }
      if (element == 'Exames') {
        this.listaServicos.push({ label: 'exames', name: 'Exames' })
      }

    }
    //alert(JSON.stringify(this.listaServicos));
  }

  datasDisponiveisServico() {
    var data = new Date();
    var dataHoje = new Date((data.getMonth() + 1) + '/' + data.getDate() + '/' + data.getFullYear());
    alert(dataHoje)
    for (let element of this.lstCriacaoAgendaProvider) {
    
      if (element.servicoEscolhido == String(this.varServicosSelecionados)) {
        alert(element.dataCalendarioCorrecao + "hora errada")
       
        var dataAgenda =  this.converterStringParaData(element.dataCalendarioCorrecao)
        alert(dataAgenda + " modificada")
        if (dataHoje < dataAgenda) {
          alert("Entrou")
          if (!this.listaDatas.includes(element.dataCalendarioCorrecao)) {
            alert(element.dataCalendarioCorrecao)
            this.listaDatas.push(element.dataCalendarioCorrecao);
        
          }
        }
      }
    }
  }

  limparServicoEData() {
    this.varServicosSelecionados = null;
    this.varDataSelecionada = '';
    this.listaDatas = []
  }

  limparDataEHorario() {
    this.varDataSelecionada = '';
    this.listaHorarios = [];
    this.horarioSelecionado = null;
  }

  limparHorarioEPet() {
    this.horarioSelecionado = null;
    this.petSelecionado = null;
    this.listaPets = [];
  }

  setTimeHorarios() {
    setTimeout(() => {
      this.horariosDisponiveisServico();
    }, 200);
  }

  horariosDisponiveisServico() {
    for (let element of this.lstCriacaoAgendaProvider) {
      if (element.servicoEscolhido == String(this.varServicosSelecionados)) {
        if (element.dataCalendarioCorrecao == String(this.varDataSelecionada)) {
          this.listaHorarios.push({ horarioInicio: 'Das ' + element.tempoInicioCorrecao, horarioFim: 'às ' + element.tempoFimCorrecao })
        }
      }
    }
  }

  salvar() {
    alert("salvar")
    const varContratadoAgendaProvider: ServiceContratados = new ServiceContratados;

    for (const element of this.lstCriacaoAgendaProvider) {
      if (element.servicoEscolhido == String(this.varServicosSelecionados)) {
        if (element.dataCalendarioCorrecao == this.varDataSelecionada) {
          var hora = 'Das ' + element.tempoInicioCorrecao + ' às ' + element.tempoFimCorrecao
          if (hora == String(this.horarioSelecionado)) {
            varContratadoAgendaProvider.nomeCliente = element.nomeCliente;
            varContratadoAgendaProvider.nomeProvider = element.nomeProvider;
            varContratadoAgendaProvider.tempoInicio = element.tempoInicioCorrecao;
            varContratadoAgendaProvider.tempoFim = element.tempoFimCorrecao;
            varContratadoAgendaProvider.siglaDia = element.siglaDia;
            varContratadoAgendaProvider.tipoService = element.servicoEscolhido;
            varContratadoAgendaProvider.dataEscolhida = null;
            varContratadoAgendaProvider.idPetClient = element.idPetClient;
            varContratadoAgendaProvider.idPetProvider = element.idPetProvider;
            varContratadoAgendaProvider.dataCalendarioCorrecao = element.dataCalendarioCorrecao;
            varContratadoAgendaProvider.tempoInicioReplicacao = element.tempoInicio;
            varContratadoAgendaProvider.tempoFimReplicacao = element.tempoFim;
            varContratadoAgendaProvider.dataParaOrdenacao = element.dataParaOrdenacao;

            alert("chegando ...")
            // this.pegarPetCompleto();

            // varContratadoAgendaProvider.nomePet = this.pet.nomePet;
            // varContratadoAgendaProvider.racaPet = this.pet.racaPet;
            // varContratadoAgendaProvider.especiePet = this.pet.especiePet;
            // varContratadoAgendaProvider.idPet = this.pet.id;

            this.serviceCriacaoAgendaProvider.salvarEmServicosContratados(varContratadoAgendaProvider)
              .subscribe((res) => {
                this.varServiceContratados = res;
                Swal.fire({
                  position: 'center',
                  type: 'success',
                  title: 'Horário cadastrado!',
                  showConfirmButton: false,
                  timer: 3000
                });
                setTimeout(() => {
                  window.location.href = 'contratados/petclient';
                }, 1000);
              });


            element.escolhido = true;
            this.serviceCriacaoAgendaProvider.atualizaEscolhido(element).subscribe(res => { });
          }
        }
      }
    }
  }

  voltar() {
    this.router.navigate(['home', 'home']);
  }

  listAgendaProviderFiltrar(idProvider: string) {
    this.serviceCriacaoAgendaProvider.listAgendaProviderFiltrar(idProvider).subscribe(
      res => this.lstCriacaoAgendaProvider = res)
  }

  pets() {
    for (let element of this.listaPetsBanco) {
      this.listaPets.push({ label: String(element.id), name: element.nomePet });
    }
  }

  pegarPetCompleto() {
    var pet = String(this.petSelecionado);

    for (const element of this.listaPetsBanco) {
      if (pet == element.nomePet) {
        this.pet = element;
      }
    }

  }

   converterStringParaData(dataString: string) {
    const partes = dataString.split('/');
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1; // Subtrai 1 porque os meses no JavaScript são indexados de 0 a 11
    const ano = parseInt(partes[2], 10);
    return new Date(ano, mes, dia);
  }
}
