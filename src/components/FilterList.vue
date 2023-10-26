<template>
  <ul class="filter-list">
    <li class="filter-item" v-for="(category, index) in categories" :key="index">
      <button :class="{ active: category.active }" data-filter-btn>{{ category.label }}</button>
    </li>
  </ul>
  <div class="filter-select-box">
    <button class="filter-select" data-select>
      <div class="select-value" data-select-value>Select category</div>
      <div class="select-icon">
        <ion-icon name="chevron-down"></ion-icon>
      </div>
    </button>
    <ul class="select-list">
      <li class="select-item" v-for="category in categories" :key="category">
        <button data-select-item>{{ category.label }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array
  }
}
</script>
