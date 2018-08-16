import firestore from '@/firebase/firestore-init'

const notesRef = firestore.collection('notes')

export default {
  async getTags(noteId) {
    const querySnapshot = await notesRef.doc(noteId).get()
    const tags = querySnapshot.data().tags
    return tags
  }
}
