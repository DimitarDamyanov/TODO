System.register(["angular2/http", "angular2/core", 'rxjs/add/operator/map', 'rxjs/add/operator/do', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var NoteService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {}],
        execute: function() {
            NoteService = (function () {
                function NoteService(_http) {
                    this._http = _http;
                    this.notes = [];
                    this._noteUrl = "http://localhost:3000/note";
                    this.noteSavedEvent = new core_1.EventEmitter(true);
                    this.noteDeletedEvent = new core_1.EventEmitter(true);
                }
                NoteService.prototype.getNotes = function () {
                    return this._http.get(this._noteUrl)
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log(data); });
                };
                NoteService.prototype.saveNote = function (note) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.post(this._noteUrl, JSON.stringify(note), { headers: headers })
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return _this.noteSavedEvent.emit(data); });
                };
                NoteService.prototype.deleteNote = function (id) {
                    var _this = this;
                    this._http.delete([this._noteUrl, id].join('/')).subscribe(function (res) { return _this.noteDeletedEvent.emit(id); });
                };
                NoteService.prototype.updateNote = function (note) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    this._http.put([this._noteUrl, note._id].join('/'), JSON.stringify(note), { headers: headers }).subscribe(function (res) { return console.log(res); });
                };
                NoteService.prototype.handleError = function (error) {
                    console.log(error);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], NoteService.prototype, "noteSavedEvent", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], NoteService.prototype, "noteDeletedEvent", void 0);
                NoteService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], NoteService);
                return NoteService;
            }());
            exports_1("NoteService", NoteService);
        }
    }
});
//# sourceMappingURL=note.service.js.map