## Personal Portfolio Website

## Full TechStack
NextJS 13, TailwindCSS, ESLint, Framer Motion, Sanity.IO, Vercel

## Credits
Sonny's youtube video (https://www.youtube.com/watch?v=urgi2iz9P6U) has helped me extremely on the development and process of this personal portfolio. Sonny's github (https://github.com/PapaReact)

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [Yarn](https://yarnpkg.com/getting-started/install) package manager

### Installation
1. Clone the repository
   ```bash
   git clone [your-repository-url]
   cd portfolio-nextjs-yarn
   ```

2. Install dependencies
   ```bash
   yarn install
   ```

3. Environment Setup (not necessary, only contains google analytics API key)
   Create a `.env.local` file in the root directory with the following:
   ```
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id
   ```

## Running the Project

### Development Server
```bash
yarn dev
```
The site will be available at [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
yarn build
yarn start
```

### Linting
```bash
yarn lint
```

