export interface LessonModel<T> {
    id: string;
    databaseId: number;
    title: string;
    content: string;
    slug: string;
    lessonFields: T;
    chapter: ChapterInfo;
}

export interface LessonFields {
    day: string[];
    excerpt: string;
    place: string;
    time: string | null;
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

export interface ChapterInfo {
    description: string;
    name: string;
}
