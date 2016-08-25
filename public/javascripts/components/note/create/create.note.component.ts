import { Component } from "angular2/core"
import {NoteService} from "../note.service";

@Component({
    selector : 'create-note',
    templateUrl: '/partials/components/note/create/create-note',
    styleUrls: ['javascripts/components/note/create/create-note.css']
})

export class CreateNoteComponent{
    task: string;

    constructor(private _noteService: NoteService){

    }

    saveNote(): void {
        var note = {
            status : "New",
            task : this.task
        };

        this._noteService.saveNote(note)
            .subscribe(
                () => this.task = ''
            );
    }



}