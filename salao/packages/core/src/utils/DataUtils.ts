export default class DataUtils {
    static today() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return today;
    }

    // new Date(), '09:45'
    static setHour(data: Date, hour: string): Date {
        const nData = new Date(data);
        const parts = hour.split(':');
        nData.setHours(parseInt(parts[0]!), parseInt(parts[1]!));
        return nData;
    }

    static fmtData(data: Date): string {
        return data.toLocaleDateString('pt-BR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }

    static fmtDataNHour(data: Date): string {
        return data.toLocaleDateString('pt-BR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        });
    }
}
