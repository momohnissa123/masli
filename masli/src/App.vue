<script setup>
</script>

<template>
  <div class="container">
    <aside class="ad-panel">
      <h2>Publicité</h2>
      <div class="ad-placeholder">Votre pub ici</div>
    </aside>

    <main class="products-area">
      <h1>Nos Produits</h1>
      <div class="product-grid">
        <div v-for="i in 6" :key="i" class="product-card">
          <div class="product-image">Produit {{ i }}</div>
          <p>Description du produit {{ i }}</p>
          <button>Acheter</button>
        </div>
      </div>
    </main>

    <aside class="sidebar-right">
      <div class="logo">MON SITE</div>
      <div class="search-bar">
        <input type="text" placeholder="Rechercher...">
      </div>
      <nav class="catalogues">
        <h3>Catalogues</h3>
        <ul>
          <li>Électronique</li>
          <li>Mode</li>
          <li>Maison</li>
        </ul>
      </nav>
    </aside>

    <footer class="site-footer">
      <div class="connection-options">
        <button>Connexion</button>
        <button>S'inscrire</button>
      </div>
      <div class="site-info">
        <p>&copy; 2025 Mon Site Web. Tous droits réservés.</p>
        <p>Contact | À propos | Mentions légales</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Styles will be moved to style.css */
</style>
