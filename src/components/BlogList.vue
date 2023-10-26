<template>
  <ul class="blog-posts-list">
    <li class="blog-post-item" v-for="(post, index) in blogs" :key="index">
      <a :href="post.link">
        <figure class="blog-banner-box">
          <img :src="post.image" :alt="post.title" loading="lazy" />
        </figure>
        <div class="blog-content">
          <div class="blog-meta">
            <p class="blog-category">{{ post.category }}</p>
            <span class="dot"></span>
            <time :datetime="post.date">{{ post.dateFormatted }}</time>
          </div>
          <h3 class="h3 blog-item-title">{{ post.title }}</h3>
          <p class="blog-text">{{ post.description }}</p>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    blogs: Array
  }
}
</script>
