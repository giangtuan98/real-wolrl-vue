### Router
In file [src/router/index,js](./src/router/index.js), import VueRouter from library vue-router. we will define routes at here.

In file [src/main.js](src/main.js), import router just define.

Next, let see [App.vue](src/App.vue), we use tag <b>\<router-link></b> to define link like tag \<a>. When click to a router-link, vue-router will depend on list route was defined in [router file](./src/router/index.js) and get <b>component</b> corresponding path in router-link. Last, component will be render by \<router-view> tag.

