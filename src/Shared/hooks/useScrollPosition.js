import { useState, useEffect } from 'react';

/**
 * Хук для отслеживания позиции скролла
 * @param {Element} element - элемент для отслеживания (по умолчанию window)
 * @returns {object} - объект с позицией скролла
 */
export const useScrollPosition = (element = window) => {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (element === window) {
        setScrollPosition({
          x: window.pageXOffset,
          y: window.pageYOffset,
        });
      } else {
        setScrollPosition({
          x: element.scrollLeft,
          y: element.scrollTop,
        });
      }
    };

    // Устанавливаем начальное значение
    handleScroll();

    // Добавляем слушатель события скролла
    element.addEventListener('scroll', handleScroll, { passive: true });
    
    // Очищаем слушатель при размонтировании
    return () => element.removeEventListener('scroll', handleScroll);
  }, [element]);

  return scrollPosition;
};

// Удобные геттеры для позиций
export const useScrollX = (element) => {
  const { x } = useScrollPosition(element);
  return x;
};

export const useScrollY = (element) => {
  const { y } = useScrollPosition(element);
  return y;
}; 