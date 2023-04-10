<template>
    <q-page class="flex flex-center div-row">
        <br />
        <q-breadcrumbs>
          <template v-slot:separator>
            <q-icon
              size="1.5em"
              name="chevron_right"
              color="primary"
            />
          </template>
          <q-breadcrumbs-el label="Home" icon="home" />
          <q-breadcrumbs-el :label="this.expenseId ? 'Atualizar Despesa' : 'Criar Despesa'" icon="add" />
        </q-breadcrumbs>
        <br />
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >
          <q-input
            outlined
            v-model="description"
            stack-label
            label="Descrição"
            lazy-rules
            type="textarea"
          />

          <q-input 
            v-model="expense_date"
            stack-label
            outlined
            type="date"
          />

          <q-input
            outlined
            v-model="amount"
            stack-label
            label="Valor"
            step="any"
            lazy-rules
            type="number"
          />

          <div class="flex flex-center">
              <q-btn
                label="Salvar"
                type="submit"
                class="q-mt-md"
                color="teal"
              />
          </div>
        </q-form>
    </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar';
import axios from 'axios'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'CreateExpense',
  setup() {
    const quasar = useQuasar()
    const router = useRouter()
    
    return {
      quasar,
      router
    }
  },
  data() {
    return {
      expenseId: null,
      expense_date: null,
      description: null,
      amount: 0
    }
  },
  methods: {
    onSubmit() {
      var self = this
      const form = {
        description: this.description,
        expense_date: this.expense_date,
        amount: parseFloat(this.amount),
      }

      if (this.expenseId) {
        axios.put('http://localhost/api/expenses/' + this.expenseId, form).then(response => {
          if (response.data.success) {
            self.quasar.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: response.data.message
            })

            self.router.push("/list")
          }
        }).catch(error => {
          self.quasar.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'error',
            message: error.response.data.error 
          })
        })
      } else {
        axios.post('http://localhost/api/expenses', form).then(response => {
          if (response.data.success) {
            self.quasar.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: "Despesa criada com sucesso"
            })

            self.router.push("/list")
          }
        }).catch(error => {
          self.quasar.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'error',
            message: error.response.data.error 
          })
        })
      }
    },
    getExpense(id) {
      var self = this
      axios.get('http://localhost/api/expenses/' + id).then(response => {
        if (response.data.success) {
          this.description = response.data.data.description
          this.expense_date = response.data.data.expense_date
          this.amount = response.data.data.amount
        }
      }).catch(error => {
        self.quasar.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'error',
          message: error.response.data.error 
        })

        self.router.push("/list")
      })
    },
  },
  async created() {
    this.expenseId = this.$route.params.id
    if (this.expenseId) {
      this.getExpense(this.expenseId)
    }
  },
  async mounted() {
    
  }
})
</script>
<style>
.div-row {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>