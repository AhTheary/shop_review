<template>
  <div class="input-comment">
    <input type="text"  placeholder="What are you thinking?" v-model="comment" />
    <input type="submit" @click="subComment" />
  </div>
</template>

<script>
export default {
  name: 'CommentPosts',
  props: ['feedcard'],
  data() {
    return {
      comment:''
    }
  },
  methods: {
      async subComment() {
      const res = await fetch(`http://localhost:3001/comment/create`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userpostId: this.feedcard._id,
          usercommentId: this.feedcard.userId._id,
          comment: this.comment,
        }),
      });

      const resData = await res.json();
      location.reload()
    },

  },
}
</script>

<style scoped></style>
