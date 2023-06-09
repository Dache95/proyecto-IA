<script>
    import { imageState } from './store';
    import { ImageStates } from './types.d';
    import ImageEdit from './imageEdit.svelte';
    import ImageHome from './imageHome.svelte';
    import ImageUpload from './imageUpload.svelte';


</script>

 
 
 <div>
      {#if $imageState === ImageStates.READY || $imageState === ImageStates.LOADING}
        <div class="h-screen m-auto w-full flex place-content-center lg:flex-row flex-col items-center gap-20">
          <ImageHome />
          <ImageUpload /> 
        </div>
      {:else if $imageState === ImageStates.DONE}
        <ImageEdit />
      {/if}
  </div>