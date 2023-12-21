import React from 'react';

interface DateFormatterProps {
    dateString: string;
    language?: 'en' | 'ru' | 'de'; // Language parameter, optional
    formatString?: string; // Format string parameter, optional
    usePronouncedMonths?: boolean; // Pronounced months parameter, optional
}

const DateFormatter: React.FC<DateFormatterProps> = ({
                                                         dateString,
                                                         language = 'en',
                                                         formatString = 'd MMMM yyyy',
                                                         usePronouncedMonths = false,
                                                     }) => {
    const getMonthNames = (lang: string, pronounced: boolean): string[] => {
        const months = pronounced
            ? {
                en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
                ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
            }
            : {
                en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
                ru: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
            };

        // @ts-ignore
        return months[lang];
    };

    const formatDate = (inputDate: string, lang: string, format: string, pronounced: boolean): string => {
        const date = new Date(inputDate);
        const day = date.getDate();
        const monthNames = getMonthNames(lang, pronounced);
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();

        return format
            .replace('d', String(day))
            .replace('MMMM', month)
            .replace('yyyy', String(year));
    };

    return <span>{formatDate(dateString, language, formatString, usePronouncedMonths)}</span>;
};

export default DateFormatter;
