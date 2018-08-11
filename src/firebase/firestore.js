import Firebase from 'firebase'
import 'firebase/firestore'
import config from '@/api-config/firebaseConfig'

const firebaseApp = Firebase.initializeApp(config)
const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firestore
