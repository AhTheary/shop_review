<template>
  <div>
    <div class="wrapper_body_review">
      <div class="box_card_feed" v-for="feedcard in postInfo" :key="feedcard._id">
        <div class="box_card_left">
          <div class="user-name">
            <div class="icon-user">
              <i class="bx bxs-user-circle"></i>
            </div>
            <div class="username_location">
              <div class="username" style="margin-top: 1.5%;">
                <span>{{ feedcard.userId.username }}</span>
              </div>
              <div class="location">

                <img 
                  src="../assets/locator_post.png" 
                  style="opacity: 50%; height: 25%" 
                  alt="" 
                />
                <div
                  style="
                    font-weight: 500;
                    font-size: 11px;
                    margin-left: 2px;
                    opacity: 50%;
                  "
                >
                   {{ feedcard.location }}
                </div>
              </div>
            </div>
            <div class="icon-like" @click="like">
              <button class="btn" id="green"><i class="fa fa-thumbs-up fa-lg" aria-hidden="true"></i></button>
              <button class="btn" id="red"><i class="fa fa-thumbs-down fa-lg" aria-hidden="true"></i></button>
            </div>
          </div>
          <div class="descrition-post" style="margin-top: 4px">
            <span>
              {{ feedcard.status }}
            </span>
          </div>
          <div class="img-post">
            <img 
              :src="feedcard.image" 
              alt="erorUserpost" 
              style="width: 100%; height: 100%;" 
              />
          </div>
        </div>
        <div class="box_card_right">
          <div class="title">
            <span>Comment</span>
            <div class="icon-user">
              <i class="bx bx-message-square-dots"></i>
            </div>
          </div>
          <div class="other-user-comment">
            <div class="user-info"  v-for="comment in feedcard.comments" :key="comment._id">
              <div class="user-info-acc">
                <div class="icon-user"><i class="bx bxs-user-circle"></i></div>
                <span>{{ comment.usercommentId.username }}</span>
              </div>
              <div class="user-info-comment">
                {{ comment.comment  }}
              </div>
            </div>
          </div>
          <comment-post :feedcard="feedcard" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentPost from './CommentPost.vue'
export default {
  components: { CommentPost },
  name: 'NewsfeedCard',
  props: ['posts'],
  data() {
    return {
      commentUsers: '',
      postInfo: []
    }
  },

  watch: {
    posts: {
      handler(posts){
        let all_posts = posts.reverse();
        console.log('watch post', posts)
        for(let i =0; i< posts.length; i++){
          fetch(`http://localhost:3001/comment/all?userpostId=${posts[i]._id}`)
          .then( async (res) => {
            const resData = await res.json();
            all_posts[i].comments = resData.data; 
          })
        }
        this.postInfo = all_posts
      }, immediate: true,
    }
  },

  methods: {
    like() {
      var btn1 = document.querySelector('#green');
      var btn2 = document.querySelector('#red');

      btn1.addEventListener('click', function () {

        if (btn2.classList.contains('red')) {
          btn2.classList.remove('red');
        }
        this.classList.toggle('green');

      });
      btn2.addEventListener('click', function () {

        if (btn1.classList.contains('green')) {
          btn1.classList.remove('green');
        }
        this.classList.toggle('red');

      });

    },
    commentPost() {
      return this.comment
    },
  },
}
</script>

<style scoped>
button {
  cursor: pointer;
  outline: 0;
  color: #AAA;

}

.btn:focus {
  outline: none;
}

.green {
  color: blue;
}

.red {
  color: red;
}
.wrapper_body_review {
  position: relative;
  margin: 12px auto;
  width: 80%;
  height: auto;
}

.box_card_feed {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
  height: 60vh;
  margin-bottom: 15px;
  border: 1px solid #e5e5e5;
  background-color: #e6e6e641;
}

.box_card_left {
  position: relative;
  width: 45%;
  height: 100%;
}

.box_card_left .user-name {
  position: relative;
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
}

.box_card_left .location_post {
  height: 5%;
  width: 100%;
  padding-left: 25px;
  opacity: 80%;
}

.box_card_left .location_post img {
  height: 100%;
}

.box_card_left .user-name .icon-user {
  height: 100%;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box_card_left .user-name .icon-user .bx {
  font-size: 50px;
  cursor: pointer;
}

.box_card_left .user-name .username_location {
  width: 75%;
  height: 100%;
  display: flex;
  margin: 0 !important;
  flex-direction: column;
}

.box_card_left .user-name .username_location .username {
  margin: 0;
  height: 20%;
}

.box_card_left .user-name .username_location .location {
  height: 60%;
  display: flex;
  align-items: center;
}

.box_card_left .user-name .username_location .location img {
  height: 50%;
  margin-left: 20px;
}

.box_card_left .user-name .icon-like {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  cursor: pointer;
}

.box_card_left .user-name .icon-like:hover {
  color: blue;
}

.box_card_left .user-name span {
  font-size: 24px;
  font-weight: 600;
  margin-left: 20px;
}

.box_card_left .descrition-post {
  width: 100%;
  height: 15%;
  padding-left: 30px;

}

.box_card_left .img-post {
  position: relative;
  width: 95%;
  height: 65%;
  padding-left: 25px;
}

.box_card_left .img-post img {
  position: absolute;
  width: 90%;
  height: 85%;
}

.box_card_right {
  width: 50%;
  height: 100%;
}

.box_card_right .title {
  position: relative;
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  font-size: 1.7rem;
}

.box_card_right .title .icon-user {
  padding-left: 16px;
}

.box_card_right .other-user-comment {
  width: 100%;
  height: 60%;
  overflow-y: scroll;
  /* overflow: hidden; */
}

.box_card_right .other-user-comment .user-info {
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: column;
}

.box_card_right .other-user-comment .user-info .user-info-acc {
  font-size: 20px;
  display: flex;
}

.box_card_right .other-user-comment .user-info .user-info-acc span {
  margin-left: 15px;
}

.box_card_right .input-comment {
  padding: 8px;
}

input {
  background-image: none;
  border: 0;
  color: inherit;
  font: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  border: 1px solid #e5e5e5;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
}

input[type='text'] {
  width: 50%;
}

input[type='text'],
input[type='submit'] {
  border-radius: 0.25rem;
  padding: 8px;
  padding: 0.6rem;
}

input[type='submit'] {
  cursor: pointer;
}
</style>
