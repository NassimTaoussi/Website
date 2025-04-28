---
title: Retourner la longueur d’une chaine de caractères (string) en PHP
description: This is my first post on Docusaurus.
slug: strlen
date: 2025-01-27T18:00
authors: ntaoussi

tags: 
    - php
image: img/blog/strlen.jpg
hide_table_of_contents: false
---

![alt text](../static/img/blog/strlen.jpg)

Dans plusieurs situations, calculer la longueur d’une chaîne de caractères peut s’avérer être très utile. À titre d’exemple, lorsque l’on veut que le mot de passe rentré par un utilisateur lors de l’inscription, respecte un nombre de caractères minimum.

Et ce qui est génial, c’est que PHP met à notre disposition deux fonctions toute faites nommé “**strlen**” & “**mb_strlen**”

Mais attention !

La fonction “**strlen**” calcule la longueur d’une chaîne de caractères en octets. C’est pour cela qu’il y a un léger petit piège :

Si je fais :

`echo strlen("Chloe"); // Le retour va m'afficher 5 caractères`

Rien d’étrange jusque-là.

Si maintenant je fais :

`echo strlen("Chloé"); // Le retour va m'afficher 6 caractères`

Bah pourquoi **6** ? Alors quand on compte **5**.

Car comme je l’ai cité plus haut, la fonction “strlen” calcule la longueur d’une chaîne de caractères en octets. Et donc certains caractères peuvent être codé sur deux octets. Ce qui est le cas du “é” dans notre exemple au-dessus. Donc au lieu de compter 5 caractères, il va plutôt en compte 6.

C’est pour cela il est préférable d’utiliser la fonction “**mb_strlen**” qui sera plus adapter. Cette dernière va compter le nombre de caractères et non pas d’octets. Elle est parfaite pour les chaînes de caractères qui utilisent des encodages comme UTF-8. C’est pratique pour les caractères spéciaux, les emojis, ou les alphabets non-latins.

Étant donné que la plupart du temps le charset qui est défini est l’UTF-8
Il est préférable d’utiliser cette dernière.

