System.register(["angular2/core", "./view/note.component", "./note.service"], function(exports_1, context_1) {
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
    var core_1, note_component_1, note_service_1;
    var NoteListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (note_component_1_1) {
                note_component_1 = note_component_1_1;
            },
            function (note_service_1_1) {
                note_service_1 = note_service_1_1;
            }],
        execute: function() {
            NoteListComponent = (function () {
                function NoteListComponent(_noteService) {
                    this._noteService = _noteService;
                }
                NoteListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._noteService.getNotes()
                        .subscribe(function (notes) { return _this.notes = notes; }, function (error) { return _this.errorMsg = error; });
                    this._noteService.noteSavedEvent.subscribe(function (note) { return _this.notes.push(note); });
                    this._noteService.noteDeletedEvent.subscribe(function (id) {
                        _this.notes.forEach(function (note, index) {
                            if (note._id == id)
                                _this.notes.splice(index, 1);
                        });
                    });
                };
                NoteListComponent = __decorate([
                    core_1.Component({
                        selector: 'note-list',
                        templateUrl: '/partials/components/note/note-list',
                        styleUrls: ['javascripts/components/note/note-list.css'],
                        directives: [note_component_1.NoteComponent]
                    }), 
                    __metadata('design:paramtypes', [note_service_1.NoteService])
                ], NoteListComponent);
                return NoteListComponent;
            }());
            exports_1("NoteListComponent", NoteListComponent);
        }
    }
});
//# sourceMappingURL=note.list.component.js.map