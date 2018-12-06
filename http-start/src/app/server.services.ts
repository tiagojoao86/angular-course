import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class ServerService {

    url = 'https://angular-http-d1f99.firebaseio.com/';

    constructor(private http: Http) {

    }

    storeServer(servers: any[]){
        const headers = new Headers({'Content-Type': 'application/json'});
        // return this.http.post(
        //     this.url+'data.json', 
        //     servers, 
        //     {headers: headers}
        // );
        return this.http.put(
            this.url+'data.json', 
            servers, 
            {headers: headers}
        );
    }

    getServers() {
        return this.http.get(
            this.url+'data'
        ).map(
            (response: Response) => {
                const data = response.json();                
                return data;
            }
        ).catch(
            (error: Response) => {                
                return Observable.throw('Someting went wrong');
            }
        );
    }

    getAppName(){
        return this.http.get('https://angular-http-d1f99.firebaseio.com/appName.json')
            .map(
                (response: Response) => {
                    return response.json();
                }
            );
    }
}