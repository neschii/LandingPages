import React, { useState } from 'react';
import { useProcedures } from '@salao/ui';
import { Procedure } from '@salao/core';
import procedures from '@salao/core/src/constants/procedures';

export interface ProceduresInputProps {
    selectedProcedures: Procedure[];
    proceduresChange: (procedures: Procedure[]) => void;
}

function Option({ procedure, onClick, selected }: { procedure: Procedure; onClick: (p: Procedure) => void; selected: boolean }) {
    const handleCheckboxChange = () => {
        onClick(procedure);
    };

    return (
        <label className="flex items-center w-full cursor-pointer bg-gradient-to-r from-purple-800 to-purple-900 hover:from-purple-900 hover:to-purple-950 text-white font-bold transition-colors duration-900">
            <input
                type="checkbox"
                checked={selected}
                onChange={handleCheckboxChange}
                className="form-checkbox h-4 w-6 text-pink-500 rounded-sm border-white border-2 ml-2"
            />
            <span className={`py-3 px-4 flex-grow text-left text-sm font-semibold
                ${selected ? 'text-black bg-purple-700' : 'text-white'}`}>
                {procedure.name}
            </span>
        </label>
    );
}

function NoProceduresCard({ onSelect, selectedProcedures }: { onSelect: (procedure: Procedure) => void; selectedProcedures: Procedure[] }) {
    const allProcedures = Object.values(procedures).flat();

    return (
        <div className="w-full flex flex-col gap-2">
            {allProcedures.slice(0, 5).map((procedure) => (
                <Option
                    key={procedure.id}
                    procedure={procedure}
                    onClick={onSelect}
                    selected={selectedProcedures.some(p => p.id === procedure.id)}
                />
            ))}
        </div>
    );
}

export default function ProceduresInput(props: ProceduresInputProps) {
    const { proceduresChange, selectedProcedures = [] } = props;
    const { procedures: availableProcedures = [] } = useProcedures() || {};

    const [selectedProceduresState, setSelectedProceduresState] = useState(selectedProcedures); // Local state

    function toggleProcedure(procedure: Procedure) {
        const procedureSelected = selectedProceduresState.some((p) => p.id === procedure.id);
        const updatedProcedures = procedureSelected
            ? selectedProceduresState.filter((p) => p.id !== procedure.id)
            : [...selectedProceduresState, procedure];

        setSelectedProceduresState(updatedProcedures); // Update local state
        proceduresChange(updatedProcedures); // Call the parent handler
    }

    return (
        <div className="flex flex-col gap-5 w-full">
            <span className="text-sm uppercase text-zinc-400">Procedimentos Disponíveis</span>
            <div className="w-full flex flex-col gap-2">
                {availableProcedures.length > 0 ? (
                    availableProcedures.map((procedure) => (
                        <Option
                            key={procedure.id}
                            procedure={procedure}
                            onClick={toggleProcedure}
                            selected={selectedProceduresState.some((proc) => proc.id === procedure.id)}
                        />
                    ))
                ) : (
                    <NoProceduresCard onSelect={toggleProcedure} selectedProcedures={selectedProceduresState} />
                )}
            </div>
        </div>
    );
}
