import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { RoutePoint, getCategoryIcon } from '@/lib/routeData';

interface PointDialogProps {
  point: RoutePoint | null;
  onClose: () => void;
}

const PointDialog = ({ point, onClose }: PointDialogProps) => {
  return (
    <Dialog open={!!point} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Icon name={point ? getCategoryIcon(point.category) as any : 'MapPin'} size={28} />
            {point?.name}
          </DialogTitle>
          <DialogDescription>{point?.description}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
            <Icon name={point ? getCategoryIcon(point.category) as any : 'MapPin'} size={80} className="text-primary" />
          </div>
          <p className="text-foreground leading-relaxed">{point?.details}</p>
          {point && (
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Calendar" size={16} className="text-primary" />
                <span className="text-sm font-semibold">День {point.day}</span>
                <span className="text-muted-foreground text-sm">| {point.cluster}</span>
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
  );
};

export default PointDialog;
