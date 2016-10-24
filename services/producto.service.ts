import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import 'rxjs/add/operator/toPromise'


@Injectable()
export class ProductoService {
    public url = 'http://laracars.com/auth/';
    headers = new Headers();
    constructor(private _http: Http) {
    }

    getDestacados() {
        return this._http.get(this.url + 'producto/destacados')
            .toPromise()
            .then(respuesta => respuesta.json());
    }
}