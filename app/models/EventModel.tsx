export interface EventModel<T> {
    id: string;
    databaseId: number;
    title: string;
    content: string;
    slug: string;
    eventFields: T;
    section: SectionInfo;
}

export interface EventFields {
    excerpt: string | null;
    date: string | null;
    time: string | null;
    place: string | null;
    video: string | null;
    photo: {
        edges: {
            node: {
                sourceUrl: string | null;
                altText: string | null;
            };
        }[];
    };
}
export interface SectionInfo {
    description: string;
    name: string;
    slug: string;
}