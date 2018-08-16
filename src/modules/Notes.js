import firestore from '@/firebase/firestore-init'

const notesRef = firestore.collection('notes')

export default {
  async getTags(noteId) {
    const querySnapshot = await notesRef.doc(noteId).get()
    const tags = querySnapshot.data().tags
    return tags
  },
  async getContent(noteId) {
    const querySnapshot = await notesRef.doc(noteId).get()
    const content = querySnapshot.data().content
    return content
  },
  async saveContent(note) {
    await notesRef.doc(note.id).update({
      content: note.content
    })
  }
}
