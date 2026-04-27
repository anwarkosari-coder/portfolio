# 🎨 Customization Guide

Guide pour personnaliser facilement votre portfolio sans avoir besoin de connaissances avancées en code.

## 📝 Textes & Contenu

### Hero Section

**File**: `index.html`
**Location**: Around line 60-85

```html
<h1>Bonjour, je suis <span class="highlight">Anwar El Qoussary</span></h1>
```

✏️ Changer: "Anwar El Qoussary" → Votre nom

```html
<p class="hero-description">
    J'aide les entrepreneurs à passer du offline au online...
</p>
```

✏️ Changer: Description au texte de votre choix

### Typing Animation Words

**File**: `script.js`
**Location**: Around line 70

```javascript
const words = [
    'Créateur de sites web',
    'Web Developer',
    'Freelancer',
    'UI Designer'
];
```

✏️ Personnaliser les mots qui tournent

---

## 🎯 WhatsApp Integration

### Update Phone Number

**File**: `index.html`
**Location**: Multiple places

Search for `212612345678` and remplacer par:

```
YOUR_COUNTRY_CODE + YOUR_PHONE_NUMBER
```

Exemples:
- Maroc: `212612345678`
- France: `33612345678`
- Belgique: `32612345678`
- Suisse: `41612345678`

**Also update in**: `script.js` (line ~220)

```javascript
const whatsappNumber = '212612345678';
```

---

## 🌈 Couleurs Personnalisées

### Modifier les Couleurs

**File**: `styles.css`
**Location**: Lines 1-15

```css
:root {
    --bg-primary: #0f172a;      /* Background noir bleu */
    --primary: #6366f1;         /* Couleur principale (bleu) */
    --accent: #22c55e;          /* Couleur accent (vert) */
    --text-primary: #f1f5f9;    /* Texte principal */
    --text-secondary: #cbd5e1;  /* Texte secondaire */
}
```

### Outils pour Choisir Couleurs

- **Color Picker**: https://coolors.co
- **Gradient Generator**: https://gradient.page
- **Color Shades**: https://maketintsandshades.com

### Exemples de Palettes

**Purple Theme:**
```css
--bg-primary: #0f172a;
--primary: #9333ea;
--accent: #ec4899;
```

**Orange Theme:**
```css
--bg-primary: #0f172a;
--primary: #ea580c;
--accent: #fbbf24;
```

**Teal Theme:**
```css
--bg-primary: #0f172a;
--primary: #14b8a6;
--accent: #06b6d4;
```

---

## 🖼️ Projets

### Ajouter un Nouveau Projet

**File**: `index.html`
**Location**: Around line 180 (Projects Section)

```html
<div class="project-card" data-aos="fade-up" data-aos-delay="100">
    <div class="project-image">
        <div class="placeholder-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
    </div>
    <div class="project-content">
        <h3>Mon Projet</h3>
        <p>Description du projet</p>
        <div class="project-tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JavaScript</span>
        </div>
        <a href="#" class="project-link" target="_blank">Voir le projet →</a>
    </div>
</div>
```

✏️ Modifier:
- `h3`: Titre du projet
- `p`: Description
- `span.tag`: Technologies utilisées
- `href="#"`: Lien vers le projet
- `style="background: linear-gradient(...)"`: Gradient couleur

### Dégradés Intéressants

```css
/* Bleu Purple */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Rose Rouge */
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

/* Cyan Blue */
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);

/* Green Gold */
background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);

/* Orange Yellow */
background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
```

---

## 💼 Services

### Modifier les Services

**File**: `index.html`
**Location**: Around line 240 (Services Section)

**Pour changer icône**, remplacer le SVG:

```html
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <!-- Changer le path -->
</svg>
```

**SVG Icons gratuits:**
- https://heroicons.com (parfaits pour ce style)
- https://www.feathericons.com
- https://www.svgrepo.com

---

## ⭐ Why Me Section

### Ajouter/Modifier les Points

**File**: `index.html`
**Location**: Around line 280

```html
<div class="why-card" data-aos="fade-up" data-aos-delay="100">
    <div class="why-number">01</div>
    <h3>Votre Avantage</h3>
    <p>Description détaillée</p>
</div>
```

✏️ Modifier:
- `why-number`: Numéro (01, 02, etc.)
- `h3`: Titre de l'avantage
- `p`: Description complète

---

## 📱 Responsive Breakpoints

### Gérer Mobile, Tablet, Desktop

**File**: `styles.css`
**Location**: Around line 630+

```css
/* Tablet - 768px and below */
@media (max-width: 768px) {
    h1 { font-size: 2.5rem; }
    /* Modifier pour tablet */
}

/* Mobile - 640px and below */
@media (max-width: 640px) {
    h1 { font-size: 2rem; }
    /* Modifier pour mobile */
}
```

---

## 🎬 Animations

### Modifier Vitesse Animations

**File**: `styles.css`

```css
:root {
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    /* Changer 0.3s à 0.5s pour plus lent */
    /* Ou 0.1s pour plus rapide */
}
```

### Typing Animation Speed

