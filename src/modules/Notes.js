import firestore from '@/firebase/firestore-init'

const notesRef = firestore.collection('notes')

export default {
  async getTags(id) {
    const querySnapshot = await notesRef.where('id', '==', id).get()
    const tags = querySnapshot.docs[0].data().tags
    return tags
  }
}
