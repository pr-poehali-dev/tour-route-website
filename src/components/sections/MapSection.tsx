import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { RoutePoint, routePoints, getCategoryColor, getCategoryIcon } from '@/lib/routeData';

interface MapSectionProps {
  onPointClick: (point: RoutePoint) => void;
}

const MapSection = ({ onPointClick }: MapSectionProps) => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  return (
    <section className="animate-fade-in">
      <h2 className="text-4xl font-bold mb-8 text-center">Интерактивная карта маршрута</h2>
      <Card className="max-w-5xl mx-auto">
        <CardContent className="p-6">
          <div className="relative w-full h-[600px] bg-gradient-to-br from-green-100 via-blue-100 to-yellow-100 rounded-lg overflow-hidden shadow-inner">
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              {routePoints.map((point, index) => {
                if (index < routePoints.length - 1) {
                  const nextPoint = routePoints[index + 1];
                  return (
                    <line
                      key={`line-${point.id}`}
                      x1={`${point.x}%`}
                      y1={`${point.y}%`}
                      x2={`${nextPoint.x}%`}
                      y2={`${nextPoint.y}%`}
                      stroke="#FF6B35"
                      strokeWidth="3"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                    />
                  );
                }
                return null;
              })}
            </svg>

            {routePoints.map((point) => (
              <div
                key={point.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300"
                style={{ 
                  left: `${point.x}%`, 
                  top: `${point.y}%`,
                  zIndex: hoveredPoint === point.id ? 10 : 2,
                  transform: hoveredPoint === point.id ? 'translate(-50%, -50%) scale(1.2)' : 'translate(-50%, -50%)'
                }}
                onMouseEnter={() => setHoveredPoint(point.id)}
                onMouseLeave={() => setHoveredPoint(null)}
                onClick={() => onPointClick(point)}
              >
                <div className={`w-12 h-12 ${getCategoryColor(point.category)} rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-shadow animate-scale-in`}>
                  <Icon name={getCategoryIcon(point.category) as any} size={24} />
                </div>
                
                {hoveredPoint === point.id && (
                  <div className="absolute top-full mt-2 bg-white rounded-lg shadow-xl p-3 w-48 animate-fade-in">
                    <p className="font-bold text-sm">{point.name}</p>
                    <p className="text-xs text-muted-foreground">{point.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-4 justify-center flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-secondary rounded-full"></div>
              <span className="text-sm">Военная история</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-accent rounded-full"></div>
              <span className="text-sm">Православие</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
              <span className="text-sm">Культура</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default MapSection;
