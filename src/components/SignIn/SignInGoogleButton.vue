<template>
  <button @click="signinWithGoogle">
    <img src="@/assets/btn_google_signin_light_normal_web.png">
  </button>
</template>

<script>
import firebase from 'firebase'
import Users from '@/modules/Users'

export default {
  name: 'SignInGoogleButton',
  methods: {
    async signinWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      const userAuth = await firebase
        .auth()
        .signInWithPopup(provider)
        .catch(err => {
          console.error(err)
          return null
        })
      if (userAuth || userAuth.additionalUserInfo.isNewUser) {
        Users.registerUser(userAuth.user)
      }

      const user = firebase.auth().currentUser

      const uidCookie = this.createUidCookie(user.uid)
      document.cookie = uidCookie

      if (user) {
        this.$router.push({ path: `/list/` })
      } else {
        this.$router.push({ path: '/' })
      }
    },
    createUidCookie(uid, day = 30) {
      const maxAge = day * 24 * 60 * 60
      const encodedUid = encodeURIComponent(uid)
      return `brain_uid=${encodedUid}; max-age=${maxAge}`
    }
  }
}
</script>
