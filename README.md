# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 🌙 Dark mode support
- 📱 Fully responsive
- ⚡ Fast page loads with Vite
- 🎯 SEO optimized
- 📝 Blog/Writing section with Markdown support
- 📬 Contact form with Formspree integration
- 🧪 Unit tests with Vitest

## Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [Lucide Icons](https://lucide.dev/)
- [Formspree](https://formspree.io/)

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

### Running Tests

```bash
npm test
# or
yarn test
```

## Customization

1. Update personal information in the components
2. Replace placeholder images in the `public` directory
3. Update social media links in the `Footer` and `Contact` components
4. Add your Formspree form ID in the `Contact` component
5. Add your projects in `src/data/projects.json`
6. Add your blog posts in the `Writing` component

## Deployment

The site can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.

### Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Set build command to `npm run build` or `yarn build`
4. Set publish directory to `dist`

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect the Vite configuration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
