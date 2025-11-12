export type Evento = {
    id: number;
    nome: string;
    data_hora: Date;
    descricao: string;
    endereco: string;
    link: string;
};

export type Integrante = {
    nome: string;
    funcao: string;
    frase: string;
    imagem: string;
};