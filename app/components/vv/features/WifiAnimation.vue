<template>
  <div ref="root" v-reveal class="vv-wifi" aria-hidden="true">
    <div class="software-layers">
      <img ref="devices" src="~/assets/svg/vv/devices.svg" class="devices" width="973" height="310" alt="">
      <vv-features-WifiWaves class="waves" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const root = ref<HTMLElement | null>(null)
const devices = ref<HTMLImageElement | null>(null)

const LAYER_IDS = ['raspbian', 'docker', 'golang', 'gingonic', 'bootstrap', 'vue'] as const

let active = false
let timer: ReturnType<typeof setTimeout> | undefined

function sleep (ms: number) {
  return new Promise<void>((resolve) => {
    timer = setTimeout(resolve, ms)
  })
}

async function animate () {
  const rootEl = root.value
  const devicesEl = devices.value
  if (!rootEl || !devicesEl) return

  const layers = LAYER_IDS
    .map(id => rootEl.querySelector<SVGElement>(`#${id}`))
    .filter((el): el is SVGElement => el !== null)

  while (active) {
    for (const layer of layers) {
      layer.style.opacity = '0'
      await sleep(100)
      if (!active) return
      layer.style.opacity = '1'
    }
    devicesEl.classList.add('scale')
    await sleep(1500)
    if (!active) return
    devicesEl.classList.remove('scale')
    await sleep(1300)
  }
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  active = true
  animate()
})

onBeforeUnmount(() => {
  active = false
  if (timer !== undefined) clearTimeout(timer)
})
</script>

<style lang="scss" scoped>
.vv-wifi {
  background-color: white;
  padding: 2rem var(--gutter) 0;
  overflow: hidden;
}

.software-layers {
  position: relative;
  width: 100%;
  max-width: 850px;
  margin: 3rem auto 0;
}

.waves {
  display: block;
  width: 100%;
  height: auto;
}

.devices {
  position: absolute;
  top: -6%;
  left: 3%;
  width: 65%;
  height: auto;
  transform-origin: center;
}

@media (prefers-reduced-motion: no-preference) {
  .devices {
    transition: transform var(--dur-fast) ease-out;
  }

  .scale {
    transform: scale(1.4);
  }
}
</style>
