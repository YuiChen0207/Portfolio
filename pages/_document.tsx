import { Html, Head, NextScript } from 'next/document'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Images from './components/Images'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth'>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
      <Head />
      <body className='text-black'>
        <NextScript />
        <Header />
        <Hero />
        <About />
        <Images />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </body>
    </Html>
  )
}
