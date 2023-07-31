import { PessoaService } from 'src/app/pessoa/pessoa.service';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { BuscarFornecedoresComponent } from '../buscar-fornecedores.component';
import { PesquisarService } from 'src/app/home/home.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Input, OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-resultado-fornecedor',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  @Input() forns: PessoaJuridica[] = [];
  servicos: ServicoEForn[] = [];
  public forn: PessoaJuridica = new PessoaJuridica();
  searchText: string;
  aux: PessoaJuridica[] = [];

  constructor(private service: PesquisarService,
    private router: Router) {
    this.router = router;
    this.searchText = '';
  }

  ngOnInit() {

    this.aux = this.service.forns;
    for(const element of this.aux){
      if(element.razaoSocial != 'Administrador Geral'){
        if(element.situacaoAprovacao  === 'Aprovado'){
          this.forns.push(element);
        }
      }
    }
  }

  listarServicosPrestados() {
    for (const element of this.forns) {
      if (element.acupuntura == 'acupuntura') {
        this.servicos.push({label: 'adestramento', name: 'Adestramento', idProvider: element.id })
      }
      if (element.adestramento == 'adestramento') {
        this.servicos.push({ label: 'adestramento', name: 'Adestramento', idProvider: element.id  })
      }
      if (element.banhoETosa == 'banhoETosa') {
        this.servicos.push({ label: 'banhoETosa', name: 'Banho/Tosa', idProvider: element.id  })
      }
      if (element.cirurgiaGeral == 'cirurgiaGeral') {
        this.servicos.push({ label: 'cirurgiaGeral', name: 'Cirurgia Geral', idProvider: element.id  })
      }
      if (element.consulta == 'consulta') {
        this.servicos.push({ label: 'consulta', name: 'Consulta', idProvider: element.id  })
      }
      if (element.creche == 'creche') {
        this.servicos.push({ label: 'creche', name: 'Creche', idProvider: element.id  })
      }
      if (element.ensaioFotografico == 'ensaioFotografico') {
        this.servicos.push({ label: 'ensaioFotografico', name: 'Ensaio Fotográfico', idProvider: element.id  })
      }
      if (element.hidratacao == 'hidratacao') {
        this.servicos.push({ label: 'hidratacao', name: 'Hidratação', idProvider: element.id  })
      }
      if (element.hotel == 'hotel') {
        this.servicos.push({ label: 'hotel', name: 'Hotel', idProvider: element.id  })
      }
      if (element.massagem == 'massagem') {
        this.servicos.push({ label: 'massagem', name: 'Massagem', idProvider: element.id  })
      }
      if (element.penteadosArtisticos == 'penteadosArtisticos') {
        this.servicos.push({ label: 'penteadosArtisticos', name: 'Penteados Artísticos', idProvider: element.id  })
      }
      if (element.petwalk == 'petwalk') {
        this.servicos.push({ label: 'petwalk', name: 'Pet Walk', idProvider: element.id  })
      }
      if (element.spa == 'spa') {
        this.servicos.push({ label: 'spa', name: 'SPA', idProvider: element.id  })
      }
      if (element.taxi == 'taxi') {
        this.servicos.push({ label: 'taxi', name: 'Táxi', idProvider: element.id  })
      }
      if (element.tosaExotica == 'tosaExotica') {
        this.servicos.push({ label: 'tosaExotica', name: 'Tosa Exótica', idProvider: element.id  })
      }
      if (element.vacinacao == 'vacinacao') {
        this.servicos.push({ label: 'vacinacao', name: 'Vacinação', idProvider: element.id  })
      }
      if (element.exames == 'exames') {
        this.servicos.push({ label: 'exames', name: 'Exames', idProvider: element.id  })
      }
    }
  }

  pesquisarForn(){
    this.service.getForns(this.forn);
  }

  pesquisarDetalhes(forn: PessoaJuridica) {
    this.router.navigate(['home', 'detalhes', forn.id]);
  }
}

