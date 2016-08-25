/**
 * Created by D on 21.6.2016 г..
 */
import {Component, Input} from "angular2/core"
import { NoteComponent} from "./view/note.component"
import {NoteService} from "./note.service";
import {INote} from "./INote";

@Component({
    selector: 'note-list',
    templateUrl: '/partials/components/note/note-list',
    styleUrls: ['javascripts/components/note/note-list.css'],
    directives: [NoteComponent]
})

export class NoteListComponent {
    notes : INote[];
    errorMsg : string;

    constructor(private _noteService: NoteService) {}

    ngOnInit(): void {
        this._noteService.getNotes()
            .subscribe(
                notes => this.notes = notes,
                error => this.errorMsg = <any> error);

        this._noteService.noteSavedEvent.subscribe(note => this.notes.push(note));

        this._noteService.noteDeletedEvent.subscribe(id =>
                {this.notes.forEach((note, index) => {
                    if( note._id == id) this.notes.splice(index, 1);
                })});
    }
}