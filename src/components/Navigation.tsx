import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'route', label: 'Маршрут', icon: 'Route' },
    { id: 'attractions', label: 'Достопримечательности', icon: 'Landmark' },
    { id: 'map', label: 'Карта', icon: 'Map' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            По следам Ивана Грозного
          </h1>
          <div className="flex gap-2 md:gap-6">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                onClick={() => onSectionChange(item.id)}
                className="transition-all duration-300 hover:scale-105"
              >
                <Icon name={item.icon as any} size={18} className="md:mr-2" />
                <span className="hidden md:inline">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
