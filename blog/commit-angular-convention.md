---
title: Comment bien nommer ses commits 📝
description: This is my first post on Docusaurus.
slug: angular-commit-convention
date: 2024-10-05T18:00
authors: ntaoussi

tags: 
    - git
image: img/blog/git-angular-commit.jpg
hide_table_of_contents: false
---

![alt text](../static/img/blog/git-angular-commit.jpg)

Les conventions de nommage des commits sont un élément crucial dans le développement informatique, et ceux pour plusieurs raisons :

### Elles permettent :
- 🔎 **Une meilleure lisibilité** : le code est modifié en équipe, et un historique de commits clair aide à suivre les changements rapidement.
- 📈 **Un meilleur suivi des bugs** : avec un historique propre, il est plus facile de localiser les commits introduisant des bugs ou des régressions.
- ⚙️ **L’automatisation des versions** : Certains outils, comme Semantic Release, utilisent ces conventions pour déterminer les versions de logiciels à publier.
Ici, on s’attardera sur la convention de nommage la plus utilisé, à savoir celle d’Angular “Conventional Commits”.

### Format des Conventions de commits dans Angular
Le format des commits suit généralement cette structure :

`<type>(<scope>): <sujet>`

- **type** : décrit la catégorie de modification.
- **scope** : est un champ optionnel qui décrit la partie du projet affectée.
- **sujet** : est un résumé concis du changement apporté.

### Types de commit
Voici les principaux types de commits que l’on rencontrera :

- **feat** : Introduction d’une nouvelle fonctionnalité.
- **fix** : Correction d’un bug.
- **docs** : Modification de la documentation (README, guides, etc.).
- **style** : Modifications de style qui n’affectent pas la logique du code (indentation, mise en forme, ajout d’espace, renommage d’une variable).
- **refactor** : Changements dans le code qui n’ajoutent pas de nouvelles fonctionnalités ni ne corrigent de bugs (par exemple, un refactoring).
- **test** : Ajout ou modification de tests.
- **perf** : amélioration des performances
- **build** : changements qui affectent le système de build ou des dépendances externes (npm, make…)
- **ci** : changements concernant les fichiers et scripts d’intégration ou de configuration (Travis, Ansible, BrowserStack…)

### Scope (portée)
La portée permet de préciser la partie du projet concernée par le changement. Par exemple, si on souhaite modifier une partie du composant “User”, le commit pourrait ressembler à ceci :

`feat(user): ajout de la fonctionnalité de suppression de compte`

Les bonnes pratiques recommandent également de rédiger le sujet au présent et à l’impératif, comme si vous donniez une commande à Git. De plus, il est conseillé d’éviter les majuscules et de ne pas ajouter de point à la fin.

⚠️ De préférence, le commit doit être en anglais. Je les ai écrits ici en français afin de rendre les exemples plus simples à comprendre.

### Conclusion
Les convention de nommage des commits apportent une structure indispensable, surtout dans les projets d’envergure. Elles améliorent la lisibilité, facilitent la collaboration en équipe, et permettent une meilleure gestion des versions. Que vous travailliez sur un petit projet ou sur une application à grande échelle, adopter ces conventions vous aidera à maintenir une meilleure qualité de code et à simplifier vos processus de développement.