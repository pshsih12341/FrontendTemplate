import {useState, useEffect} from 'react';

/**
 * Хук для работы с медиа-запросами
 * @param {string} query - CSS медиа-запрос
 * @returns {boolean} - результат медиа-запроса
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Создаем MediaQueryList объект
    const media = window.matchMedia(query);

    // Устанавливаем начальное значение
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Создаем функцию-слушатель
    const listener = () => setMatches(media.matches);

    // Добавляем слушатель
    media.addEventListener('change', listener);

    // Очищаем слушатель при размонтировании
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

// Предопределенные медиа-запросы
export const useIsMobile = () => useMediaQuery('(max-width: 768px)');
export const useIsTablet = () => useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
export const useIsDesktop = () => useMediaQuery('(min-width: 1025px)');
export const useIsDarkMode = () => useMediaQuery('(prefers-color-scheme: dark)');
