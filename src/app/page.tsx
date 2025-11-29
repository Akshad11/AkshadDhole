"use client"
import React from 'react'
import Layout from './components/Layout'
import HeroSection from './components/HeroSection'
import SkillsSlider from './components/SkillsSlider'
import ExperienceTree from './components/ExperienceTree'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'

function Home() {
  return (
    <div>
      <Layout currentPage="home" setPage={() => { }}>
        <HeroSection />
      </Layout>
      <SkillsSlider />
      <ExperienceTree />
      <ProjectsSection />
      <Footer />
    </div>
  )
}

export default Home