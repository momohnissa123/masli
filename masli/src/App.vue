<script setup>
import { ref } from 'vue'

const products = ref([
  { id: 1, name: 'Smartphone Pro', price: '799€', description: 'Le dernier cri de la technologie mobile.', category: 'Électronique' },
  { id: 2, name: 'Ordinateur Portable', price: '1200€', description: 'Puissant et élégant pour tous vos travaux.', category: 'Électronique' },
  { id: 3, name: 'Casque Audio Sans Fil', price: '199€', description: 'Un son immersif et une réduction de bruit.', category: 'Électronique' },
  { id: 4, name: 'Montre Connectée', price: '249€', description: 'Suivez votre santé au quotidien.', category: 'Électronique' },
  { id: 5, name: 'Appareil Photo Reflex', price: '850€', description: 'Capturez vos moments avec précision.', category: 'Électronique' },
  { id: 6, name: 'Enceinte Bluetooth', price: '129€', description: 'Votre musique partout avec vous.', category: 'Électronique' },
])

const categories = ['Électronique', 'Mode', 'Maison', 'Sport', 'Beauté']
</script>

<template>
  <div class="container">
    <!-- GAUCHE : Panneau publicitaire -->
    <aside class="ad-panel">
      <div class="ad-container">
        <h3>Sponsoring</h3>
        <div class="ad-box">
          <p>Offre Exceptionnelle !</p>
          <span class="discount">-50%</span>
        </div>
        <div class="ad-box secondary">
          <p>Livraison Gratuite</p>
        </div>
      </div>
    </aside>

    <!-- MILIEU : Produits -->
    <main class="products-area">
      <header class="main-header">
        <h1>Boutique en Ligne</h1>
        <p>Découvrez nos meilleures sélections</p>
      </header>

      <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <div class="product-image-placeholder">
            <span>{{ product.name }}</span>
          </div>
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p class="description">{{ product.description }}</p>
            <div class="price-action">
              <span class="price">{{ product.price }}</span>
              <button class="buy-btn">Acheter</button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- DROITE : Logo, Recherche, Catalogues -->
    <aside class="sidebar-right">
      <div class="logo-section">
        <div class="logo-circle">M</div>
        <span class="logo-text">MARKET<b>PLACE</b></span>
      </div>

      <div class="search-section">
        <div class="search-wrapper">
          <input type="text" placeholder="Rechercher un produit...">
          <button class="search-btn">🔍</button>
        </div>
      </div>

      <nav class="catalog-section">
        <h3>Nos Catalogues</h3>
        <ul>
          <li v-for="cat in categories" :key="cat">
            <a href="#">{{ cat }}</a>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- BAS : Connexion et Informations -->
    <footer class="site-footer">
      <div class="footer-content">
        <div class="connection-section">
          <h4>Espace Membre</h4>
          <div class="auth-buttons">
            <button class="login-btn">Connexion</button>
            <button class="signup-btn">Créer un compte</button>
          </div>
        </div>

        <div class="info-section">
          <h4>À propos de nous</h4>
          <p>Votre partenaire shopping de confiance depuis 2025.</p>
          <div class="footer-links">
            <a href="#">Contact</a> |
            <a href="#">Aide</a> |
            <a href="#">Conditions</a>
          </div>
        </div>
      </div>
      <div class="copyright">
        &copy; 2025 MarketPlace. Fait avec passion.
      </div>
    </footer>
  </div>
</template>
