import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ServerService {

    url = 'https://angular-http-d1f99.firebaseio.com/';

    constructor(private http: Http) {

    }

    storeServer(servers: any[]){
        return this.http.post(this.url+'data.json', servers);
    }
}