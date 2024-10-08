# Site vitrine Hospit'Access

Site pour promouvoir les services/avantages de la plateforme Hospit'Access.

## Technologies utilisées

- **React** : Bibliothèque JavaScript pour la construction d'interfaces utilisateur.
- **TypeScript** : Superset typé de JavaScript pour une meilleure maintenabilité et moins d'erreurs.
- **Zustand** : Gestionnaire d'état minimaliste mais puissant.
- **React Router** : Routage déclaratif pour applications React.
- **Tailwind CSS** : Framework CSS utilitaire pour un design rapide et personnalisable.
- **shadcn/ui** : Collection de composants React réutilisables et accessibles.
- **Jest & React Testing Library** : Outils pour les tests unitaires et de composants.
- **ESLint & Prettier** : Outils pour maintenir un code propre et cohérent.
- **Husky** : Outil pour exécuter des scripts (comme des linters) avant les commits.
- **react-i18next** : Solution d'internationalisation pour React.
- **Axios** : Client HTTP basé sur les promesses pour le navigateur et node.js.
- **React Hook Form** : Bibliothèque performante pour la gestion des formulaires.
- **React Query** : Bibliothèque pour la gestion de l'état du serveur et les requêtes asynchrones.

## Fonctionnalités

- Structure de projet claire et modulaire
- Gestion d'état avec Zustand
- Routage avec React Router
- Styling avec Tailwind CSS et composants shadcn/ui
- Tests unitaires et de composants
- Linting et formatting automatiques
- Hooks de pré-commit pour assurer la qualité du code
- Support multilingue avec react-i18next
- Gestion des requêtes HTTP avec Axios
- Gestion efficace des formulaires avec React Hook Form
- Gestion optimisée des requêtes et du cache avec React Query

## Comment utiliser ce repository

1. Clonez ce repository
2. Installez les dépendances avec `npm install`
3. Lancez le serveur de développement avec `npm start`
4. Commencez à développer !

## Scripts disponibles

- `npm start` : Lance le serveur de développement
- `npm test` : Exécute les tests
- `npm run build` : Crée une version de production
- `npm run lint` : Vérifie le code avec ESLint
- `npm run format` : Formate le code avec Prettier

## Structure du projet

```
my-react-boilerplate/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── store/
│   ├── utils/
│   ├── styles/
│   ├── api/
│   │   └── axios.ts
│   ├── locales/
│   │   ├── en.json
│   │   └── fr.json
│   ├── i18n.ts
│   ├── App.tsx
│   └── index.tsx
├── public/
├── tests/
├── .storybook/
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json
├── package.json
└── README.md
```

## React Hook Form

React Hook Form est utilisé pour gérer les formulaires de manière efficace et performante. Voici un exemple d'utilisation :

```jsx
import { useForm } from 'react-hook-form';

function LoginForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name='email' ref={register({ required: true })} />
      {errors.email && <span>This field is required</span>}
      <input type='submit' />
    </form>
  );
}
```

## React Query

React Query est configuré pour gérer efficacement les requêtes et le cache côté client. Voici un exemple d'utilisation :

```jsx
import { useQuery } from '@tanstack/react-query';

function TodoList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred</div>;

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
