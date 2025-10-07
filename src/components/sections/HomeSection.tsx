import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HomeSectionProps {
  onNavigate: (section: string) => void;
}

const HomeSection = ({ onNavigate }: HomeSectionProps) => {
  return (
    <section className="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          От Свияжска до Казанского Кремля
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Исторический маршрут по местам, где в 1552 году решалась судьба Казанского ханства. Пройдите путь войск Ивана Грозного от крепости-плацдарма до стен главной твердыни Поволжья.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-secondary">
          <CardHeader>
            <Icon name="Castle" size={40} className="text-secondary mb-2" />
            <CardTitle>Военная история</CardTitle>
            <CardDescription>Крепости и укрепления XVI века</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Увидите места сражений и фортификационные сооружения эпохи Ивана Грозного</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-accent">
          <CardHeader>
            <Icon name="Church" size={40} className="text-accent mb-2" />
            <CardTitle>Православные святыни</CardTitle>
            <CardDescription>Храмы и монастыри</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Посетите церкви и соборы, построенные после взятия Казани</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-primary">
          <CardHeader>
            <Icon name="BookOpen" size={40} className="text-primary mb-2" />
            <CardTitle>Живая история</CardTitle>
            <CardDescription>10 точек маршрута</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Маршрут рассчитан на 2 дня и охватывает ключевые события похода 1552 года</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button size="lg" onClick={() => onNavigate('map')} className="text-lg px-8 py-6 hover:scale-105 transition-transform">
          <Icon name="Map" size={24} className="mr-2" />
          Начать путешествие
        </Button>
      </div>
    </section>
  );
};

export default HomeSection;
