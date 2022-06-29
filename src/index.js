import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import es from "./translations/es/language.json";
import en from "./translations/en/language.json";

i18next.init({
    interpolation: {escapeValue: false},
    lng: "en",
    resources:{
        es:{
            language: es,
        },
        en:{
            language: en,
        },
    },
});

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <App /> 
    </I18nextProvider>, 
    document.getElementById('root'));
