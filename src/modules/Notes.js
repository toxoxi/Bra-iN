import firestore from '@/firebase/firestore-init'

const notesRef = firestore.collection('notes')

export default {
  async getNote(noteId) {
    const querySnapshot = await notesRef.doc(noteId).get()
    return querySnapshot.data()
  },
  async saveContent(note) {
    await notesRef.doc(note.id).update({
      title: note.title,
      content: note.content,
      tags: note.tags
    })
  }
}
