<template>
  <div class="container-fluid p-0 ">
    <div class="row">
      <div class="col-12">
        <div class="login-card">
          <div>
          </div>
          <form class="theme-form login-form" @submit.prevent="">
            <h4>Iniciar sesión</h4>
            <div class="form-group">
              <label>Correo</label>
              <div class="input-group">
                <span class="input-group-text"><i class="icon-email"></i></span>
                <input v-model="email" class="form-control" type="email" placeholder="Test@gmail.com">

              </div>
            </div>
            <div class="form-group">
              <label>Contraseña</label>
              <div class="input-group">
                <span class="input-group-text"><i class="icon-lock"></i></span>
                <input v-model="password" :type="type" class="form-control" name="login[password]"
                  placeholder="*********">

                <div class="show-hide">
                  <span class="show" @click="showPassword"></span>
                </div>
              </div>
            </div>
            <div class="form-group ">
              <button class="btn btn-primary btn-block" type="button" @click="doLogin">
                Iniciar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { apiDetails } from "@/constants/api";


export default {
  data() {
    return {
      type: 'password',
      email: "",
      password: "",
    }
  },

  methods: {
    showPassword: function () {
      if (this.type === 'password') {
        this.type = 'text';
      } else {
        this.type = 'password';
      }
    },
    doLogin() {
      axios.post(apiDetails.url + 'api/login', {
        email: this.email,
        password: this.password
      })
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          localStorage.setItem('user', this.email)
          localStorage.setItem('token', response.data.token)
          this.$router.replace('/');
        } else {
          const errorMessage = this.getErrorMessages(response.data.errors) ?? 'Correo o contraseña invalidos.';
          this.$swal.fire({
            title: 'Error',
            html: errorMessage,
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
        }
      })
      .catch((error) => {
        const errorMessage = this.getErrorMessages(error.response.data.errors) ?? 'Ah ocurrido un error, intente más tarde.';
        this.$swal.fire({
          title: 'Error',
          html: errorMessage,
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      });
    },
    getErrorMessages(errors) {
      const errorArray = Object.values(errors).flat();
      return errorArray.join('<br>');
    },
  }
}
</script>
