/* Exercice 1 TypeScript
Contexte
Vous êtes en train de développer une application pour gérer une petite bibliothèque de livres. Vous devez créer un ensemble de classes, interfaces, types, et fonctions pour modéliser les livres, les auteurs, et les opérations possibles sur cette bibliothèque.

Partie 1 : Types de base et Interfaces
Créez une interface Author pour représenter un auteur de livre. Un auteur a un nom (name), une année de naissance (birthYear), et un tableau de genres (genres) qu'il ou elle écrit.

Créez une interface Book pour représenter un livre. Un livre a un titre (title),
un auteur (author de type Author), un nombre de pages (pages),
et un boolean isAvailable pour savoir s'il est disponible ou non dans la bibliothèque.

Partie 2 : Fonctions
Créez une fonction createBook qui prend un titre, un auteur (de type Author), et un nombre de pages. Cette fonction doit retourner un objet de type Book avec le isAvailable par défaut à true.

Créez une fonction toggleAvailability qui prend un objet de type Book et inverse la disponibilité de ce livre (isAvailable).

Partie 3 : Classes
Créez une classe Library qui représente la bibliothèque. Cette classe doit avoir un tableau de livres (books), et les méthodes suivantes :

addBook(book: Book): ajoute un livre à la bibliothèque.
removeBook(title: string): supprime un livre par son titre.
findBookByTitle(title: string): renvoie le livre avec le titre correspondant.
listAvailableBooks(): renvoie un tableau de livres disponibles.
Créez une méthode getBooksByAuthor(authorName: string) dans la classe Library qui renvoie un tableau de livres écrits par un auteur donné.

Partie 4 : Test
Instanciez la classe Library et ajoutez plusieurs livres à la bibliothèque.

Testez les différentes méthodes de la classe Library pour vérifier leur bon fonctionnement (ajout, suppression, recherche de livres).
*/
// Partie 1 : Types de base et Interfaces
