interface ICarouselItem {
  title: string;
  content: string;
  src?: string;
}

export interface ICarousel {
  cardsList: ICarouselItem[];
}
