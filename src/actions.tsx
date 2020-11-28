export const addNoteAction = (note: string) => {
    return {
        type: 'ADD_NOTE',
        payload: note
    }
}