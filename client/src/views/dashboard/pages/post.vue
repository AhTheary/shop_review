<template>
    <section class="main-dashboard">
            <!--Main -->
            <div class="main-header">
                <div class="main-dashboard-name">
                    <h2>Manage Post</h2>
                </div>
            </div>
            <div class="table-store">
                <table>
                    <tr>
                        <th>Image</th>
                        <th>User name</th>
                        <th>Status</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                    <tr v-for="post in posts" :key="post._id">
                        <td>   
                                <img :src=" post.image " alt="users_post" />
                        </td>
                        <td> {{post.userId.username?post.userId.username: 'user'}} </td>
                        <td> {{post.status}}</td>
                        <td> {{post.location}}</td>

                        <td>
                            <span class="material-symbols-outlined" style="color: rgb(241, 16, 16)">
                                delete
                            </span>
                        </td>
                    </tr>
                    
                </table>
            </div>
        </section>
</template>

<script>
    export default {
        data() {
            return {
                posts:[]
            }
        },
        async created() {
            const res = await fetch('http://localhost:3001/post/all', {
            method: 'GET',
            credentials: 'include',
            headers: {
              'Content-type': 'application/json',
            },
          })

          const resData = await res.json()
          this.posts = resData
          console.log('post'+this.posts);
        },
    }
</script>

<style scoped>
h1{
    margin-left: 21vw;
}
</style>