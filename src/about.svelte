<script>
    import person from './assets/person.avif'
    import first from './assets/4.jpg'
    import firstBG from './assets/4-removebg-preview.png'
    import second from './assets/2.jpg'
    import secondBG from './assets/2-removebg-preview.png'

</script>

<div class="bg-[#006C4F] p-40">

    <div class="m-auto min-w-full text-center flex flex-col gap-8">
        <div>
            <div class="flex flex-row absolute w-full justify-evenly left-0 z-0 top-30">
                <img style="border-radius: 40px;" class="w-[300px] h-auto" src="{ first }" alt="">
                <img class="w-[300px] h-auto" src="{ secondBG }" alt="">
                <img class="w-[300px] h-auto" src="{ firstBG }" alt="">
                <img style="border-radius: 40px;" class="w-[300px] h-auto" src="{ second }" alt="">
            </div>
            <p class="text-white text-6xl relative z-10 mt-32 font-extrabold">SOBRE NOSOTROS</p>
        </div>

        <p class="text-white text-5xl mt-56">Descubre la magia de la inteligencia artificial en el mundo de la edición de imágenes y la identificación de objetos.</p>
    </div>

</div>

<div class="mt-36 flex flex-row mx-8 gap-10 text-justify">
    <section>
        <h2 class="font-bold text-xl text-[#504301]">Remover fondo de imágenes con IA</h2>
        <p class="text-lg text-[#504301]">En nuestro proyecto de remoción de fondo de imágenes, utilizamos inteligencia artificial para eliminar el fondo de una imagen de manera automática. Esto permite obtener imágenes con el fondo transparente, lo que resulta útil en diversos casos, como para la creación de composiciones, edición de fotografías y diseño gráfico. Nuestro sistema utiliza algoritmos de aprendizaje automático para identificar y separar el primer plano (objetos principales) del fondo de una imagen, brindándote resultados precisos y de calidad.</p>
      </section>
    
      <section>
        <h2 class="font-bold text-xl text-[#504301]">Identificación de objetos en imágenes</h2>
        <p class="text-lg text-[#504301]">Además de la función de remoción de fondo, también ofrecemos una función de identificación de objetos en imágenes. Mediante el uso de técnicas de visión por computadora y aprendizaje automático, nuestro sistema es capaz de analizar una imagen y detectar los objetos presentes en ella. Esto puede ser útil en diversas aplicaciones, como etiquetado automático de imágenes, análisis de contenido visual y clasificación de imágenes en función de su contenido. Nuestra inteligencia artificial ha sido entrenada en una amplia variedad de objetos y categorías, lo que nos permite brindar resultados precisos y confiables.</p>
      </section>
</div>

<div class="mt-36 flex flex-col justify-center items-center w-full text-center">
    <div class="max-w-[200px]">
        <img src="{ person }" alt="Daniel" class="w-full h-auto">
        <p class="font-bold text-[#504301]">Daniel Paredes</p>
        <p class="text-[#504301]">5190-19-13376</p>
    </div>

    <div class="flex flex-row justify-evenly w-full">
        <div class="max-w-[200px]">
            <img src="{ person }" alt="Nelson" class="w-full h-auto">
            <p class="font-bold text-[#504301]">Nelson Ordoñez</p>
            <p class="text-[#504301]">5190-19-13376</p>
        </div>

        <div class="max-w-[200px]">
            <img src="{ person }" alt="Emerson" class="w-full h-auto">
            <p class="font-bold text-[#504301]">Emerson Miranda</p>
            <p class="text-[#504301]">5190-19-13376</p>
        </div>
    </div>
</div>