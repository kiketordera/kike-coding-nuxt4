<template>
  <div id="top">
    <CookieControl :locale="getLang()" />
    <kike-general-NavBar />
    <main>
      <slot />
    </main>
    <kike-general-Footer />
  </div>
</template>
