<template>
  <div id="links" class="my-4 inline-flex flex-row items-center text-xl">
    <a class="mr-3" href="https://github.com/subdavis">
      <fa :icon="['fab', 'github']" />
    </a>
    <a class="mr-3" href="https://www.linkedin.com/in/subdavis/">
      <fa :icon="['fab', 'linkedin']" />
    </a>
    <a class="mr-3" href="https://www.goodreads.com/user/show/103087534-brandon">
      <fa :icon="['fab', 'goodreads']" />
    </a>
    <a class="mr-3" href="https://www.snapchat.com/add/subdavis">
      <fa :icon="['fab', 'snapchat-ghost']" />
    </a>
    <a
      href="https://keybase.io/bdavis"
      class="gpg inline-flex flex-row items-center"
    >
      <fa :icon="['fab', 'keybase']" />
      <span class="ml-2 mt-1 text-sm font-mono">
        <span>098A</span>
        <span>BBEB</span>
        <span>CF1F</span>
        <span>B633</span>
      </span>
    </a>
  </div>
</template>

<style scoped>
.gpg:hover > span > span {
  text-decoration: underline;
}
</style>
