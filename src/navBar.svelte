<script>
    import About from "./about.svelte";
import Home from "./home.svelte";
    import ImageTag from "./imageTag.svelte";
    import { onMount } from 'svelte';
  
    let activeTab = 'Home';
  
    function setActiveTab(tab) {
      activeTab = tab;
    }
  
    onMount(() => {
      const path = window.location.pathname;
      if (path === '/ImageTag') {
        setActiveTab('ImageTag');
      }
      if (path === '/About') {
        setActiveTab('About');
      }
    });

    window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

  </script>
  
  <nav class="navbar text-center">
    <ul class="flex flex-row  items-center justify-around">
      <li class="min-w-[200px] font-bold" class:selected={activeTab === 'ImageTag'} on:click={() => setActiveTab('ImageTag')}>
        <a class="uppercase" href="/ImageTag">Identificar Imagen</a>
      </li>
      <li class="min-w-[200px] font-bold" class:selected={activeTab === 'Home'} on:click={() => setActiveTab('Home')}>
        <a href="/"><h1 class="logo">Unbgd</h1>
        </a>
      </li>
      <li class="min-w-[200px] font-bold" class:selected={activeTab === 'About'} on:click={() => setActiveTab('About')}>
        <a class="uppercase" href="/About">Sobre nosotros</a>
      </li>
    </ul>
  </nav>
  
  <main>
    {#if activeTab === 'Home'}
      <Home/>
    {:else if activeTab === 'ImageTag'}
    <ImageTag/>
    {:else if activeTab === 'About'}
    <About/>
    {/if}
  </main>
  
  <style>
   .logo {
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 32px;

}
.navbar {
    /* background: linear-gradient(to right, #340345, #7a3697); */
  position: fixed;
  top: 30px; /* Ajusta el valor según el espacio que desees entre el navbar y el borde superior */
  left: 10px; /* Ajusta el valor según el espacio que desees entre el navbar y el borde izquierdo */
  width: calc(100% - 20px); /* Ajusta el valor para dejar un espacio entre el navbar y los bordes laterales */
  z-index: 100;
}


.navbar {
  background: rgba(0,0,0,.1);
  padding: 10px;
  border-radius: 1000px;
  backdrop-filter: blur(12.7px);
}

.navbar ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.navbar li {
  margin-right: 20px;
}

.navbar a {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
}

.navbar a:hover {
  color: #504301;
}

  </style>