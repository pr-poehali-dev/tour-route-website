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
  category: 'history' | 'culture' | 'religion';
  details: string;
  image: string;
  day: number;
  cluster: string;
}

const routePoints: RoutePoint[] = [
  {
    id: 1,
    name: 'Поклонный крест у реки Свияги',
    description: 'Место высадки русских войск в 1551 году',
    x: 15,
    y: 25,
    category: 'history',
    details: 'Отправная точка маршрута. Здесь в 1551 году высадились первые русские полки для строительства опорной крепости. Крест установлен в память об этом судьбоносном событии. С площадки открывается вид на историческую гавань, где стояли струги Ивана Грозного.',
    image: '/placeholder.svg',
    day: 1,
    cluster: 'Свияжск и окрестности'
  },
  {
    id: 2,
    name: 'Остров-град Свияжск',
    description: 'Крепость-плацдарм, построенная за 4 недели',
    x: 25,
    y: 35,
    category: 'history',
    details: 'Главный плацдарм для штурма Казани. Крепость была срублена под Угличем, сплавлена по Волге и собрана на острове за 4 недели — шедевр военно-инженерного искусства XVI века. Здесь находятся Успенский собор с уникальной фреской святого Христофора и деревянная Троицкая церковь, построенная без гвоздей.',
    image: '/placeholder.svg',
    day: 1,
    cluster: 'Свияжск и окрестности'
  },
  {
    id: 3,
    name: 'Печищенский геологический разрез',
    description: 'Место добычи камня для строительства храмов',
    x: 30,
    y: 45,
    category: 'history',
    details: 'С этих крутых волжских берегов добывался известняк для масштабного строительства белокаменных храмов и укреплений в Казани и Свияжске, начатого по указу Ивана Грозного после покорения ханства.',
    image: '/placeholder.svg',
    day: 1,
    cluster: 'Свияжск и окрестности'
  },
  {
    id: 4,
    name: 'Гора "Высокая" (Лысая гора)',
    description: 'Командный пункт Ивана Грозного',
    x: 20,
    y: 65,
    category: 'history',
    details: 'По преданию, именно здесь Иван Грозный установил одну из своих осадных пушек и организовал командный пункт, с которого руководил штурмом Казани. Панорамный вид с горы позволяет оценить стратегическую важность этой позиции.',
    image: '/placeholder.svg',
    day: 1,
    cluster: 'Обзорные точки'
  },
  {
    id: 5,
    name: 'Раифский Богородицкий монастырь',
    description: 'Духовный центр православия в Поволжье',
    x: 35,
    y: 75,
    category: 'religion',
    details: 'Монастырь основан в XVII веке отшельником Филаретом, выходцем из Чувашии, крещенной после падения Казани. Является прямым духовным следствием политики Ивана Грозного и одним из важнейших центров православия в Поволжье.',
    image: '/placeholder.svg',
    day: 1,
    cluster: 'Обзорные точки'
  },
  {
    id: 6,
    name: 'Казанский Кремль',
    description: 'Главная цель похода, взят 2 октября 1552 года',
    x: 60,
    y: 40,
    category: 'history',
    details: 'Главная цель похода и символ победы. После многодневной осады и подрыва стен 2 октября 1552 года войска Грозного ворвались в город. Кремль стал олицетворением падения ханства и утверждения русской власти. Здесь находятся мечеть Кул-Шариф, Благовещенский собор и башня Сююмбике.',
    image: '/placeholder.svg',
    day: 2,
    cluster: 'Казанский Кремль'
  },
  {
    id: 7,
    name: 'Мавзолеи казанских ханов',
    description: 'Место упокоения правителей Казанского ханства',
    x: 65,
    y: 35,
    category: 'history',
    details: 'Обнаружены в ходе археологических раскопок на территории Кремля. По мнению ученых, здесь упокоены несколько казанских ханов, в том числе противники Москвы. Это место символизирует закат эпохи Казанского ханства.',
    image: '/placeholder.svg',
    day: 2,
    cluster: 'Казанский Кремль'
  },
  {
    id: 8,
    name: 'Музей истории Благовещенского собора',
    description: 'Первый православный храм Казани',
    x: 70,
    y: 50,
    category: 'religion',
    details: 'Собор был первым православным храмом, заложенным в Казани после взятия. Его строительством лично руководили Иван Грозный и святитель Гурий, что подчеркивает государственную важность этого объекта.',
    image: '/placeholder.svg',
    day: 2,
    cluster: 'Казанский Кремль'
  },
  {
    id: 9,
    name: 'Церковь Святых Мучеников Адриана и Наталии',
    description: 'Место походной церкви Ивана Грозного',
    x: 75,
    y: 60,
    category: 'religion',
    details: 'По легенде, на этом месте стояла походная церковь Ивана Грозного. Позже здесь возникла Адриановская слобода, где селились пушкари, отличившиеся при штурме.',
    image: '/placeholder.svg',
    day: 2,
    cluster: 'Казанский Кремль'
  },
  {
    id: 10,
    name: 'Храм-памятник Спаса Нерукотворного',
    description: 'Мемориал павшим воинам 1552 года',
    x: 85,
    y: 70,
    category: 'religion',
    details: 'Освящен в 1823 году как главный мемориал в честь русских воинов, павших при взятии Казани. Выполняет роль памятника-усыпальницы и служит символом исторической памяти и примирения народов Поволжья.',
    image: '/placeholder.svg',
    day: 2,
    cluster: 'Завершение маршрута'
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPoint, setSelectedPoint] = useState<RoutePoint | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'history': return 'bg-secondary';
      case 'religion': return 'bg-accent';
      case 'culture': return 'bg-primary';
      default: return 'bg-primary';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'history': return 'Castle';
      case 'religion': return 'Church';
      case 'culture': return 'Palette';
      default: return 'MapPin';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-yellow-50">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              По следам Ивана Грозного
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
                  ))}
                </div>
              ))}
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
        )}

        {activeSection === 'contacts' && (
          <section className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-center">Контакты</h2>
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Полезная информация</CardTitle>
                  <CardDescription>Организация экскурсий и туров</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Users" className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Для кого маршрут</p>
                      <p className="text-muted-foreground">Школьные экскурсии, паломнические поездки, самостоятельные путешествия для любителей истории</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">География</p>
                      <p className="text-muted-foreground">Республика Татарстан: Свияжск (~60 км от Казани), Казань, Раифа</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="BookOpen" className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Тематика</p>
                      <p className="text-muted-foreground">Военная история XVI века, православная культура, архитектура и фортификация</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Info" className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Историческая справка</p>
                      <p className="text-muted-foreground">Маршрут посвящен походу Ивана Грозного на Казань в 1551-1552 годах, который изменил судьбу Поволжья</p>
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
            {selectedPoint && (
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Calendar" size={16} className="text-primary" />
                  <span className="text-sm font-semibold">День {selectedPoint.day}</span>
                  <span className="text-muted-foreground text-sm">| {selectedPoint.cluster}</span>
                </div>
              </div>
            )}
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
          <p className="text-lg font-semibold mb-2">По следам Ивана Грозного © 2024</p>
          <p className="text-sm opacity-90">От Свияжска до Казанского Кремля — история похода 1552 года</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;