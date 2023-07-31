import { Pet } from './../pet/pet';
import { PessoaFisica } from './../pessoa/pessoa-fisica';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaServiceContratadosService } from './../lista-service-contratados/lista-service-contratados.service';
import { ServiceContratados } from './../lista-service-contratados/lista-service-contratados';
import { CriacaoAgendaPetproviderService } from './../petservice/criacao-agenda-petprovider/criacao-agenda-petprovider.service';
import { CriacaoAgendaProvider } from './../petservice/criacao-agenda-petprovider/criacao-agenda-petprovider';
import { Component, OnInit, Input } from '@angular/core';
import { ListaOpcoesHorariosServiceDisponiveisService } from './lista-opcoes-horarios-service-disponiveis.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-opcoes-horarios-service-disponiveis',
  templateUrl: './lista-opcoes-horarios-service-disponiveis.component.html',
  styleUrls: ['./lista-opcoes-horarios-service-disponiveis.component.css']
})
export class ListaOpcoesHorariosServiceDisponiveisComponent implements OnInit {

  varCriacaoAgendaProvider: CriacaoAgendaProvider;
  @Input() lstCriacaoAgendaProvider: CriacaoAgendaProvider[] = [];
  varServiceContratados: ServiceContratados;
  idProvider: string;
  varPessoaFisica: PessoaFisica = new PessoaFisica;
  idClientAux;
  atributosPet: string[] = ['Nome'];
  @Input() lstPet: Pet[] = [];


  constructor(private serviceCriacaoAgendaProvider: ListaOpcoesHorariosServiceDisponiveisService
              , private activatedRoute: ActivatedRoute,
              private router: Router) {
                this.router = router;
    }

  ngOnInit() {
    this.idProvider = this.activatedRoute.snapshot.params.id;
    this.listAgendaProviderFiltrar(this.idProvider);


    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);

    this.serviceCriacaoAgendaProvider.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
      this.varPessoaFisica = retorno;
      this.idClientAux = this.varPessoaFisica.id;

      let varPessoaFisicaAux: PessoaFisica = new PessoaFisica;
      this.serviceCriacaoAgendaProvider.buscaPet(this.idClientAux).subscribe(
        (response) => {
          this.lstPet = response;
        });
    });


  }

  listAgendaProviderFiltrar(idProvider: string)  {
    this.serviceCriacaoAgendaProvider.listAgendaProviderFiltrar(idProvider).subscribe(
      res => this.lstCriacaoAgendaProvider = res);

    };

  salvaAgendaProviderContratado(lstCriacaoAgendaProvider: CriacaoAgendaProvider[]) {
    const lstContratadoAgendaProvider: ServiceContratados[] = [];
    let count = 0;



    for (const element of lstCriacaoAgendaProvider)  {
      const varContratadoAgendaProvider: ServiceContratados = new ServiceContratados();
      if (element.selecaoHorario) {
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
        varContratadoAgendaProvider.idAgendaProvider = element.id;

        this.associarPet(this.lstPet, varContratadoAgendaProvider);

        // PARA SALVAR UMA LISTA INTEIRA DE UMA VEZ
        // lstContratadoAgendaProvider.push(varContratadoAgendaProvider);

          // no começo do component fazer uma query para usar o id de quem esta logado
          // com o idPetCliente na tabela pet
          // trazendo todas as opções de pet que tem com esse idPetCliente



        this.serviceCriacaoAgendaProvider.salvarEmServicosContratados(varContratadoAgendaProvider)
        .subscribe((res) => {
          this.varServiceContratados = res;
            window.location.href = 'contratados/petclient';
          });


          element.escolhido = true;
          this.serviceCriacaoAgendaProvider.atualizaEscolhido(element).subscribe(res => { });
      }
    }
    // PARA SALVAR UMA LISTA INTEIRA DE UMA VEZ
    // this.serviceCriacaoAgendaProvider.salvarListaEmServicosContratados(lstContratadoAgendaProvider).
    // subscribe((res) => {
    //   this.varServiceContratados = res
    // });
  }

  associarPet(lstPet: Pet[], varContratadoAgendaProvider: ServiceContratados) {
    varContratadoAgendaProvider.nomePet = lstPet.pop().nomePet;
    //varContratadoAgendaProvider.idPet = lstPet.pop().id;
  }


}
