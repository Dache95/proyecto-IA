<script lang="ts">
    import { Cloudinary } from '@cloudinary/url-gen'
    import { backgroundRemoval } from '@cloudinary/url-gen/actions/effect'

    import Dropzone from 'dropzone'
    import 'dropzone/dist/dropzone.css'
    import { ImageStates } from './types.d';
    import { imageState, originalImage, processedImage } from './store';

    import { onMount } from 'svelte'

    const cloudinary = new Cloudinary({
        cloud: {
            cloudName: 'dache'
        },
        url: {
            secure: true
        }
    })

    onMount(() => {
        const dropzone = new Dropzone("#dropzone", {
            uploadMultiple: false,
            acceptedFiles: ".jpg,.png,.webp",
            maxFiles: 1
            // url: "https://res.cloudinary.com/dache/image/upload"
        })

        dropzone.on('sending', (file, xhr, formData) => {
            imageState.set(ImageStates.LOADING)
            formData.append('upload_preset', 'removebg')
            formData.append('timestamp', Date.now() / 1000)
            formData.append('api_key', 275789759366938)
        })

        dropzone.on('success', (file, response) => {
            console.log(response)
            const {public_id: publicId, secure_url: url } = response


            const imageWithoutBG = cloudinary.image(publicId).effect(backgroundRemoval())

            console.log(imageWithoutBG.toURL())

            imageState.set(ImageStates.DONE)
            processedImage.set(imageWithoutBG.toURL())
            originalImage.set(url)
        })

        dropzone.on('error', (file, response) => {
            console.log('error')
            console.log(response)
        })
    })

    
</script>

<form 
    id="dropzone" 
    class="shadow-2xl rounded-3xl flex justify-center items-center flex-col w-96 h-72 bg-white"
    action="https://api.cloudinary.com/v1_1/dache/image/upload"
>
{#if $imageState === ImageStates.READY}
    <button class="bg-[#106FE6] text-white rounded-full px-6 py-4 text-bold pointer-events-none text-xl">
        Carga Imagen
    </button>
    <strong>o arrastra un archivo</strong>
{/if}
{#if $imageState === ImageStates.LOADING}
    <div class="flex justify-center items-center">
        <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
{/if}
</form>