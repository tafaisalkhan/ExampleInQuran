import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DuaServiceProvider {

  
      constructor (private http: Http, public afd: AngularFireDatabase) {}

      getExampleList(){
        return this.afd.list('app_data')
      }

       getQuranExample() : Observable<any>{
       
        return this.http.get("assets/json/quranExample.json")
    
                        .map((res:Response) => res.json())
                      
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

}
