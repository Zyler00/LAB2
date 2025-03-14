import type { Event } from "../models/Event";
import * as repo from "../repository/eventRepositoryPrisma";

export function getEventByCategory(category: string): Promise<Event[]> {
    return repo.getEventByCategory(category);
}
export function getAllEvents(): Promise<Event[]> {
    return repo.getAllEventsWithOrganizer();
}
export function getEventById(id: number) {
    return repo.getEventsByIdWithOrganizer(id);
}
export function addEvent(newEvent: Event): Promise<Event> {
    return repo.addEvent(newEvent);
}