import {Subject, Observable} from 'rxjs';


export class NoteRepository {
    constructor () {
        this._notes = [];
        this._notes$ = new Subject();
    }

    addNote (note) {
        this._notes = this._notes.concat([note]);
        this._notes$.next(this._notes);

        return Observable.of(null);
    }

    getNotes$ () {
        return this._notes$;
    }
}