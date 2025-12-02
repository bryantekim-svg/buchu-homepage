import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RealityScroll from './components/RealityScroll';
import PhilosophyList from './components/PhilosophyList';
import ClimaxWalk from './components/ClimaxWalk';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';

const App: React.FC = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);

  // 시뮬레이션: 방문자 수 카운트 (로컬 스토리지 활용)
  useEffect(() => {
    const visits = parseInt(localStorage.getItem('admin_visits') || '0');
    localStorage.setItem('admin_visits', (visits + 1).toString());
  }, []);

  if (isAdminMode) {
    return <AdminDashboard onLogout={() => setIsAdminMode(false)} />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-black text-white">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <RealityScroll />
        <PhilosophyList />
        <ClimaxWalk />
        <ContactSection />
      </main>

      <Footer onAdminClick={() => setIsAdminMode(true)} />
    </div>
  );
};

export default App;