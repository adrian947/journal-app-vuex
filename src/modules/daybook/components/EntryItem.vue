<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <!-- Titilo -->
    <div class="entry-title d-flex align-items-center">
      <span class="text-success fs-5 fw-bold">{{ 15 }}</span>
      <span class="mx-1 fs-5">{{ "julio" }}</span>
      <span class="mx-2 fs-3 fw-light">{{ "jueves" }}</span>
    </div>

    <div class="entry-description mt-2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque tempore
      rem exercitationem quas ab. Minus adipisci ullam, non sit culpa
      perferendis alias maiores, nulla repudiandae veritatis sint fuga delectus
      dicta molestias possimus? Nostrum voluptatem odio, alias exercitationem
      totam ullam facere.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-description {
    font-size: 12px;
  }
}
</style>
