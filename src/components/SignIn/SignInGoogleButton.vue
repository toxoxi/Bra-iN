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
      const authResult = await firebase
        .auth()
        .signInWithPopup(provider)
        .catch(err => {
          console.error(err)
          return null
        })
      if (authResult.additionalUserInfo.isNewUser) {
        Users.registerUser(authResult.user)
      }
    }
  }
}
</script>
