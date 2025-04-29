export function formatDateBR(date: Date) {
    const corrected = new Date(date.getTime() + 3 * 60 * 60 * 1000); // Adiciona 3h
    return corrected.toLocaleDateString('pt-BR');
}