<template>
  <div>
    <div class="w-full max-w-xs md:max-w-full">
      <form class="bg-gray-900 shadow-2xl shadow-gray-800 rounded px-10 pt-6 pb-8 mb-4">
        <div class="flex items-center justify-between">
          <div class="mb-4 mr-1">
            <label class="text-white text-sm font-bold mb-2" for="first-name">
              姓氏
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first-name" type="text" placeholder="你的姓氏">
          </div>

          <div class="mb-4">
            <label class="text-white text-sm font-bold mb-2" for="last-name">
              名字
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last-name" type="text" placeholder="你的名字">
          </div>
        </div>

        <div class="mb-4">
          <label class="text-white text-sm font-bold mb-2" for="Username">
            使用者名稱
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Username" type="text" placeholder="請輸入你的使用者名稱">
        </div>

        <div class="mb-6">
          <label class="block text-white text-sm font-bold mb-2" for="password">
            密碼
          </label>
          <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
          <p class="text-red-500 text-xs italic">請輸入密碼</p>
        </div>

        <div class="mb-6">
          <label class="text-white text-sm font-bold mb-2" for="password">
            重新輸入密碼
          </label>
          <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
          <p class="text-red-500 text-xs italic">請重新輸入密碼</p>
        </div>

        <div class="flex items-center justify-between">
          <button class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            註冊
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            已經有帳號了？立刻登入！
          </a>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupForm',
  props: {
    name: String
  },
  data() {
    return {
    }
  }
}
</script>
