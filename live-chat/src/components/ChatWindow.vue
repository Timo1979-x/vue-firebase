<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messagesDiv">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
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
import { computed, ref } from "@vue/reactivity";
import { onUpdated } from "@vue/runtime-core";
export default {
  setup() {
    const messagesDiv = ref(null);
    onUpdated(() => {
      // const arr = messageDivs.value;
      // if (!arr.length) return;
      // const topPos = arr[arr.length - 1].offsetTop;
      messagesDiv.value.scrollTop = messagesDiv.value.scrollHeight;
    });
    const { documents, error } = getCollection("messages");
    const formattedDocuments = computed(() => {
      if (!documents.value) {
        return null;
      }
      return documents.value.map((doc) => {
        let ft = formatDistanceToNow(doc.createdAt.toDate());
        return { ...doc, createdAt: ft };
      });
    });
    return { formattedDocuments, error, documents, messagesDiv };
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
