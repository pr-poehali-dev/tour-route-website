import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
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
  );
};

export default ContactsSection;
