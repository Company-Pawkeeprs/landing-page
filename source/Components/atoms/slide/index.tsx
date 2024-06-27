import { useEffect, useState, ReactNode } from 'react';

interface SlideInSectionProps {
    children: ReactNode;
    direction?: 'left' | 'right';
}

const SlideInSection: React.FC<SlideInSectionProps> = ({ children, direction = 'left' }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Ajuste o delay conforme necessário

        return () => clearTimeout(timer);
    }, []);

    // Determina as classes CSS com base na direção especificada
    const slideClasses = {
        'left': 'slide-left',
        'right': 'slide-right',
    };

    // Classe base para a transição
    const baseTransitionClass = 'transition-transform duration-1000 ease-in-out';

    return (
        <div className={`${baseTransitionClass} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0'} ${direction === 'left' ? 'translate-x-full' : '-translate-x-full'}`}>
            {children}
        </div>
    );
};

export default SlideInSection;
