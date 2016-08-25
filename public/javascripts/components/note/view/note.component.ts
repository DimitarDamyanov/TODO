/**
 * Created by D on 21.6.2016 г..
 */
import {Component, Input} from "angular2/core"
import {NoteService} from "../note.service";

@Component({
    selector: 'note',
    templateUrl: "/partials/components/note/view/note-component",
    styleUrls: ['javascripts/components/note/view/note-component.css'],
})

export class NoteComponent{
    @Input() _id : string;
    @Input() task : string  = "My todo";
    @Input() status : string = "New";
    completed: boolean = false;
    editable: boolean = false;

    constructor(private noteService: NoteService){}

    changeEditable(){
        this.editable = !this.editable;
    }

    updateNote(){
        var note = {
            _id : this._id,
            task : this.task,
            status : this.status
        };

        this.noteService.updateNote(note);

        this.editable = !this.editable;
    }
    
    removeNote(id){
        console.log(id);
        this.noteService.deleteNote(id);
    }
    
    setTaskStatus(){
        this.completed = !this.completed;
    }

    //handle status changing events
    changeTaskStatus(ev){
        this.setTaskStatus();
    }
}
