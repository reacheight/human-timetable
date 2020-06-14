export interface EducatorId {
    Item1: number;
    Item2: string;
}

export interface EventLocationModel {
    IsEmpty: boolean;
    DisplayName: string;
    HasGeographicCoordinates: boolean;
    Latitude: number;
    Longitude: number;
    LatitudeValue: string;
    LongitudeValue: string;
    EducatorsDisplayText: string;
    HasEducators: boolean;
    EducatorIds: EducatorId[];
}

export interface DayStudyEventModel {
    StudyEventsTimeTableKindCode: number;
    Start: Date;
    End: Date;
    Subject: string;
    TimeIntervalString: string;
    DateWithTimeIntervalString: string;
    DisplayDateAndTimeIntervalString: string;
    LocationsDisplayText: string;
    EducatorsDisplayText: string;
    HasEducators: boolean;
    IsCancelled: boolean;
    ContingentUnitName: string;
    DivisionAndCourse: string;
    IsAssigned: boolean;
    TimeWasChanged: boolean;
    LocationsWereChanged: boolean;
    EducatorsWereReassigned: boolean;
    ElectiveDisciplinesCount: number;
    IsElective: boolean;
    HasTheSameTimeAsPreviousItem: boolean;
    ContingentUnitsDisplayTest: string;
    IsStudy: boolean;
    AllDay: boolean;
    WithinTheSameDay: boolean;
    EventLocations: EventLocationModel[];
    EducatorIds: EducatorId[];
}

export interface DayModel {
    Day: Date;
    DayString: string;
    DayStudyEvents: DayStudyEventModel[];
}