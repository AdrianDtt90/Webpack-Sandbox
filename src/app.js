import React from 'react';
import ReactDOM from 'react-dom'

import FormContainer from './js/componentes/container/FormContainer'
import './css/style.css';


var createArticleForm = document.querySelector('#create-article-form');
ReactDOM.render(
    <FormContainer />,
    createArticleForm
  );