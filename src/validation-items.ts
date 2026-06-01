export type ValidationItem = {
  title: string
  goal: string
  method: string
  expected: string
}

export const validationItems: ValidationItem[] = [
  {
    title: 'Local Development',
    goal: 'Run and build the Vite React TypeScript app locally.',
    method: 'npm install, npm run build, npm run docs:build.',
    expected: 'App and docs builds complete successfully.',
  },
  {
    title: 'GitHub Repository',
    goal: 'Host the source code in GitHub.',
    method: 'Create and push to thiswind/demo-project-development.',
    expected: 'Repository is reachable and contains the latest commit.',
  },
  {
    title: 'GitHub Actions',
    goal: 'Validate automated builds in CI.',
    method: 'Run CI workflow on push and pull_request.',
    expected: 'The latest CI workflow run is successful.',
  },
  {
    title: 'GitHub Pages Docs',
    goal: 'Host project documentation with GitHub Pages.',
    method: 'Build VitePress docs and deploy with GitHub Actions Pages.',
    expected: 'Docs are available at the GitHub Pages URL.',
  },
  {
    title: 'Vercel Deployment',
    goal: 'Deploy the production app to Vercel.',
    method: 'Create or link a Vercel project and run a production deploy.',
    expected: 'The production deployment responds with this app.',
  },
  {
    title: 'Vercel Domain',
    goal: 'Bind a custom dev-learn-hub.me subdomain.',
    method: 'Alias the production deployment to demo-project-development.dev-learn-hub.me.',
    expected: 'The custom domain serves this app over HTTPS.',
  },
]
