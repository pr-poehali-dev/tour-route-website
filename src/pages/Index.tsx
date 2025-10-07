import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HomeSection from '@/components/sections/HomeSection';
import RouteSection from '@/components/sections/RouteSection';
import AttractionsSection from '@/components/sections/AttractionsSection';
import MapSection from '@/components/sections/MapSection';
import ContactsSection from '@/components/sections/ContactsSection';
import PointDialog from '@/components/PointDialog';
import { RoutePoint } from '@/lib/routeData';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPoint, setSelectedPoint] = useState<RoutePoint | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-yellow-50">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && <HomeSection onNavigate={setActiveSection} />}
        {activeSection === 'route' && <RouteSection onPointClick={setSelectedPoint} />}
        {activeSection === 'attractions' && <AttractionsSection onPointClick={setSelectedPoint} />}
        {activeSection === 'map' && <MapSection onPointClick={setSelectedPoint} />}
        {activeSection === 'contacts' && <ContactsSection />}
      </main>

      <PointDialog point={selectedPoint} onClose={() => setSelectedPoint(null)} />

      <Footer />
    </div>
  );
};

export default Index;
