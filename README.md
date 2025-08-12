# site-esaltarefood

Premier site.

## Déploiement

Le dépôt est configuré avec GitHub Actions pour exécuter automatiquement les tests (`npm test`) puis la construction (`npm run build`) à chaque push sur la branche principale. Le contenu généré dans le dossier `dist/` est ensuite déployé sur GitHub Pages.

Aucun action manuelle n'est nécessaire : poussez simplement vos modifications pour lancer le processus de déploiement.
