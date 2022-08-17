import { FC } from 'react';
import './Card.css';

type CardProps = {
    /** URL изображения */
    image: string;
    /** Заголовок карточки */
    title: React.ReactNode;
    /** Подзаголовок карточки */
    subtitle: React.ReactNode;
    /** Содержимое карточки (футер/боковая часть), может быть пустым */
    content?: React.ReactNode;
    /** Клик на карточку */
    onClick?: React.MouseEventHandler;
};

export const Card: FC<CardProps> = ({ image, title, subtitle, content, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <img className='card_image' src={image} alt="" width={80} height={80} />
            <div className="card_desc">
                <span className='card_title'>{title}</span>
                <span className='card_subtitle'>{subtitle}</span>
                {content}
            </div>
        </div>
    )
};

Card.defaultProps = {
    onClick: () => { }
}
