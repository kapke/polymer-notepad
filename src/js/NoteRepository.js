export class NoteRepository {
    getNotes () {
        return Promise.resolve([
            {title: 'New note'},
            {title: 'Second note'}
        ]);
    }
}