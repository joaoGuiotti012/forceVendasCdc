type prioreidade = 'BAIXA' | 'MEDIA' | 'ALTA';
export interface Lembrete {
    id: number;
    conteudo: string;
    arquivado: boolean;
    prioridade: prioreidade;
    modificado: number;
}

