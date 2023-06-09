<script lang="ts">
    import { originalImage, processedImage } from './store';
    import "two-up-element"

    let processingImage = true
    let tries = 0
    let intervalId: any

    $: {
        if(processingImage) {
            clearInterval(intervalId)
            intervalId = setInterval(() => {
                tries++
            }, 500)
        }
    }

</script>
<div class="flex flex-col m-auto place-content-center w-[50%] h-screen gap-10 items-center">
    <two-up>
        <img src={$originalImage} alt="Imagen original subida por el usuario">
        <img 
            on:load={() => (processingImage = false)} 
            on:error={() => (processingImage = true)} 
            src={`${$processedImage}&t=${tries}`} 
            alt="Imagen sin fondo subida por el usuario"
        >
    </two-up>

    <a 
        id="donwload-button"
        download
        href={$processedImage}
        class="pointer w-full text-center rounded-full px-6 py-2 text-bold pointer-events-none text-xl bg-[#106FE6] text-white font-bold"
    >
        Descargar
    </a>
</div>