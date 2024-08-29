import DayInput from './DayInput'
import HourInput from './HourInput'

export interface DataInputProps {
    data: Date
    slotAmount: number
    dataChange: (data: Date) => void
}

export default function DataInput(props: DataInputProps) {
    const { data, slotAmount, dataChange } = props

    return (
        <div className="flex flex-col gap-10">
            <DayInput data={data} dataChange={dataChange} />
            <HourInput data={data} slotHour={slotAmount} dataChange={dataChange} />
        </div>
    )
}
