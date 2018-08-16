import firestore from '@/firebase/firestore-init'

const usersRef = firestore.collection('users')

export default {
  async getTagHistory(userName) {
    const querySnapshot = await usersRef.doc(userName).get()
    const tagHistory = querySnapshot.data().tagHistory
    return tagHistory
  }
}
