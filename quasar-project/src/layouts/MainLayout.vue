<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Onfly Test
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <q-item clickable v-ripple @click="addExpense()">
          <q-item-section avatar>
            <q-icon name="add" />
          </q-item-section>
          <q-item-section>Criar Despesa</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="listExpenses()">
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>Listar Despesas</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view :key="$route.fullPath"/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup () {
    const leftDrawerOpen = ref(false)
    const quasar = useQuasar()
    const router = useRouter()
    
    const addExpense = () => {
      router.push("/create")
    }

    const listExpenses = () => {
      router.push("/list")
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      addExpense,
      listExpenses
    }
  }
})
</script>
