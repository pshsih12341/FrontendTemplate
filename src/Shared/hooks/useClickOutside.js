import {useEffect, useRef} from 'react';

/**
 * Хук для определения клика вне элемента
 * @param {function} handler - функция, которая будет вызвана при клике вне элемента
 * @returns {React.RefObject} - ref для привязки к элементу
 */
export const useClickOutside = (handler) => {
  const ref = useRef();

  useEffect(() => {
    const listener = (event) => {
      // Если клик был внутри элемента или элемент не существует, ничего не делаем
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    // Добавляем слушатели событий
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    // Очищаем слушатели при размонтировании
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler]);

  return ref;
};
