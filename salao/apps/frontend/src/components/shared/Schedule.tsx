import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { useState } from 'react'


export interface ScheduleProps { 
    labels: string[]
    children: any 
    NextStep: boolean 
    NextStepChange(value: boolean): void
}

export default function Schedule(props: ScheduleProps) { 
    const [currentStep, setCurrentStep] = useState(0)

    function previousStep() { 
        setCurrentStep(currentStep - 1)
        props.NextStepChange(true)
    }

    function NextStep() { 
        setCurrentStep(currentStep + 1)
        props.NextStepChange(false)
    }

function HandleStep() { 
    return ( 
        <div className="flex flex-col md:flex-row gap-4 md:gap-7">
                {props.labels.map((label, i) => {
                    return (
                        <div key={i} className="flex items-center gap-2">
                            <span
                                key={i}
                                className={`
                                    flex justify-center items-center w-9 h-9 p-1 rounded-full font-bold
                                    ${i === currentStep ? 'bg-white text-black' : 'text-zinc-500 bg-zinc-700'} 
                                `}
                            >
                                {i + 1}
                            </span>
                            <span className={i === currentStep ? 'text-white' : 'text-zinc-700'}>
                                {label}
                            </span>
                        </div>
                    )
                })}
            </div>
        )
    }

     return (
        <div className="flex flex-col gap-10 items-center lg:items-stretch">
            <div>{HandleStep()}</div>
            <div>{props.children?.[currentStep] ?? props.children}</div>
            <div className="flex gap-3 select-none">
                <button
                    onClick={previousStep}
                    disabled={currentStep === 0}
                    className="flex gap-1 items-center bg-zinc-700 text-sm text-white px-4 py-1.5 rounded-md disabled:opacity-30"
                >
                    <IconChevronLeft size={20} />
                    <span>Anterior</span>
                </button>
                <button
                    onClick={NextStep}
                    disabled={
                        currentStep === (props.children?.length ?? 0) - 1 ||
                        !props.NextStepChange
                    }
                    className="flex gap-1 items-center bg-zinc-700 text-sm text-white px-4 py-1.5 rounded-md disabled:opacity-30"
                >
                    <span>Próximo</span>
                    <IconChevronRight size={20} />
                </button>
            </div>
        </div>
    )
}
