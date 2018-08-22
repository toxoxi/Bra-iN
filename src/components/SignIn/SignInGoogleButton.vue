<template>
  <button @click="signinWithGoogle">
    <img src="@/assets/btn_google_signin_light_normal_web.png">
  </button>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'SignInGoogleButton',
  methods: {
    async signinWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      const result = await firebase
        .auth()
        .signInWithPopup(provider)
        .catch(err => {
          console.error(err)
          return err
        })
      console.log(result)
    }
  }
}
</script>
