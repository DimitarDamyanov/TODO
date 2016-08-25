/**
 * Created by D on 23.6.2016 г..
 */
import {Http, Response, Headers} from "angular2/http"
import {Observable} from "rxjs/Observable"
import {Injectable, Output, EventEmitter} from "angular2/core"
import {INote} from "./INote";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class NoteService {
    private notes: String[] = [];
    private _noteUrl = "http://localhost:3000/note";
    @Output() noteSavedEvent = new EventEmitter(true);
    @Output() noteDeletedEvent = new EventEmitter(true);


    constructor(private  _http: Http){}

    public getNotes() : Observable<INote[]> {
        return this._http.get(this._noteUrl)
            .map((response: Response) =>  <INote[]> response.json())
            .do(data => console.log(data))

    }

    public saveNote(note) : Observable<INote> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post(this._noteUrl, JSON.stringify(note), {headers: headers})
            .map((response) => <INote> response.json())
            .do(data => this.noteSavedEvent.emit(data));
   }

    public deleteNote(id : string) : any {
        this._http.delete([this._noteUrl, id].join('/')).subscribe(res => this.noteDeletedEvent.emit(id));
    }

    public updateNote(note) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this._http.put([this._noteUrl, note._id].join('/'), JSON.stringify(note), {headers: headers}).subscribe(res => console.log(res))
    }

    private handleError(error: Response){
        console.log(error);
    }

    // public getNotes(): String[] {
    //     return this.notes;
    // }

    // public add(note){
    //     this.notes.push(note);
    //     this.noteAdded$.emit(note);
    // }
    //


    // getAllNotes(){
    //     let storage = localStorage.getItem("todoApp");
    //     return JSON.parse(storage) || [];
    // }
    //
    // saveNote(note){
    //     //check if todo app storage exists
    //     let notes = JSON.parse(localStorage.getItem("todoApp"));
    //     if(!notes)
    //         localStorage.setItem("todoApp", JSON.stringify([note]));
    //     if(typeof notes !== "object"){
    //         notes = [];
    //     }
    //     notes.push(note);
    //     localStorage.setItem("todoApp", JSON.stringify(notes));
    // }
}
