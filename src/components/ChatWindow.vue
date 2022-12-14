<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div class="messages" v-if="documents" ref="messagesRef">
      <div v-for="doc in formattedDocs" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "@vue/runtime-core";

export default {
  setup() {
    const { documents, error } = getCollection("messages");

    // we are creating a new computed property based on something that already exists
    const formattedDocs = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });

    // auto scroll to the bottom of the messages
    const messagesRef = ref(null); //it is going to reference the DOM elements of div with messages class

    onUpdated(() => {
      messagesRef.value.scrollTop = messagesRef.value.scrollHeight;
    });

    return { documents, error, formattedDocs, messagesRef };
  },
};
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>