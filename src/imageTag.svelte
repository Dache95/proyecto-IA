<script>
    import { onMount, afterUpdate } from 'svelte';
    import { writable } from 'svelte/store';
  
    const results = writable([]);
    const showResults = writable(false);
    const selectedImage = writable('');
  
    async function classifyImage() {
      const input = document.getElementById('input-imagen');
      const imagen = input.files[0];
  
      const img = new Image();
      const reader = new FileReader();
  
      reader.onload = async () => {
        img.src = reader.result;
        selectedImage.set(reader.result);
        img.onload = async () => {
          classifier.classify(img, gotResults);
        };
      };
  
      reader.readAsDataURL(imagen);
    }
  
    async function gotResults(error, result) {
      if (error) {
        console.error(error);
      } else {
        console.log(result);
        results.set(result);
        showResults.set(true);
      }
    }
  
    let classifier;
  
    onMount(async () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/ml5@0.12.2/dist/ml5.min.js';
      script.async = true;
      document.body.appendChild(script);
  
      script.onload = async () => {
        classifier = await ml5.imageClassifier('MobileNet', () => {
          console.log('El modelo de MobileNet se ha cargado correctamente.');
        });
      };
    });
  
    afterUpdate(() => {
      const button = document.getElementById('clasificar-btn');
      button.addEventListener('click', classifyImage);
    });
  </script>
  
  <div class="mt-52">
    <div class="flex flex-row w-full justify-around h-auto mt-8">
        <div class="file-input">
            <label for="upload-file" class="file-label text-[#106FE6]">Seleccionar Imagen</label>
            <input type="file" id="input-imagen" accept="image/*" />
        </div>
      
        <button class="text-[#106FE6]" id="clasificar-btn">Clasificar imagen</button>
    </div>
  
    <div class="flex flex-row justify-around">
      <div>
        {#if $selectedImage}
          <h3 class="font-bold text-2xl text-[#106FE6]">Imagen seleccionada:</h3>
          <img src={$selectedImage} alt="Imagen seleccionada" style="max-width: 500px; max-height: 500px;" />
        {/if}
      </div>

      <div>
        {#if $showResults && $results.length > 0}
          <h2 class="font-bold text-2xl text-[#106FE6]">Resultados de la clasificación:</h2>
          <ul>
            {#each $results.slice(0, 3) as result}
              <li class="text-xl text-[#106FE6]">{result.label}</li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>
  
  </div>
  

  <style>
  #clasificar-btn {
  background-color: transparent;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer !important;
  border: 2px solid #106FE6;
}
#clasificar-btn:hover {
  color: #ffffff;
  background-color: #106FE6;
}

.file-input {
  position: relative;
  display: inline-block;
}

.file-label {
  background-color:transparent;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid #106FE6;
}
.file-label:hover {
  color: #ffffff;
  background-color: #106FE6;
}
.file-input input[type="file"] {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
}


  </style>