import { NavBar } from '../components/NavBar';
import { ThemeToggle } from '../components/ThemeToggle';
import { StarBackground } from '@/components/StarBackground';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillSection';
import { ProjectsSection } from '../components/ProjectSection';  

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Them Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />  

        {/* Navbar */}
        <NavBar />

        {/* Main Content */}
        <main> 
            <HeroSection />
             <AboutSection />
             <SkillsSection /> 
              <ProjectsSection />  
        </main>

        {/* Footer */}
    </div>
};