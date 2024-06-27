<script>
export default {
  data() {
    return {
      chat1: ['hello there!'],
      chat2: [],
      chat: [{ id: 'Ario', message: `Hi :) This is a dummy chat room where you can pretend to send messages as two different people. The message you're seeing here is being sent by the first person. There are two inputs bellow, the top one is for person one, and the second input for person two.`, timestamp: Date.now() }],
      message1: '',
      message2: ''
    }
  },
  methods: {
    scrollToBottom() {
      const chatBox = this.$refs.chatBox;
      chatBox.scrollTop = chatBox.scrollHeight;
    },
    send1() {
      if (this.message1.trim()) {
        let text = this.message1
        this.chat1.push(text)
        this.chat.push({
          id: 'Ario',
          message: this.message1,
          timestamp: Date.now()
        })
        this.message1 = ''
        this.$nextTick(() => {
        this.scrollToBottom();
      });
      } else {
        console.log('cannot be empty')
      }
    },
    send2() {
      if (this.message2.trim()) {
        let text = this.message2
        this.chat2.push(text)
        this.chat.push({
          id: 'Hana',
          message: this.message2,
          timestamp: Date.now()
        })
        this.message2 = ''
        this.$nextTick(() => {
        this.scrollToBottom();
      });
      } else {
        console.log('cannot be empty')
      }
    }
  }
}
</script>

<template>
  <div class="flex flex-col bg-primary-gray-1 text-primary-gray-2 mx-auto w-[60%]">
    <div class="bg-yellow-300 h-[70vh] lg:h-[90vh] relative">
      Person 1's phone
      <div ref="chatBox" class="flex flex-col max-h-[60vh] overflow-scroll">
        <!-- class="bg-blue-200 my-3 max-w-[60%] p-1 px-3 rounded-lg ml-4 flex-col" -->
        <div
          v-for="item in chat"
          :key="item.id"
          :class="
            item.id == 'Ario'
              ? 'bg-blue-200 my-1 max-w-[60%] p-1 px-3 rounded-lg ml-4 self-start flex-col'
              : 'bg-red-200 my-1 max-w-[60%] p-1 px-3 rounded-lg mr-4 flex-col self-end'
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
      </div>
      <div class="bg-white min-w-full grid grid-flow-col col-span-12 absolute bottom-0">
        <textarea class="col-span-10" v-model="message1" @keyup.enter="send1">asdf</textarea>
        <button class="bg-green-200 p-4" @click="send1">Send</button>
      </div>
    </div>

    <div class="w-1/2 bg-red-100 flex flex-col justify-center h-[20vh] lg:h-full">
      Person 2's Phone
      <div>
        <div class="min-w-full grid grid-flow-col col-span-12 px-4">
          <textarea class="col-span-10" v-model="message2" @keyup.enter="send2">asdf</textarea>
          <button class="bg-green-200 p-4" @click="send2(message2)">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>
