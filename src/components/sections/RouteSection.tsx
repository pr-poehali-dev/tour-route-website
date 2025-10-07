import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { RoutePoint, routePoints, getCategoryColor, getCategoryIcon } from '@/lib/routeData';

interface RouteSectionProps {
  onPointClick: (point: RoutePoint) => void;
}

const RouteSection = ({ onPointClick }: RouteSectionProps) => {
  return (
    <section className="animate-fade-in">
      <h2 className="text-4xl font-bold mb-8 text-center">Описание маршрута</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Info" size={24} />
              О маршруте
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="Clock" className="text-primary mt-1" />
                <div>
                  <p className="font-semibold">Продолжительность</p>
                  <p className="text-muted-foreground">1-2 дня (День 1: Свияжск, День 2: Казань)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Calendar" className="text-primary mt-1" />
                <div>
                  <p className="font-semibold">Исторический период</p>
                  <p className="text-muted-foreground">1551-1552 гг. — поход Ивана IV Грозного</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="MapPin" className="text-primary mt-1" />
                <div>
                  <p className="font-semibold">Точек маршрута</p>
                  <p className="text-muted-foreground">10 исторических объектов в 3 кластерах</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {[1, 2].map((day) => (
          <div key={day} className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Icon name="Calendar" size={24} className="text-primary" />
              День {day}
            </h3>
            {Array.from(new Set(routePoints.filter(p => p.day === day).map(p => p.cluster))).map((cluster) => (
              <div key={cluster} className="mb-6">
                <h4 className="text-lg font-semibold text-muted-foreground mb-3 ml-4">{cluster}</h4>
                {routePoints.filter(p => p.day === day && p.cluster === cluster).map((point, index) => (
                  <div key={point.id} className="flex items-center gap-4 mb-4 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className={`w-12 h-12 rounded-full ${getCategoryColor(point.category)} flex items-center justify-center text-white font-bold shadow-lg`}>
                      {point.id}
                    </div>
                    <Card className="flex-1 hover:shadow-lg transition-all cursor-pointer" onClick={() => onPointClick(point)}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Icon name={getCategoryIcon(point.category) as any} size={20} />
                          {point.name}
                        </CardTitle>
                        <CardDescription>{point.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RouteSection;
