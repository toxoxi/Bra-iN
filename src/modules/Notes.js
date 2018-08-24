import firestore from '@/firebase/firestore-init'

const notesRef = firestore.collection('notes')

export default {
  async createNote(data) {
    const createdNoteRef = await notesRef.add({
      title: data.title,
      tags: data.tags,
      user: {
        name: 'yorori'
      }
    })
    return createdNoteRef.id
  },
  async getNote(noteId) {
    const querySnapshot = await notesRef.doc(noteId).get()
    return querySnapshot.data()
  },
  async getUserNotes(uid) {
    const querySnapshot = await notesRef.where('user.uid', '==', uid).get()
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
