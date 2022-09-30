import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MsgApiService {
 

  constructor(private http: HttpClient) {}

  // url = "https://community-purgomalum.p.rapidapi.com/json";

  // headers = {
  //         'X-RapidAPI-Key': 'e53afc07c3msh81aee51efbd4478p127da5jsn367377a143a7',
  //         'X-RapidAPI-Host': 'community-purgomalum.p.rapidapi.com',
  //       }

  //       getApi(){
  //         let temp = '';
  //         return this.http.get<any>(this.url);

  //       }
      

  filterApi(input: string):string {
    let temp: string = '';
    const options = {
      method: 'GET',
      url: 'https://community-purgomalum.p.rapidapi.com/json',
      params: { text: input },
      headers: {
        'X-RapidAPI-Key': '************************************',
        'X-RapidAPI-Host': 'community-purgomalum.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.result);
        temp = response.data.result;
        return temp;
      })
      .catch(function (error) {
        console.error(error);
        return error;
      });
      return temp;
  }





 



 
  
}




