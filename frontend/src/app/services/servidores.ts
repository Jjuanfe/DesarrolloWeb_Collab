import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ServidoresService{
    private apiUrl = 'http://127.0.0.1:8000/api/v1/'
    constructor(private http: HttpClient) {}
    getServidores(): Observable <any> {
        return this.http.get(this.apiUrl)
    }
}