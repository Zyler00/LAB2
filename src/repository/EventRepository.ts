import type { Event } from "../models/Event";

const events: Event[] = [
    {
        id: 1,
        category: "Music",
        title: "Concert",
        description: "A live concert",
        location: "London",
        date: "2021-07-01",
        time: "19:00",
        petsAllowed: false,
        organizer: "Live Nation",
    },
    {
        id: 2,
        category: "Sports",
        title: "Marathon",
        description: "Annual city marathon",
        location: "New York",
        date: "2021-09-15",
        time: "07:00",
        petsAllowed: false,
        organizer: "NYC Sports",
    },
    {
        id: 3,
        category: "Tech",
        title: "Tech Conference",
        description: "A conference on emerging technologies",
        location: "San Francisco",
        date: "2021-11-20",
        time: "09:00",
        petsAllowed: false,
        organizer: "TechWorld Inc.",
    },
    {
        id: 4,
        category: "Food",
        title: "Food Festival",
        description: "A festival featuring food from around the world",
        location: "Paris",
        date: "2021-08-10",
        time: "12:00",
        petsAllowed: true,
        organizer: "Gourmet Events",
    },
    {
        id: 5,
        category: "Art",
        title: "Art Exhibition",
        description: "An exhibition showcasing modern art",
        location: "Berlin",
        date: "2021-10-05",
        time: "10:00",
        petsAllowed: true,
        organizer: "ArtSphere",
    },
    {
        id: 6,
        category: "Theatre",
        title: "Broadway Show",
        description: "A popular Broadway performance",
        location: "New York",
        date: "2021-12-01",
        time: "20:00",
        petsAllowed: false,
        organizer: "Broadway Productions",
    }
]

export function getEventByCategory(category: string): Promise<Event[]> {
    const filteredEvents = events.filter((event) => event.category ===
    category);
    return Promise.resolve(filteredEvents);
}

export function getAllEvents(): Promise<Event[]> {
    return Promise.resolve(events);
}
export function getEventById(id: number): Promise<Event | undefined> {
    return Promise.resolve(events.find((event) => event.id === id));
}

export function addEvent(newEvent: Event): Promise<Event>  {
    newEvent.id = events.length + 1;
    events.push(newEvent);
    return Promise.resolve(newEvent);
}