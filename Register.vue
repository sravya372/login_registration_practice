<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="register">
          <h1 class="h3 mb-3 font-weight-normal">Register</h1>
          <div class="form-group">
            <label for="first_name">First Name</label>
            <input type="text" v-model="first_name" class="form-control" name="first_name" placeholder="Enter Fist Name">
          </div>
          <div class="form-group">
            <label for="last_name">Last Name</label>
            <input type="text" v-model="last_name" class="form-control" name="last_name" placeholder="Enter Last Name">
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" v-model="email" class="form-control" name="email" placeholder="Enter Email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control" name="email" placeholder="Enter Password">
          </div>
          <div class="form-group">
            <label for="city">City</label>
            <input type="city" v-model="city" class="form-control" name="city" placeholder="city">
          </div>
          <div class="form-group">
            <label for="cycle">Cycle</label>
            <input type="number" v-model="cycle" class="form-control" name="cycle" placeholder="cycle">
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
  data () {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      city: '',
      cycle: ''
    }
  },

  methods: {
    register () {
      axios.post('/users/register',
        {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          city: this.city,
          cycle: this.cycle
        }).then(res => {
        this.first_name = ''
        this.last_name = ''
        this.email = ''
        this.password = ''
        this.city = ''
        this.cycle = ''
        router.push({ name: 'Login' })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
