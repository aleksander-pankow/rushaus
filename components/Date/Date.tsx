import * as dfns from 'date-fns';
import ru from 'date-fns/locale/ru';
interface DateComponentProps {
    dateString: string;
    formatString: string;
}

const DateComponent: React.FC<DateComponentProps> = ({ dateString, formatString }) => {
    const date = (dfns as any).parseISO(dateString);
    return <time dateTime={dateString}>{(dfns as any).format(date, formatString, { locale: ru })}</time>;
};

export default DateComponent;

