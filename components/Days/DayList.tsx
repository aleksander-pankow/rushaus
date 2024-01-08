import React, { FC } from 'react';

interface DaysListProps {
    days: string[];
}

const translatedDays: { [key: string]: string } = {
    monday: 'Понедельник',
    tuesday: 'Вторник',
    wednesday: 'Среда',
    thursday: 'Четверг',
    friday: 'Пятница',
    saturday: 'Суббота',
    sunday: 'Воскресенье',
};

const DaysList: FC<DaysListProps> = ({ days }) => {
    const translatedDaysList = days.map((day) => translatedDays[day]);
    const formattedDays = translatedDaysList.join(', ');

    return <>{formattedDays}</>;
};

export default DaysList;
