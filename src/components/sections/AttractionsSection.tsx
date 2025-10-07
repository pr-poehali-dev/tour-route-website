import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { RoutePoint, routePoints, getCategoryColor, getCategoryIcon } from '@/lib/routeData';

interface AttractionsSectionProps {
  onPointClick: (point: RoutePoint) => void;
}

const AttractionsSection = ({ onPointClick }: AttractionsSectionProps) => {
  return (
    <section className="animate-fade-in">
      <h2 className="text-4xl font-bold mb-8 text-center">Достопримечательности</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {routePoints.map((point, index) => (
          <Card 
            key={point.id} 
            className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => onPointClick(point)}
          >
            <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <Icon name={getCategoryIcon(point.category) as any} size={64} className="text-primary" />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {point.name}
                <span className={`w-3 h-3 rounded-full ${getCategoryColor(point.category)}`}></span>
              </CardTitle>
              <CardDescription>{point.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                <Icon name="Eye" size={16} className="mr-2" />
                Подробнее
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AttractionsSection;
