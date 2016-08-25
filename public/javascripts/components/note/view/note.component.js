System.register(["angular2/core", "../note.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, note_service_1;
    var NoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (note_service_1_1) {
                note_service_1 = note_service_1_1;
            }],
        execute: function() {
            NoteComponent = (function () {
                function NoteComponent(noteService) {
                    this.noteService = noteService;
                    this.task = "My todo";
                    this.status = "New";
                    this.completed = false;
                    this.editable = false;
                }
                NoteComponent.prototype.ngOnInit = function () {
                    this.status === 'Completed' ? this.completed = true : this.completed = false;
                };
                NoteComponent.prototype.changeEditable = function () {
                    this.editable = !this.editable;
                };
                NoteComponent.prototype.updateNote = function () {
                    var note = {
                        _id: this._id,
                        task: this.task,
                        status: this.status
                    };
                    this.noteService.updateNote(note);
                };
                NoteComponent.prototype.editTask = function () {
                    this.editable = !this.editable;
                    this.updateNote();
                };
                NoteComponent.prototype.removeNote = function (id) {
                    console.log(id);
                    this.noteService.deleteNote(id);
                };
                NoteComponent.prototype.setTaskStatus = function () {
                    this.completed = !this.completed;
                    this.completed ? this.status = "Completed" : this.status = "New";
                };
                //handle status changing events
                NoteComponent.prototype.changeTaskStatus = function (ev) {
                    this.setTaskStatus();
                    this.updateNote();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], NoteComponent.prototype, "_id", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], NoteComponent.prototype, "task", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], NoteComponent.prototype, "status", void 0);
                NoteComponent = __decorate([
                    core_1.Component({
                        selector: 'note',
                        templateUrl: "/partials/components/note/view/note-component",
                        styleUrls: ['javascripts/components/note/view/note-component.css'],
                    }), 
                    __metadata('design:paramtypes', [note_service_1.NoteService])
                ], NoteComponent);
                return NoteComponent;
            }());
            exports_1("NoteComponent", NoteComponent);
        }
    }
});
//# sourceMappingURL=note.component.js.map