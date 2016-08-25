/**
 * Created by D on 20.6.2016 �..
 */
import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import {NoteComponent} from "./note/view/note.component"
import {NoteListComponent} from "./note/note.list.component"
import {CreateNoteComponent} from "./note/create/create.note.component"
import {NoteService} from './note/note.service'

@Component({
    selector: 'td-app',
    templateUrl: "/partials/components/app-component",
    directives: [NoteListComponent, CreateNoteComponent],
    providers: [HTTP_PROVIDERS, NoteService]

})

export class AppComponent{
    title: string = "TODO Application";
    subtitle: string = "Simple application 123";
}