import {useState, useEffect} from 'react';

/**
 * Хук для дебаунсинга значений
 * @param {any} value - значение для дебаунсинга
 * @param {number} delay - задержка в миллисекундах
 * @returns {any} - дебаунсированное значение
 */
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Устанавливаем таймер для обновления дебаунсированного значения
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Очищаем таймер при изменении значения или размонтировании компонента
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
