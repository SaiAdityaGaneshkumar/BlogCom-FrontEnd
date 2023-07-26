import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogCommCreate } from '../models/blogcomm/blogcommcreate.model';
import { Observable } from 'rxjs';
import { BlogComm } from '../models/blogcomm/blogcomm.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BlogcommService {

  constructor(
    private http: HttpClient
  ) { }

  create(model: BlogCommCreate) : Observable<BlogComm>  {
    return this.http.post<BlogComm>(`${environment.webApi}/BlogComm`, model);
  }

  delete(blogCommentId: number) : Observable<number>  {
    return this.http.delete<number>(`${environment.webApi}/BlogComm/${blogCommentId}`);
  }

  getAll(blogId: number) : Observable<BlogComm[]> {
    return this.http.get<BlogComm[]>(`${environment.webApi}/BlogComm/${blogId}`);
  }
}
