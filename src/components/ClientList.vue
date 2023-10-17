<template>
  <section class="clients">
    <h3 class="h3 clients-title">Clients</h3>
    <ul class="clients-list has-scrollbar">
      <li class="clients-item" v-for="(client, index) in clients" :key="index">
        <a :href="client.url">
          <img :src="client.image" :alt="client.name" />
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    clients: Array
  }
}
</script>
