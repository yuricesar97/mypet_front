import { Pipe, PipeTransform } from '@angular/core';
import { PessoaFisica } from 'src/app/pessoa/pessoa-fisica';


@Pipe({ name: 'filtroPeloNomePetClient' })
export class FiltroPeloNome implements PipeTransform {

    transform(petclients: PessoaFisica[], nomeQuery: string) {
        nomeQuery = nomeQuery.trim().toLowerCase();
        if(nomeQuery) {
            return petclients.filter(petclient =>
                petclient.nomeCompleto.toLowerCase().includes(nomeQuery)
            );
        } else {
            return petclients;
        }
    }

}
