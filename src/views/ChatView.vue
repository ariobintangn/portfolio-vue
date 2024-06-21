<script>
export default {
  data() {
    return {
      chat1: ["hello there!"],
      chat2: [],
      chat: [{ id: "Ario", message: "Hi ;)", timestamp: Date.now() }],
      message1: "",
      message2: "",
    };
  },
  methods: {
    send1() {
      if (this.message1.trim()) {
        let text = this.message1;
        this.chat1.push(text);
        this.chat.push({
          id: "Ario",
          message: this.message1,
          timestamp: Date.now(),
        });
        this.message1 = "";
      } else {
        console.log("cannot be empty");
      }
    },
    send2() {
      if (this.message2.trim()) {
        let text = this.message2;
        this.chat2.push(text);
        this.chat.push({
          id: "Hana",
          message: this.message2,
          timestamp: Date.now(),
        });
        this.message2 = "";
      } else {
        console.log("cannot be empty");
      }
    },
  },
};
</script>

<template>
  <div class="w-screen flex flex-row bg-primary-gray-1 text-primary-gray-2 mx-auto">
    <div class="w-1/2 bg-yellow-300 min-h-[90vh] relative">
      left screen
      <div class="flex flex-col">
        <!-- class="bg-blue-200 my-3 max-w-[60%] p-1 px-3 rounded-lg ml-4 flex-col" -->
        <div
          v-for="item in chat"
          :key="item.id"
          :class="
            item.id == 'Ario'
              ? 'bg-blue-200 my-3 max-w-[60%] p-1 px-3 rounded-lg ml-4 flex-col'
              : 'bg-red-200 my-3 max-w-[60%] p-1 px-3 rounded-lg mr-4 flex-col self-end'
          "
        >
          <p class="text-xs text-gray-500">{{ item.id }}</p>
          <p>
            {{ item.message }}
          </p>
          <p class="text-xs text-gray-400 text-end">
            {{ item.timestamp }}
          </p>
        </div>
        <div class="bg-white min-w-full grid grid-flow-col col-span-12 sticky">
          <textarea class="col-span-10" v-model="message1">asdf</textarea>
          <button class="bg-green-200 p-4" @click="send1(message1)">Send</button>
        </div>
      </div>
    </div>

    <div class="w-1/2 bg-red-100">
      right screen
      <div>
        <div class="bg-white min-w-full grid grid-flow-col col-span-12">
          <textarea class="col-span-10" v-model="message2">asdf</textarea>
          <button class="bg-green-200 p-4" @click="send2(message2)">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>
