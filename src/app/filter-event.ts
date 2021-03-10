export class FilterEvent {
    eventType: FilterEventType;
    searchTerm: string;
    /**
     *
     */
    constructor(EventType: FilterEventType, SearchTerm: string) {
        this.eventType = EventType;
        this.searchTerm = SearchTerm;
    }
}

export enum FilterEventType {
    search,
    favorite,
    searchFavorite,
    all
}