import firestore from '@/firebase/firestore-init'

const notesRef = firestore.collection('notes')

export default {
  async getNote(noteId) {
    const querySnapshot = await notesRef.doc(noteId).get()
    return querySnapshot.data()
  },
  async getUserNotes(userName) {
    const querySnapshot = await notesRef
      .where('user.name', '==', userName)
      .get()
    return querySnapshot.docs.map(doc => {
      const data = doc.data()
      data.id = doc.id
      return data
    })
  },
  async saveContent(note) {
    await notesRef.doc(note.id).update({
      title: note.title,
      content: note.content,
      tags: note.tags
    })
  }
}
