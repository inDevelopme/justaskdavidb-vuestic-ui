import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/typography.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)


app.use(createVuestic({
  config: {
    components: {
      VaCard: true,
      VaCardTitle: true,
      VaCardContent: true,
      VaInput: true,
      VaButton: true,
      VaIcon: true,
    }
  }
}))

app.mount('#app')
