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
import { MapPin } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

export interface BigCarouselCardContent {
  mainTitle: string;
  text: string;
  src?: string;
  alt?: string;
  cards: Array<{
    title: string;
    address: string;
    speciality: Array<{
      text: string;
    }>;
    src: string;
    alt: string;
  }>;
  partners: Array<{
    src: string;
    alt: string;
  }>;
}

interface PartnersProps {
  partnersContent: BigCarouselCardContent;
}

export const Partners: React.FC<PartnersProps> = ({ partnersContent }) => {
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
    <div className='w-full min-h-screen mt-16 relative isolate overflow-hidden bg-white'>
      <div className='w-full h-auto flex flex-col justify-center'>
        <div className='w-full h-auto flex flex-col justify-center'>
          <div className='w-full h-auto flex flex-col justify-center lg:justify-start mb-10 lg:mb-0 px-[5%] xl:px-[10%]'>
            <h2 className='text-4xl xl:text-5xl font-bold tracking-tight text-primary'>
              {partnersContent.mainTitle}
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
                  {partnersContent.cards.map((partner, index) => (
                    <CarouselItem
                      key={index}
                      className='pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/2'
                    >
                      <div className='p-1'>
                        <Card className='rounded-xl shadow-md'>
                          <CardContent className='flex aspect-[0.8/1] xl:aspect-[3/1] items-center justify-center px-2'>
                            <div className='w-full h-full flex flex-col xl:flex-row items-center justify-between'>
                              <img
                                alt={partner.alt}
                                src={partner.src}
                                className='w-full xl:w-[40%] rounded-xl aspect-[16/9] xl:aspect-[4/3] object-cover mx-2 mt-2 xl:ml-2 xl:md-0 xl:mt-0'
                              />
                              <div className='w-full xl:w-[50%] h-full flex flex-col justify-between pt-[10%] xl:pt-[4%] xl:pb-[4%] mb-2 xl:mb-0 mx-2 xl:mr-2 xl:ml-0'>
                                <div>
                                  <h3 className='font-bold text-secondary 2xl:text-xl'>
                                    {partner.title}
                                  </h3>
                                  <div className='flex flex-row'>
                                    <MapPin className='mr-1 text-primary' />
                                    <p className='text-primary text-muted-foreground'>
                                      {partner.address}
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <h4 className='text-secondary font-semibold'>
                                    {partnersContent.text}
                                  </h4>
                                  <div className='w-full h-auto flex flex-wrap items-center justify-start gap-2'>
                                    {partner.speciality.map((speciality, index) => (
                                      <p
                                        key={index}
                                        className='inline-block text-muted-foreground p-2 border-2 rounded-xl border-primary text-primary font-semibold mt-1'
                                      >
                                        {speciality.text}
                                      </p>
                                    ))}
                                  </div>
                                </div>
                              </div>
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
              <div className='py-10 text-center'>
                {partnersContent.cards.map((_, index) => (
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
        <div className='w-full h-auto flex flex-col justify-center px-[5%] xl:px-[10%]'>
          <div className='w-full h-auto flex flex-wrap items-center justify-center gap-10'>
            {partnersContent.partners.map((partner, index) => (
              <img alt={partner.alt} src={partner.src} key={index} />
            ))}
          </div>
          <div className='w-full h-auto flex items-center justify-end mt-10'>
            <img alt={partnersContent.alt} src={partnersContent.src} className='w-[20%]' />
          </div>
        </div>
      </div>
    </div>
  );
};
