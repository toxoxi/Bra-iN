<template>
  <div>
    <sign-in-google-button />
  </div>
</template>

<script>
import SignInGoogleButton from '@/components/SignIn/SignInGoogleButton'

export default {
  name: 'SignInView',
  components: {
    SignInGoogleButton
  }
}
</script>
