<script>
export default {
  data() {
    return {
      name: 'Ario',
      form: {
        name: '',
        sex: '',
        age: '',
        address: ''
      },
      editForm: {
        id: null,
        name: '',
        sex: '',
        age: '',
        address: ''
      },
      entries: JSON.parse(localStorage.getItem('entries')) || [],
      nextId: JSON.parse(localStorage.getItem('entries'))
        ? JSON.parse(localStorage.getItem('entries')).length + 1
        : 1,
      isModalOpen: false
    }
  },
  setup() {
    return {}
  },
  methods: {
    addEntry() {
      const newEntry = {
        id: this.nextId++,
        name: this.form.name,
        sex: this.form.sex,
        age: this.form.age,
        address: this.form.address
      }

      this.entries.push(newEntry)
      localStorage.setItem('entries', JSON.stringify(this.entries))

      this.form.name = ''
      this.form.sex = ''
      this.form.age = ''
      this.form.address = ''
    },
    editEntry(entry) {
      this.editForm = { ...entry }
      this.isModalOpen = true
    },
    updateEntry() {
      const index = this.entries.findIndex((entry) => entry.id === this.editForm.id)
      if (index !== -1) {
        this.entries.splice(index, 1, { ...this.editForm })
        localStorage.setItem('entries', JSON.stringify(this.entries))
      }
      this.isModalOpen = false
    }
  }
}
</script>

<template>
  <div class="min-h-screen p-4">
    <div class="bg-off-white p-2 text-center items-center justify-center flex flex-col gap-2">

      <form @submit.prevent="addEntry" class="flex flex-col gap-2 items-start">
        <div>
          <label for="name">Name:</label>
          <input class="rounded p-1 bg-primary-gray-1 text-off-white" type="text" v-model="form.name" id="name" required />
        </div>
        <div>
          <label for="sex">sex:</label>
          <input class="rounded p-1 bg-primary-gray-1 text-off-white" type="text" v-model="form.sex" id="sex" required />
        </div>
        <div>
          <label for="Age">Age:</label>
          <input class="rounded p-1 bg-primary-gray-1 text-off-white" type="text" v-model="form.age" id="Age" required />
        </div>
        <div>
          <label for="Address">Address:</label>
          <input class="rounded p-1 bg-primary-gray-1 text-off-white" type="text" v-model="form.address" id="Address" required />
        </div>
        <button class="bg-primary-gray-2 text-off-white py-2 px-6 self-center"  type="submit">Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Sex</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in entries" :key="entry.id" @click="editEntry(entry)">
            <td>{{ entry.name }}</td>
            <td>{{ entry.sex }}</td>
            <td>{{ entry.age }}</td>
            <td>{{ entry.address }}</td>
          </tr>
        </tbody>
      </table>

      <div v-if="isModalOpen" class="modal">
        <div class="modal-content">
          <span class="close" @click="isModalOpen = false">&times;</span>
          <h2>Edit Entry</h2>
          <form @submit.prevent="updateEntry">
            <div>
              <label for="edit-name">Name:</label>
              <input class="rounded p-1 bg-primary-gray-1 text-off-white"  type="text" v-model="editForm.name" id="edit-name" required />
            </div>
            <div>
              <label for="edit-sex">Sex:</label>
              <input class="rounded p-1 bg-primary-gray-1 text-off-white"  type="text" v-model="editForm.sex" id="edit-sex" required />
            </div>
            <div>
              <label for="edit-age">Age:</label>
              <input class="rounded p-1 bg-primary-gray-1 text-off-white"  type="number" v-model="editForm.age" id="edit-age" required />
            </div>
            <div>
              <label for="edit-address">Address:</label>
              <input class="rounded p-1 bg-primary-gray-1 text-off-white"  type="text" v-model="editForm.address" id="edit-address" required />
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add some basic styling */
form div {
  margin-bottom: 10px;
}
table {
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f4f4f4;
}
tr {
  cursor: pointer;
}
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
