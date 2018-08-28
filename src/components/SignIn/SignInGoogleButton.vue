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

      const params = this.getUrlParams()
      const fromPath = params.p
      if (user) {
        location.replace('/' + fromPath)
      } else {
        this.$emit('signinFailed') // TODO ここかく & signin View 作る
      }
    },
    createUidCookie(uid, day = 30) {
      const maxAge = day * 24 * 60 * 60
      const encodedUid = encodeURIComponent(uid)
      return `brain_uid=${encodedUid}; max-age=${maxAge}`
    },
    getUrlParams() {
      const params = {}
      const hash = location.search.slice(1).split('&')

      for (let param of hash) {
        const kv = param.split('=') // key valueに分割
        params[kv[0]] = kv[1] // key:value の連想配列として格納
      }
      return params
    }
  }
}
</script>
