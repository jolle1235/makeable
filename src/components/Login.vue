<template>
  <div class="container">
    <div div class="screen">
      <img id="image" alt="makeable" src="../assets/makeable_logo.png" />
      <div class="screen__content">
        <form class='login'>
          <!-- email -->
          <div class="login__field">
            <!-- <label class="loginLabel" for="email" font-size="40">Email:</label> -->
            <i class="login__icon fas fa-user"></i>
            <input id="email" type="email" class="login__input" placeholder="Enter your email" v-model="email">
            <br />
          </div>

          <!-- password -->
          <div class="login__field">
            <i class="login__icon fas fa-user"></i>
            <input id="password" type="password" class="login__input" placeholder="Enter your password"
              v-model="password">
            <br />
          </div>
          <!--Submit button-->
          <button class="button login__submit" @click="requestToken">
            <span class="button__text">Log In</span>
            <i class="button__icon fas fa-chevron-right"></i>
          </button>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default{
  data() {
    return {
      token: '',
      password: '',
      email: ''

    }
  }, methods: {
    requestToken() {
      const dummyEmail = 'test@test';
      const dummyPassword = 'asdf';

      if(this.email === dummyEmail && this.password === dummyPassword){
      axios.get('https://opentdb.com/api_token.php?command=request')
        .then(response => {
          this.token = response.data.token;
          this.$emit('login', token);
          this.$router.push('/Quiz'); 

        })
        .catch(error => {
          console.log(error);
        });
      }else{
        console.log("failed to login");
      }
    }
  }
}

</script>

<style scoped>
  @import url('./Login.css');
</style>
