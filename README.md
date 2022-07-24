<div align="center">
    <img src="ci-svelte.webp" />
    <h1>CodeIgniter4 + Svelte Application Starter</h1>
</div>

<p align="center">
  <a href="https://github.com/firtadokei/ci-svelte-appstarter/releases">
    <img src="https://custom-icon-badges.herokuapp.com/github/v/release/firtadokei/ci-svelte-appstarter?logo=tag">
  </a>
  <a href="https://packagist.org/packages/mihatori/ci-svelte-appstarter">
    <img src="https://badges.hiptest.com:/packagist/dt/mihatori/ci-svelte-appstarter?color=%23c700ff&logo=packagist&logoColor=%23c700ff">
  </a>
  <img src="https://custom-icon-badges.herokuapp.com/packagist/l/mihatori/ci-svelte-appstarter?logo=law">
<p>
    
## 💡 Features:
- ⚡ Super fast single page application (SPA).
- 🔥 Hot Module Replacment (HMR).
- 🧩 Easy to install and update.
- 🪓 Easy to customize.
- 🔧 Zero Configuarations.
- ✨ And much more...

## Pre-packed:
> **Note:** none of these plugins or frameworks are required, feel free to remove or replace them as you like.
- [Windicss](https://windicss.org/): on-demand alternative to Tailwind, with bunch of additional cool features and much faster.
- [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router): A lightweight routing plugin.

## Installation:

> Make sure your server meets [CI4 requirements](https://www.codeigniter.com/user_guide/intro/requirements.html).

run the following command to create a project:

```
composer create-project mihatori/ci-svelte-appstarter
```

## Setup

- Copy `env` to `.env`.
- Run: `npm intall` to install node dependencies.
- Run: `npm run dev` to serve your assets.
- Now start you CI server: `php spark serve` or access it through you virtual host.

> **IMPORTANT:**
> 
> after the installation, there will be no bundled assets, so make sure to run `npm run dev` to serve them or just build them with `npm run build` command.

## Customizing:
This project uses [**CodeIgniter Vite**](https://github.com/firtadokei/codeigniter-vitejs) package, [read more about it](https://github.com/firtadokei/codeigniter-vitejs).

## Something doesn't work fine:
Please feel free to open an issue and we will try to fix it on the fly.

## Contribuiting:
Literally any help will be appreciated, feel free to use PRs, and thanks in advance.

## Licence
MIT License &copy; 2022 [Mihatori Kei](https://github.com/firtadokei)
