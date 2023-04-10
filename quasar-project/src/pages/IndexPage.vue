<template>
  <div class="div-row">
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <br />
      <br />
      <q-input
        outlined
        v-model="email"
        stack-label
        label="Email"
        lazy-rules
        type="email"
        :rules="[ val => val && val.length > 0 || 'Digite um email válido']"
      />

      <q-input
        outlined
        v-model="password"
        stack-label
        label="Senha"
        lazy-rules
        :type="isPwd ? 'password' : 'text'"
        :rules="[
          val => val !== null && val !== '' || 'Digite uma senha',
          val => val > 0 && val.length < 100 || 'A senha deve ter no mínimo 8 caracteres'
        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <div class="flex flex-center">
        <q-btn label="Login" type="submit" color="primary"/>
      </div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const $q = useQuasar()
    const router = useRouter()
    const email = ref(null)
    const password = ref(null)
    const isPwd = ref(true)

    const onSubmit = () => {
      const form = {
        email: email.value,
        password: password.value
      }
      axios.post('http://localhost/api/login', form).then(response => {
        console.log(response.data)
        if (response.data.success) {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: response.data.message
          })

          router.push("/list")
        }
      })
    }

    axios.get('http://localhost/sanctum/csrf-cookie').then(response => {
      // console.log(response)
    })
    
    return {
      email,
      password,
      isPwd,
      onSubmit,
    }
  }
}
</script>
<style>
.div-row {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
