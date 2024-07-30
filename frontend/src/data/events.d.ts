export type CalendarEventCategory = "Escursioni e visite"|"Laboratori"|"Conferenze e incontri"|"Manifestazioni e sagre"|"Teatro e musica"|"Cinema";

export type CalendarEvent = {
  category: CalendarEventCategory;
  title: string;
  description: string;
  start: string;
  end: string;
}
