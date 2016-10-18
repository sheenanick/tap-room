import { Injectable } from '@angular/core';
// import { Subject }    from 'rxjs/Subject';
import { Keg } from './keg.model';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class KegService {
  private kegsUrl = 'app/kegs';

  constructor(private http: Http) {

  }

  public getKegs(): Promise<Keg[]> {
    // return Promise.resolve(this.masterKegList);
    return this.http.get(this.kegsUrl)
      .toPromise()
      .then(response => response.json().data as Keg[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
}

  public addKeg(kegToAdd) {

  }


}
