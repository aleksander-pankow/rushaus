import React from 'react';
import Link from "next/link";

/**
 * Card Component displays details in a card format based on the type.
 * @param {Object} props - Properties for the card component.
 * @param {string} props.title - Title of the card.
 * @param {string} props.description - Description of the card.
 * @param {string} props.slug - Slug for the card link.
 * @param {string} props.date - Date of the card (for event and lesson types).
 * @param {string} props.image - URL of the card image.
 * @param {string} props.type - Type of the card ('event', 'lesson', 'article').
 * @returns {JSX.Element} - Returns the Card component JSX.
 */

interface CardProps {
    title: string;
    description: string;
    slug: string;
    date: string;
    image: string;
    type: 'event' | 'lesson' | 'article';
}
const Card: React.FC<CardProps> = ({ title, description, slug, date, image, type }) => {
    // Generate the link for the card based on the type and provided slug
    const generateLink = (type: string, slug: string) => {
        switch (type) {
            case 'event':
                return `/events/${slug}`;
            case 'lesson':
                return `/lessons/${slug}`;
            case 'article':
                return `/news/${slug}`;
            default:
                return '/';
        }
    };

    // Determine if the type requires date rendering
    const showDate = type === 'event' || type === 'lesson';

    // Create the link based on the type and slug
    const cardLink = generateLink(type, slug);

    // Set a default image if none provided
    const defaultImage = "/images/test/test-event-picture.png";

    return (
        <Link href={cardLink} title={title} className="card md:aspect-square">
            <div className="relative h-full border border-black group/item">
                {/* Card Details */}
                <div className="flex flex-col justify-between h-auto sm:h-[calc(50%)] p-[30px] md:max-xl:p-[25px]">
                    <div>
                        {/* Card Title */}
                        <h4 className="font-gilbold uppercase text-rhregular/[20px] lg:text-rhtitle mb-2">{title}</h4>
                    </div>
                    <div className="text-base max-md:text-sm max-xl:line-clamp-2">
                        {/* Card Description */}
                        <p>{description}</p>
                    </div>
                    {showDate && (
                        <div>
                            {/* Card Date (for event and lesson types) */}
                            <h4 className="max-md:mt-2 font-gilbold uppercase text-rhregular lg:text-rhtitle">{date}</h4>
                        </div>
                    )}
                </div>
                {/* Card Image */}
                <div className="h-auto sm:h-[calc(50%)] bg-blue-900 overflow-hidden">
                    <img
                        src={image || defaultImage}
                        alt={`Image ${title}`}
                        className="object-cover w-full h-full group group-hover/item:scale-125 transition duration-500"
                    />
                </div>
            </div>
        </Link>
    );
};

export default Card;
