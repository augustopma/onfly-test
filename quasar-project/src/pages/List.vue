<template>
    <div class="flex flex-center div-row">
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
          <q-breadcrumbs-el label="Listar Despesas" icon="list" />
        </q-breadcrumbs>
        <br />
        <q-table
          title="Minhas Despesas"
          :rows="expenses"
          :columns="columns"
          row-key="id"
          :loading="loading"
          :key="tableKey"
          noDataLabel="Nenhuma despesa encontrada"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td
                v-for="col in props.cols.slice(0, -1)"
                :key="col.name"
                :props="props"
              >
                {{ col.value }}
              </q-td>
              <q-td key="actions" :props="props">
                <div class="q-gutter-sm">
                  <q-btn square color="primary" @click="showExpense(props)" icon="visibility" />
                  <q-btn square color="secondary" @click="editExpense(props.row.id)" icon="edit" />
                  <q-btn square color="red" @click="deleteExpense(props.row.id)" icon="delete" />
                </div>
              </q-td>
            </q-tr>
            <q-tr v-show="props.expand" :props="props">
              <q-td colspan="100%">
                <div v-html="currentExpense"></div>
              </q-td>
            </q-tr>
          </template>
        </q-table>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar';
import axios from 'axios'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'ListExpenses',
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
      expenses: [],
      loading: true,
      tableKey: 0,
      currentExpense: "",
      columns: [
        { name: 'description', align: 'left', label: 'Descrição', field: 'description'},
        { name: 'amount', align: 'center', label: 'Valor', field: 'amount', sortable: true },
        { name: 'date', align: 'center', label: 'Data', field: 'expense_date', sortable: true },
        { name: 'actions', align: 'center', label: 'Ações'},
      ]
    }
  },
  methods: {
    showExpense(props) {
      var self = this
      axios.get('http://localhost/api/expenses/' + props.row.id).then(response => {
        if (response.data.success) {
          self.currentExpense = ''
          var expense = response.data.data
          for (var key in expense) {
            self.currentExpense += '<p>' + key + ': '+ expense[key] + '</p>'
          }
          props.expand = !props.expand
        }
      })
    },
    editExpense(id) {
      this.router.push("/update/" + id)
    },
    async getExpenses() {
      var self = this
      axios.get('http://localhost/api/expenses').then(response => {
        if (response.data.success) {
          self.expenses = response.data.data
          self.loading = false
          self.tableKey++
        }
      })
    },
    async deleteExpense(id) {
      var self = this
      self.quasar.dialog({
        title: 'Deletar despesa',
        message: 'Tem certeza que deseja remover a despesa?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        axios.delete('http://localhost/api/expenses/' + id).then(response => {
          if (response.data.success) {
            self.getExpenses()
            self.quasar.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: response.data.message
            })
          }
        })
      })
    },
  },
  async mounted() {
    await this.getExpenses()
  }
})
</script>
<style>
.div-row {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>