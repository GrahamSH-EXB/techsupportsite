<template>
  <main>
    <h1
      class="
        text-4xl
        mb-6
        tracking-tight
        font-extrabold
        text-gray-900
        sm:text-5xl
        md:text-6xl
      "
    >
      404
    </h1>

    <div class="prose prose-yellow">
      <h2>Sorry, we couldn't find that page!</h2>
      <h4><nuxt-link to="/">Go home</nuxt-link></h4>
    </div>
  </main>
</template>
<script>
export default {
  head() {
    return {
      title: `404 - GrahamSH`,
    };
  },
};
</script>
