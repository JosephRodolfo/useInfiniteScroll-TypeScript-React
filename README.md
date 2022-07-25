# React TypeScript Fake Text/Article Generator

This repo contains a reusable useInfiniteScroll custom React hook and a simple fake React blog site to demo it, with conditional rendering of a loading icon. It relys on IntersectionObserver to determine when the end of the page has been reached. 

For fake content it uses the Rust fake article text generator API and web server I created here: https://github.com/JosephRodolfo/Random-Text-Generator-Actix-Rust. The goal of this project was to learn more Typescript, but I also got to use the useRoutes hook for the first time, and learned how to pass props down through a "Link" React component using state and useLocation, which I hadn't done before, as well as got more practice using v6 React Router. 

Try it out here by scrolling to the bottom of the page: https://josephrodolfo.github.io/useInfiniteScroll-Typescript-React/.