import axios from 'axios';

const api = axios.create({
    baseURL: 'http://134.122.10.21:9999/'
});

export default api;

/**
 * Como consumir dados da API com React
 * https://celke.com.br/artigo/como-consumir-dados-da-api-com-react
 * 
 */