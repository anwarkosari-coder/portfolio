# Configuration Guide - Portfolio Anwar

## 🌐 Exécution Locale

### Option 1: Python (Easiest)

**Python 3.x:**
```bash
cd portfolio
python -m http.server 8000
```
Puis ouvrir: `http://localhost:8000`

**Python 2.x:**
```bash
cd portfolio
python -m SimpleHTTPServer 8000
```

### Option 2: Node.js HTTP Server

**Installation:**
```bash
npm install -g http-server
```

**Exécution:**
```bash
cd portfolio
http-server
```

### Option 3: VS Code Live Server Extension

1. Installer l'extension "Live Server"
2. Clic droit sur `index.html` → "Open with Live Server"
3. Le site s'ouvre automatiquement avec auto-refresh

### Option 4: Using Node.js Express (Advanced)

Créer un fichier `server.js`:

```javascript
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
```

Puis:
```bash
npm init -y
npm install express
node server.js
```

## 🔧 Configuration Requise

### Navigateurs Supportés
- Chrome/Chromium ≥ 90
- Firefox ≥ 88
- Safari ≥ 14
- Edge ≥ 90
- Mobile browsers (iOS Safari, Chrome Mobile)

### Minimum Requirements
- Aucune installation nécessaire!
- Juste un navigateur web moderne
- Connexion internet (pour Google Fonts + AOS library)

## 📦 Fichiers Externes

Le site charge les ressources externes suivantes:

1. **Google Fonts**
   ```html
   https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Sora:wght@400;600;700&display=swap
   ```

2. **AOS Library (Animate On Scroll)**
   ```html
   https://unpkg.com/aos@next/dist/aos.js
   https://unpkg.com/aos@next/dist/aos.css
   ```

3. **WhatsApp API**
   ```
   https://wa.me/[number]?text=[message]
   ```

### Offline Mode
Pour fonctionner offline, télécharger et inclure localement:

```bash
# Télécharger AOS
curl https://unpkg.com/aos@next/dist/aos.js -o aos.js
curl https://unpkg.com/aos@next/dist/aos.css -o aos.css

# Télécharger Google Fonts
# (Voir: https://google-webfonts-helper.herokuapp.com/)
```

## 🎯 Optimisations de Performance

### 1. Minification (Production)

**Minifier CSS:**
```bash
# Utiliser CSS Minifier Online
# Ou utiliser PostCSS/CSSO
npm install csso-cli -g
csso styles.css -o styles.min.css
```

**Minifier JS:**
```bash
# Utiliser JavaScript Minifier Online
# Ou utiliser Terser
npm install terser -g
terser script.js -o script.min.js
```

### 2. Image Optimization

Si vous ajoutez des images (JPG/PNG):
```bash
# Installer ImageOptim
# macOS: brew install imageoptim
# Linux: sudo apt install imagemagick
# Windows: Télécharger depuis imageoptim.com
```

### 3. Gzip Compression

Configuré automatiquement sur Netlify/Vercel. Pour local:

```nginx
# Nginx configuration
gzip on;
gzip_types text/plain text/css text/javascript application/javascript;
gzip_min_length 1000;
```

## 🔐 Security Headers

Ajouter à votre serveur (Netlify via `netlify.toml`):

```toml
[[headers]]
  for = "/"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
```

## 🧪 Testing

### Performance Testing

**Google PageSpeed Insights:**
1. Aller sur https://pagespeed.web.dev
2. Entrer votre URL
3. Vérifier les scores (90+ recommandé)

**WebPageTest:**
1. Aller sur https://www.webpagetest.org
2. Entrer votre URL
3. Choisir location et navigateur
4. Analyser les résultats

### SEO Testing

**Google Search Console:**
1. https://search.google.com/search-console/about
2. Vérifier le site
3. Soumettre le sitemap (optionnel pour ce site)

**Tools:**
- SEO Audit: https://www.seotesteronline.com
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

### Accessibility Testing

**WAVE:**
1. https://wave.webaim.org
2. Entrer l'URL
3. Vérifier les erreurs d'accessibilité

**axe DevTools:**
- Chrome Extension: https://chrome.google.com/webstore/detail/axe-devtools
- Lancer: F12 → axe DevTools

### Cross-Browser Testing

**Tools Gratuits:**
- https://browsershots.org
- https://www.browserstack.com (Trial gratuit)
- https://saucelabs.com

## 🚀 Déploiement Checklist

- [ ] Modifier WhatsApp number en vrai numéro
- [ ] Mettre à jour textes/images personnels
- [ ] Tester sur desktop, tablet, mobile
- [ ] Vérifier tous les liens
- [ ] Tester WhatsApp button
- [ ] Vérifier SEO meta tags
- [ ] PageSpeed Insights > 90
- [ ] Accessibility score > 95
- [ ] Pas d'erreurs console
- [ ] Pas de 404 errors
- [ ] Responsive design OK
- [ ] Animations fluides
- [ ] Performance OK sur 3G

## 📋 Version Control

### Initialiser Git

```bash
cd portfolio
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"
git add .
git commit -m "Initial portfolio commit"
```

### Branches

```bash
# Créer branch pour modifications
git checkout -b feature/new-section

# Commits réguliers
git add .
git commit -m "Add new project"

# Push
git push origin feature/new-section

# Merge to main
git checkout main
git merge feature/new-section
```

## 🐛 Troubleshooting

### Styles ne chargent pas
- Vérifier chemin CSS: `<link rel="stylesheet" href="styles.css">`
- Vérifier permissions fichier
- Clear browser cache (Ctrl+Shift+Delete)

### AOS animations ne fonctionnent pas
- Vérifier CDN: https://unpkg.com/aos@next/dist/aos.js
- Vérifier console pour erreurs (F12)
- Vérifier que script.js charge après index.html

### WhatsApp lien ne fonctionne pas
- Vérifier format numéro: +[code pays][numéro]
- Exemple Maroc: +212612345678
- Tester URL directement: https://wa.me/212612345678

### Responsive layout casse
- Vérifier viewport meta tag
- Vérifier media queries dans CSS
- Tester avec Chrome DevTools (F12 → Toggle device toolbar)

## 📚 Resources

- **MDN Web Docs**: https://developer.mozilla.org
- **CSS-Tricks**: https://css-tricks.com
- **Google Fonts**: https://fonts.google.com
- **AOS Documentation**: https://michalsnik.github.io/aos/
- **Web.dev**: https://web.dev

---

**Updated**: April 2026
**Status**: Production Ready ✅
