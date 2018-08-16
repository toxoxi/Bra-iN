import firestore from '@/firebase/firestore-init'

const usersRef = firestore.collection('users')

export default {
  async getTagHistory(userName) {
    const querySnapshot = await usersRef.doc(userName).get()
    const tagHistory = querySnapshot.data().tagHistory
    return tagHistory
  },
  async saveTags(userName, tags) {
    const tagHistory = await this.getTagHistory(userName)
    tags.forEach(tag => {
      if (tagHistory.indexOf(tag) > 0) return
      tagHistory.push(tag)
    })
    tagHistory.sort()

    await usersRef.doc(userName).update({ tagHistory })
  }
}
