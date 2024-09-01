import { Injectable } from '@angular/core';
import {createClient,Entry} from 'contentful';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }
  private client=createClient({
    space:'hgain73xzi3x',
    accessToken:'rHsV_hN6Qo5YoKK8ttNsHqGKmSqQ5f8C19IF9cXKX2k'
});
// getAllEntries(p0: { content_type: string; })
// {
//   const promise=this.client.getEntries();
//   return from(promise);
// }
// In your contentfulService
getAllEntries(query?: any): Observable<any> {
  return from(this.client.getEntries(query)); // Assuming `this.client` is your Contentful client
}


}
