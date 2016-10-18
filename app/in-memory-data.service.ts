import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Keg } from './keg.model';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let kegs = [new Keg("name", "brand", 1, 1 )];
    return {kegs};
  }
}