**File**: `script.js`
**Location**: Around line 70

```javascript
const typingSpeed = 100;        /* Milliseconds per character */
const deletingSpeed = 50;       /* Milliseconds when deleting */
const delayBetweenWords = 2000; /* Delay between words (milliseconds) */
```

### Float Animation

**File**: `styles.css`
**Location**: Around line 350

```css
@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px); /* Changer -20px pour amplitude */
    }
}
```

---

## 🔤 Typographie

### Changer Police de Caractères

**File**: `index.html`
**Location**: Head section (line ~20)

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Sora:wght@400;600;700&display=swap" rel="stylesheet">
```

✏️ Pour changer:
1. Aller sur https://fonts.google.com
2. Choisir deux polices
3. Remplacer le lien

### Appliquer Nouvelle Police

**File**: `styles.css`
**Location**: Lines 45-52

```css
body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    /* Remplacer 'Inter' par votre police */
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    /* Remplacer 'Sora' par votre police pour titres */
}
```

---

## 📐 Espacements & Sizing

### Modifier Espacements

**File**: `styles.css`

```css
section {
    padding: 6rem 0; /* Espace vertical des sections */
}

.container {
    padding: 0 1.5rem; /* Padding horizontal */
}

.btn {
    padding: 0.875rem 1.75rem; /* Button padding */
}
```

### Tailles de Texte

```css
h1 { font-size: 3.5rem; }    /* Desktop */
h2 { font-size: 2.5rem; }
h3 { font-size: 1.5rem; }

p { font-size: 1rem; }
```

---

## 🔗 Navigation & Links

### Ajouter Nouveau Lien Navigation

**File**: `index.html`
**Location**: Around line 35

```html
<ul class="nav-menu" id="navMenu">
    <li><a href="#home" class="nav-link">Accueil</a></li>
    <li><a href="#nouveau-section" class="nav-link">Nouveau</a></li>
</ul>
```

### Ajouter Nouvelle Section

```html
<section id="nouveau-section">
    <div class="container">
        <h2 class="section-title">Ma Nouvelle Section</h2>
        <!-- Contenu ici -->
    </div>
</section>
```

---

## 🎯 Boutons

### Modifier Boutons CTA

**File**: `index.html`

```html
<a href="https://wa.me/YOUR_NUMBER" class="btn btn-primary" target="_blank">
    Mon Bouton
</a>
```

### Couleurs Boutons

**File**: `styles.css`
**Location**: Around line 140+

```css
.btn-primary {
    background: linear-gradient(135deg, var(--primary), #7c3aed);
    /* Modifier les couleurs */
}

.btn-secondary {
    border: 2px solid var(--primary);
    color: var(--primary);
}

.btn-cta {
    background: linear-gradient(135deg, var(--accent), #16a34a);
}
```

---

## 📧 Form/Contact (Future)

### Ajouter un Formulaire

Utiliser:
- **Formspree**: https://formspree.io
- **EmailJS**: https://www.emailjs.com
- **Basin**: https://basin.io

Example avec Formspree:
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Envoyer</button>
</form>
```

---

## 🖥️ Footer

### Modifier Footer

**File**: `index.html`
**Location**: Around line 360

```html
<p>&copy; 2026 Anwar El Qoussary - Tous droits réservés</p>
```

✏️ Changer: Année, nom, et texte

---

## 📊 Performance Tuning

### Réduire Taille CSS

**Option 1: CSS Minifier Online**
- https://cssnano.co/playground/

**Option 2: Terser pour JS**
```bash
npm install terser -g
terser script.js -o script.min.js
```

### Activer Compression

**Netlify** (Auto)
**Vercel** (Auto)
**GitHub Pages** (Auto)

---

## ✅ Checklist Avant Publication

- [ ] Tous les textes vérifiés
- [ ] WhatsApp number correct
- [ ] Couleurs personnalisées appliquées
- [ ] Services/Projets à jour
- [ ] Tous les liens fonctionnels
- [ ] Pas d'erreurs dans console (F12)
- [ ] Mobile responsive OK
- [ ] Vitesse acceptable (< 3s)
- [ ] SEO meta tags vérifiés
- [ ] Accessibility tested

---

## 🆘 Troubleshooting

### Changes Not Showing
1. Hard refresh: `Ctrl+Shift+R` (Windows/Linux) ou `Cmd+Shift+R` (Mac)
2. Clear cache: F12 → Application → Clear site data
3. Vérifier fichier édité est sauvegardé

### Styling Broken
1. Vérifier CSS file path dans HTML
2. Vérifier pas de typos
3. Vérifier pas d'erreurs console (F12 → Console)

### Mobile Layout Broken
1. Vérifier viewport meta tag
2. Tester avec DevTools (F12 → Toggle device toolbar)
3. Vérifier media queries

---

**Happy Customizing! 🎉**

For more help, check:
- MDN Web Docs: https://developer.mozilla.org
- CSS-Tricks: https://css-tricks.com
- Google Fonts: https://fonts.google.com

---

**Last Updated**: April 2026
**Version**: 1.0.0
