<template>
  <div>
    <div class="w-full max-w-xs md:max-w-full">
      <form class="bg-gray-900 shadow-2xl shadow-gray-800 rounded px-10 pt-6 pb-8 mb-4">
        <div class="mb-4 br-1">
          <label class="text-white text-sm font-bold mb-2" for="username">
            使用者名稱
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
        </div>

        <div class="mb-6">
          <label class="text-white text-sm font-bold mb-2" for="password">
            密碼
          </label>
          <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
          <p class="text-red-500 text-xs italic">請輸入密碼</p>
        </div>

        <div class="flex items-center justify-between">
          <button class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            登入
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            忘記密碼？
          </a>
        </div>
        <div class="flex items-center justify-end">
          <a class="align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            還沒有帳號嗎？點此註冊！
          </a>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2022 InMind. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    name: String
  },
  data() {
    return {
    }
  }
}
</script>
