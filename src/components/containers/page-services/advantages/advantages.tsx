import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '../../../ui/carousel';
import { Card, CardContent } from '../../../ui/card';
import Autoplay from 'embla-carousel-autoplay';
import { Clock, SquareStack } from 'lucide-react';

export interface CarouselCardContent {
  mainTitle: string;
  cards: Array<{
    title: string;
    icon: 'Clock' | 'SquareStack';
    textSegments: Array<{ text: string; isPrimary: boolean }>;
  }>;
}

interface AdvantagesProps {
  advantagesContent: CarouselCardContent;
}

export const Advantages: React.FC<AdvantagesProps> = ({ advantagesContent }) => {
  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    onSelect();

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <div className='w-full min-h-screen mt-32 lg:mt-60 isolate overflow-hidden bg-white'>
      <div className='w-full h-auto flex flex-col justify-center lg:justify-start mb-10 lg:mb-0 px-[5%] xl:px-[10%]'>
        <h2 className='text-4xl xl:text-5xl font-bold tracking-tight text-primary'>
          {advantagesContent.mainTitle}
        </h2>
      </div>
      <div className='w-full-h-auto px-[5%]'>
        <div className='w-full h-auto flex flex-col justify-center px-8 sm:px-6 mt-8'>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            setApi={setApi}
            plugins={[plugin.current]}
            className='w-full'
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {advantagesContent.cards.map((content, index) => (
                <CarouselItem
                  key={index}
                  className='basis-full md:basis-1/2 lg:basis-1/3 2xl:basis-1/4'
                >
                  <div className='p-2'>
                    <Card className='shadow-md shadow-backgroundFourthSpecialColor'>
                      <CardContent className='flex aspect-[0.8/1] items-center justify-center px-2'>
                        <div className=' w-full h-full flex flex-col items-start justify-between p-[5%]'>
                          <div className='flex flex-col'>
                            <h3 className='font-semibold text-xl xl:text-2xl text-primary'>
                              {content.title}
                            </h3>
                            {content.icon === 'Clock' ? (
                              <Clock className='h-10 w-10 text-primary mt-[15%] rounded-full shadow-md shadow-backgroundFourthSpecialColor' />
                            ) : (
                              <SquareStack className='h-10 w-10 text-primary mt-[15%] rounded-full shadow-md shadow-backgroundFourthSpecialColor' />
                            )}
                          </div>
                          <p className='text-secondary text-muted-foreground xl:text-xl'>
                            {content.textSegments.map((segment, idx) => (
                              <span key={idx} className={segment.isPrimary ? 'text-primary' : ''}>
                                {segment.text}
                              </span>
                            ))}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className='pt-10 text-center'>
            {advantagesContent.cards.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full mx-1 transition-all ${
                  index === current ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
