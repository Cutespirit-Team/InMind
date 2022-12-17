<template>
  {{ type }}
  <header class="md:h-44 h-32 justify-items-center items-center">
    <img
      src="@/assets/logo.png"
      class="mx-auto md:h-36 h-24 w-auto"
      alt=""
    />
    <p class="text-white text-center">免費交友</p>
  </header>

  <section class="w-full flex justify-center">
    <LoginForm v-if="this.$route.params.type === 'signin'"></LoginForm>
    <SignupForm v-if="this.$route.params.type === 'signup'"></SignupForm>
  </section>

  <footer v-if="!$route.params.type" class="relative top-5 w-full flex items-center justify-center">
    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" @click="this.$router.push({ path: `/login/signin` })">
      <span class="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          登入
      </span>
    </button>

    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" @click="this.$router.push({ path: `/login/signup` })">
      <span class="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        註冊
      </span>
    </button>
  </footer>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import SignupForm from '../components/SignupForm.vue'

export default {
  components: {
    LoginForm,
    SignupForm
  },
  data() {
    return {
    }
  },
  created() {
  }
}
</script>
