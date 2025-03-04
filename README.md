## Boileplate CSR Version

### Version 1.1.0

### Latest Update

#### 10 July 2024

- adjust foldering base on SOP created by FE team
- add example for api call
- add example for variable, utils, typings, store, modules
- update nvmrc (node version) to 20.15.0
- docker

#### 7 Aug 2024

- adjust axios interceptor (search 'interceptor v1' or 'interceptor v2' for detail)
- add husky for pre-commit
- add utils (number formator & image loader)
- update zustand (like how to utilize devtools, persist, and some set & reset state to initial state)

- Note : Please update atleast per 3 months or when you want to start a new project using this after 3 months

## Tech stack / tech doc

- [zustand](https://github.com/pmndrs/zustand)
  - as state management
- [axios](https://www.npmjs.com/package/axios)
- [axios interceptor](https://www.bezkoder.com/axios-interceptors-refresh-token/)
- [axios multiple-request](https://stackoverflow.com/questions/57890667/axios-interceptor-refresh-token-for-multiple-requests)
  - axios as library to make HTTP request
- [docs](https://tailwindcss.com/docs/configuration)
  - use gap such as this space-x-2 / space-y-2 (for flex-col)
- [day-js](https://day.js.org/)
  - replacement for moment.js
- [18next](https://react.i18next.com/)
  - for internationalization
- [vitest](https://vitest.dev/)
  - for testing

## million/lint

- [million/lint](https://million.dev/)
  - to help identify and fix slow code

## custom component

- [ui.shadcn](https://ui.shadcn.com/docs)
  - used for creating custom component as needed
  - as to how we run is throught CLI : `npx shadcn-ui@latest add button` [(docs)](https://ui.shadcn.com/docs/components/button)

### for ui.shadcn used some library to run, details below

- class-variance-authority
- [@radix-ui](https://www.radix-ui.com/)
  - UI Component library, for example: Dialog, Popover, Tooltip, etc. install the component as needed using CLI
- clsx
- [lucide-react](https://lucide.dev/guide/packages/lucide-react)
  - for icon
- tailwind-merge

# DELETE ABOVE THIS LINE FOR NEW PROJECT

## FE Standarization

- [FE SOP](https://ultravoucher.atlassian.net/wiki/spaces/UE/pages/1387495548/SOP+Frontend+-+How+to+do)

## Env

- ask your colleagues for the env

## To Run

- {{package manager}} / {{package manager}} install
- {{package manager}} dev

## Before commit DO THIS!

- {{package manager}} validate
  to check if there's an error or no, if exist please fix it first!

## To Build

- {{package manager}} build

## TAG - RELEASE

- npm version [major | minor | patch]
  (automatically create a tag with version as a name/label)
  [npm version](https://docs.npmjs.com/cli/v6/commands/npm-version)

- git tag
  (to check if the tag version in the list)
- git push origin --tags
  (to push all available tags)
- git push origin : <tag_name>
  (to push a single tag)

- git tag -d <tag_name>
  git push origin :refs/tags/<tag_name>
  (to remove a tag from local & repo)

- git tag <tag_name>
  create a tag
  [tags documentation](https://support.atlassian.com/bitbucket-cloud/docs/repository-tags/)

## Convinential Commit

- <type>(optional scope): [<ticket-number>] <description>
  (format)
  for example : feat(users): [XX001] add new feature A

  list of <type>:

  - (feat) : A new feature or enhancement is introduced.
  - (fix) : A bug fix or error correction is made.
  - (chore) : Changes related to build processes, tooling, or other mundane tasks that don't affect the code's functionality.
  - (docs) : Documentation updates or improvements.
  - (style) : Changes related to code formatting, style, or whitespace, with no impact on code functionality.
  - (refactor) : Code changes that neither fix a bug nor add a feature, but improve the code structure or design.
  - (perf) : Performance-related improvements or optimizations.
  - (test) : Additions or modifications to test cases or testing-related code.
  - (revert) : Reverting a previous commit.
  - (build) : Changes related to the build system or external dependencies.
  - (ci) : Updates to continuous integration (CI) configuration files and scripts.
  - (wip) : Works in progress; used during development but not meant for the final commit history.

# Another recommendation package is:

- for slider => react-slick slick-carousel @types/react-slick
