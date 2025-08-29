import React from 'react';
import {Button} from '../../components/ui/button';

const HomePage = () => {
  return (
    <div className='home-page'>
      <h1>Добро пожаловать на главную страницу</h1>
      <p>Это защищенная страница, доступная только авторизованным пользователям.</p>
      <Button>ку</Button>
    </div>
  );
};

export default HomePage;
