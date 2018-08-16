import firestore from '@/firebase/firestore-init'

const notesRef = firestore.collection('notes')

export default {
  async getTitle(noteId) {
    const querySnapshot = await notesRef.doc(noteId).get()
    const title = querySnapshot.data().title
    return title
  },
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
      title: note.title,
      content: note.content,
      tags: note.tags
    })
  }
}
