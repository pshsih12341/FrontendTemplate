import { apiClient } from './config';

export const http = {
  get: async (url, config = {}) => {
    try {
      const response = await apiClient.get(url, config);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  post: async (url, data = {}, config = {}) => {
    try {
      const response = await apiClient.post(url, data, config);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  put: async (url, data = {}, config = {}) => {
    try {
      const response = await apiClient.put(url, data, config);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  patch: async (url, data = {}, config = {}) => {
    try {
      const response = await apiClient.patch(url, data, config);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  delete: async (url, config = {}) => {
    try {
      const response = await apiClient.delete(url, config);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }
};

const handleApiError = (error) => {
  if (error.response) {

    const { status, data } = error.response;
    
    switch (status) {
      case 400:
        return new Error(data.message || 'Неверный запрос');
      case 401:
        return new Error('Не авторизован');
      case 403:
        return new Error('Доступ запрещен');
      case 404:
        return new Error('Ресурс не найден');
      case 422:
        return new Error(data.message || 'Ошибка валидации');
      case 500:
        return new Error('Внутренняя ошибка сервера');
      default:
        return new Error(data.message || 'Произошла ошибка');
    }
  } else if (error.request) {
    return new Error('Нет ответа от сервера');
  } else {
    return new Error('Ошибка настройки запроса');
  }
}; 