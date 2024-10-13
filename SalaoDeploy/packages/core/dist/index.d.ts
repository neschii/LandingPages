interface Profissional {
    id: number;
    nome: string;
    descricao: string;
    imagemUrl: string;
    avaliacao: number;
    quantidadeAvaliacoes: number;
}

interface Servico {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    qtdeSlots: number;
    imagemURL: string;
}

interface Agendamento {
    id: number;
    emailCliente: string;
    data: Date;
    profissional: Profissional;
    servicos: Servico[];
}

interface RepositorioAgendamento {
    criar(agendamento: Agendamento): Promise<void>;
    buscarPorEmail(email: string): Promise<Agendamento[]>;
    buscarPorProfissionalEData(profissional: number, data: Date): Promise<Agendamento[]>;
}

declare class ObterHorariosOcupados {
    private readonly repo;
    constructor(repo: RepositorioAgendamento);
    executar(profissionalId: number, data: Date): Promise<string[]>;
    private somarMinutos;
}

declare const profissionais: Profissional[];

declare const servicos: Servico[];

declare const TEMPO_SLOT = 15;

interface Usuario {
    email: string;
    nome: string;
    telefone?: string;
}

declare class AgendaUtils {
    private static minutos;
    static horariosDoDia(): {
        manha: string[];
        tarde: string[];
        noite: string[];
    };
    private static gerarHorarios;
}

declare class DataUtils {
    static hoje(): Date;
    static aplicarHorario(data: Date, horario: string): Date;
    static formatarData(data: Date): string;
}

declare class TelefoneUtils {
    static formatar(telefone: string): string;
    static desformatar(telefone: string): string;
    private static substituirNumeros;
}

export { AgendaUtils, type Agendamento, DataUtils, ObterHorariosOcupados, type Profissional, type RepositorioAgendamento, type Servico, TEMPO_SLOT, TelefoneUtils, type Usuario, profissionais, servicos };
