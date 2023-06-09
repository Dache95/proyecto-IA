<script lang="ts">
    import videoHome from './assets/video-home.mp4'
</script>

<div class="max-w-md">
    <div class="max-w-md rounded">
      <video class="rounded-3xl" autoplay loop muted playsinline>
        <source src={videoHome} type="video/mp4" />
      </video>
    </div>
    <div>
      <h1 class="text-6xl text-[#454545] font-bold mt-10">Quita el fondo a las imagenes</h1>
    </div>
    <div class="relative">
      <h2 class="text-xl font-semibold text-[#454545] mt-5">
        100% automático y <span class="static-logo">gratis</span>
      </h2>
      
      <div>
        <img src="https://static.remove.bg/deco-brush.svg" alt="Imagen" style="position: absolute; top: 0; right: 15px; width: 120%; height: 120%; z-index: -1;">
      </div>
      
    </div>
</div>