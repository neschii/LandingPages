export default class AgendaUtils {
    private static minutes = [0, 15, 30, 45]

    static HourDay() {
        return {
            manha: this.gHour([8, 9, 10, 11]),
            tarde: this.gHour([14, 15, 16, 17]),
            noite: this.gHour([18, 19, 20, 21]),
        }
    }

    static totalDuration(services: { slotAmount: number }[]) {
        const duration = services.reduce((acc, actual) => {
            return (acc += actual.slotAmount * 15)
        }, 0)

        return `${Math.trunc(duration / 60)}h ${duration % 60}m`
    }

    private static gHour(hours: number[]) {
        return hours.reduce((hours, hour) => {
            const all = this.minutes.map((minute) => {
                return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
            })
            return hours.concat(all)
        }, [] as string[])
    }
}
