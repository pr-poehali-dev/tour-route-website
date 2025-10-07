import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface RoutePoint {
  id: number;
  name: string;
  description: string;
  x: number;
  y: number;
  category: 'nature' | 'history' | 'culture';
  details: string;
  image: string;
}

const routePoints: RoutePoint[] = [
  {
    id: 1,
    name: 'Смотровая площадка "Панорама"',
    description: 'Захватывающий вид на долину',
    x: 20,
    y: 30,
    category: 'nature',
    details: 'Живописная смотровая площадка открывает вид на всю долину. Идеальное место для фотографий на рассвете и закате. Высота 1200м над уровнем моря.',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    name: 'Старинная крепость',
    description: 'Архитектурный памятник XII века',
    x: 45,
    y: 50,
    category: 'history',
    details: 'Крепость была построена в XII веке и служила защитным сооружением. Сохранились башни, стены и внутренний двор. Экскурсии проводятся ежедневно.',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    name: 'Водопад "Серебряный"',
    description: 'Каскадный водопад высотой 45м',
    x: 70,
    y: 25,
    category: 'nature',
    details: 'Один из самых красивых водопадов региона. Высота падения воды 45 метров. Оборудована смотровая площадка и зона отдыха. Доступен круглый год.',
    image: '/placeholder.svg'
  },
  {
    id: 4,
    name: 'Музей народного быта',
    description: 'Коллекция традиционных ремёсел',
    x: 55,
    y: 70,
    category: 'culture',
    details: 'Музей представляет богатую коллекцию предметов народного быта, традиционных костюмов и изделий ремесленников. Мастер-классы по гончарному делу и ткачеству.',
    image: '/placeholder.svg'
  },
  {
    id: 5,
    name: 'Горное озеро',
    description: 'Кристально чистое озеро',
    x: 80,
    y: 60,
    category: 'nature',
    details: 'Высокогорное озеро с прозрачной водой. Глубина до 30 метров. Разрешена рыбалка. Рядом оборудована зона для кемпинга и пикников.',
    image: '/placeholder.svg'
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPoint, setSelectedPoint] = useState<RoutePoint | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'nature': return 'bg-green-500';
      case 'history': return 'bg-secondary';
      case 'culture': return 'bg-accent';
      default: return 'bg-primary';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'nature': return 'Trees';
      case 'history': return 'Castle';
      case 'culture': return 'Palette';
      default: return 'MapPin';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-yellow-50">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Маршрут Открытий
            </h1>
            <div className="flex gap-2 md:gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'route', label: 'Маршрут', icon: 'Route' },
                { id: 'attractions', label: 'Достопримечательности', icon: 'Landmark' },
                { id: 'map', label: 'Карта', icon: 'Map' },
                { id: 'contacts', label: 'Контакты', icon: 'Phone' }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
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

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <section className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Добро пожаловать в путешествие
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Откройте для себя уникальный маршрут, сочетающий природные красоты, историческое наследие и культурные традиции
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-green-500">
                <CardHeader>
                  <Icon name="Trees" size={40} className="text-green-500 mb-2" />
                  <CardTitle>Природа</CardTitle>
                  <CardDescription>Горы, водопады, озёра</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Насладитесь потрясающими видами и чистым воздухом</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-secondary">
                <CardHeader>
                  <Icon name="Castle" size={40} className="text-secondary mb-2" />
                  <CardTitle>История</CardTitle>
                  <CardDescription>Архитектурные памятники</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Прикоснитесь к истории древних времён</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-accent">
                <CardHeader>
                  <Icon name="Palette" size={40} className="text-accent mb-2" />
                  <CardTitle>Культура</CardTitle>
                  <CardDescription>Традиции и ремёсла</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Познакомьтесь с местными обычаями и мастерами</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" onClick={() => setActiveSection('map')} className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                <Icon name="Map" size={24} className="mr-2" />
                Начать путешествие
              </Button>
            </div>
          </section>
        )}

        {activeSection === 'route' && (
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
                        <p className="text-muted-foreground">Полный маршрут: 2-3 дня</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mountain" className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Сложность</p>
                        <p className="text-muted-foreground">Средняя (подходит для всех возрастов)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Точек маршрута</p>
                        <p className="text-muted-foreground">5 уникальных локаций</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="relative">
                {routePoints.map((point, index) => (
                  <div key={point.id} className="flex items-center gap-4 mb-6 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className={`w-12 h-12 rounded-full ${getCategoryColor(point.category)} flex items-center justify-center text-white font-bold shadow-lg`}>
                      {index + 1}
                    </div>
                    <Card className="flex-1 hover:shadow-lg transition-all cursor-pointer" onClick={() => setSelectedPoint(point)}>
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
            </div>
          </section>
        )}

        {activeSection === 'attractions' && (
          <section className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-center">Достопримечательности</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {routePoints.map((point, index) => (
                <Card 
                  key={point.id} 
                  className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedPoint(point)}
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
        )}

        {activeSection === 'map' && (
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
                      onClick={() => setSelectedPoint(point)}
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
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Природа</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-secondary rounded-full"></div>
                    <span className="text-sm">История</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    <span className="text-sm">Культура</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {activeSection === 'contacts' && (
          <section className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-center">Контакты</h2>
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Свяжитесь с нами</CardTitle>
                  <CardDescription>Мы ответим на все ваши вопросы</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@tourism-route.ru</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-primary" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">Туристический центр, ул. Центральная, 1</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" className="text-primary" />
                    <div>
                      <p className="font-semibold">Время работы</p>
                      <p className="text-muted-foreground">Ежедневно с 9:00 до 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}
      </main>

      <Dialog open={!!selectedPoint} onOpenChange={() => setSelectedPoint(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <Icon name={selectedPoint ? getCategoryIcon(selectedPoint.category) as any : 'MapPin'} size={28} />
              {selectedPoint?.name}
            </DialogTitle>
            <DialogDescription>{selectedPoint?.description}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <Icon name={selectedPoint ? getCategoryIcon(selectedPoint.category) as any : 'MapPin'} size={80} className="text-primary" />
            </div>
            <p className="text-foreground leading-relaxed">{selectedPoint?.details}</p>
            <div className="flex gap-2">
              <Button className="flex-1">
                <Icon name="Navigation" size={16} className="mr-2" />
                Построить маршрут
              </Button>
              <Button variant="outline" className="flex-1">
                <Icon name="Share2" size={16} className="mr-2" />
                Поделиться
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Маршрут Открытий © 2024</p>
          <p className="text-sm opacity-90">Откройте для себя незабываемые путешествия</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
