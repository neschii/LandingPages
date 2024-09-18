export default class TelefoneUtils {
    static fmt(telefone: string): string {
        if (!telefone) return ''
        const numbers = this.desform(telefone)
        return numbers.length <= 10
            ? this.repNumber(numbers, '(xx) xxxx-xxxx')
            : this.repNumber(numbers, '(xx) xxxxx-xxxx')
    }

    static desform(telefone: string): string {
        if (!telefone) return ''
        return telefone.replace(/\D/g, '').slice(0, 11)
    }

    private static repNumber(telefone: string, ref: string): string {
        let fmtd = telefone
            .split('')
            .reduce((telefone, number) => {
                return telefone.replace('x', number)
            }, ref)
            .replace(/x/g, '')
        if (telefone.length <= 2) fmtd = fmtd.replace(')', '').replace(' ', '')
        if (telefone.length <= 6) fmtd = fmtd.replace('-', '')
        return fmtd
    }
}
