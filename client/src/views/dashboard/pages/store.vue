<template>
  <section class="main-dashboard">
    <!--Main -->
    <div class="main-header">
      <div class="main-dashboard-name">
        <h2>Manage STORE</h2>
      </div>
      <div class="main-dashboard-add" @click="addStore">
        <a href="#" class="btn" type="button">Add New Store</a>
      </div>
    </div>
    <div class="table-store">
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Location</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
        <tr v-for="store in stores" :key="store._id">
          <td>{{ store._id }}</td>
          <td>{{ store.storeName }}</td>
          <td>{{ store.category.name }}</td>
          <td>{{ store.location }}</td>
          <td>
            <img
              :src="store.imageUrl"
              alt="erorUserpost"
              style="width: 60%;"
            />
          </td>
          <td>
            <a href="#" @click="editItem" class="material-symbols-outlined">
              <span><i class="fas fa-edit" style="color:blue"></i></span>
            </a>

            <a @click="deleteItem(store)" class="material-symbols-outlined">
              <span><i class="fas fa-trash-alt" style="color:red"></i></span>
            </a>
          </td>
        </tr>
      </table>
    </div>
    <!-- open add store-->
    <div class="popup">
      <form action="#">
        <label for="img">Store image:</label>
        <br />
        <input type="file" id="img" name="img" accept="image/*" />
        <br />
        <br />
        <input type="text" id="name" name="name" placeholder="Name store" />
        <br />
        <br />
        <select name="categories" id="categories">
          <option value="Select a category">Select a category</option>
          <option value="clothes">Clothes</option>
          <option value="restaurant">Restaurant</option>
          <option value="supermartket">Supermartket</option>
          <option value="sport">Sport</option>
        </select>
        <br />
        <br />
        <input
          type="location"
          id="location"
          name="location"
          placeholder="Add Location"
        />

        <br />
        <br />
        <textarea
          name="description"
          id="description"
          placeholder="Description"
        ></textarea>
        <br />
        <br />
        <input type="submit" value="Confirm" @click="confirmStore" />
        <input type="submit" value="Cancel" @click="cancel" />
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      stores: [
      ],
    }
  },
  methods: {
    addStore() {
      const openpopup = document.querySelector('.popup')
      openpopup.classList.add('popup-open')
    },
    cancel() {
      const closePopup = document.querySelector('.popup')
      closePopup.classList.remove('popup-open')
    },
    editItem() {
      const openpopup = document.querySelector('.popup')
      openpopup.classList.add('popup-open')
    },
    async deleteItem(store){
      console.log('delete item', store)
      const res = await fetch('http://localhost:3001/store/delete', {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ _id: store._id })
    })

    const resData = await res.json()
    console.log('delete store', resData)

    this.getStore()
    },

    async getStore(){
      const res = await fetch('http://localhost:3001/store/all', {
            method: 'GET',
            credentials: 'include',
            headers: {
              'Content-type': 'application/json',
            },
          })

          const resData = await res.json()
          this.stores = resData.data.stores.docs
          console.log(this.stores);
    }
  },

  created() {
    this.getStore()  
  }

}
</script>

<style scoped>
.popup {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.561);
  top: 0px;
  left: 0px;
  visibility: hidden;
}
.popup.popup-open {
  visibility: visible;
}

form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  border: 1px solid rgb(196, 196, 196);
  padding: 12px;
  background-color: white;
  /* text-align: center; */
}

</style>
