export interface LocationData {
    info:    Info;
    results : Location[];
}

export interface Info {
    count: number;
    pages: number;
    next:  null;
    prev:  null;
}

export interface Location {
    id:        number;
    name:      string;
    type:      string;
    dimension: string;
    residents: string[];
    url:       string;
    created:   Date;
}
