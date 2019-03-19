import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQBuERUpKOioY7BtsZBpX4bfGGNmKYeaCrnjn2eR-DujLVPs_X9Nn19iw9Q1Iik49YNK0YO0K0Zf9gdUi1raBzn8NTsex48dkYWGyYlGXE2ubsJTv4sBH2G6bQq742kjUUsmVp4Kznryrqz_SYCwX71JQ5kS9qnsog"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
