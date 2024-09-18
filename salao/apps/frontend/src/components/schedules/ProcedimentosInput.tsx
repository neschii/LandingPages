import React from 'react';
import { Procedimento } from '@salao/core';

interface ProcedimentosInputProps {
  services?: Procedimento[];
  onChange: (services: Procedimento[]) => void;
}

interface OptionProps {
  procedimento: Procedimento;
  onClick: (procedimento: Procedimento) => void;
  selected: boolean;
}

const Option: React.FC<OptionProps> = ({ procedimento, onClick, selected }) => {
  return (
    <button
      onClick={() => onClick(procedimento)}
      className={`p-3 rounded-md text-sm font-medium ${
        selected
          ? 'bg-primary text-primary-foreground'
          : 'bg-secondary text-secondary-foreground'
      }`}
    >
      {procedimento.name}
    </button>
  );
};

const ProcedimentosInput: React.FC<ProcedimentosInputProps> = (props) => {
  const allProcedimentos: Procedimento[] = [
    // Add your procedimentos here
  ];

  const toggleProcedimentos = (procedimento: Procedimento) => {
    const updatedServices = props.services ? [...props.services] : [];
    const index = updatedServices.findIndex((p) => p.id === procedimento.id);

    if (index !== -1) {
      updatedServices.splice(index, 1);
    } else {
      updatedServices.push(procedimento);
    }

    props.onChange(updatedServices);
  };

  return (
    <div className="flex flex-col gap-5">
      <span className="text-sm uppercase text-zinc-400">Serviços Disponíveis</span>
      <div className="grid grid-cols-3 self-start gap-5">
        {allProcedimentos.map((procedimento) => (
          <Option
            key={procedimento.id}
            procedimento={procedimento}
            onClick={toggleProcedimentos}
            selected={props.services?.some((proc) => proc.id === procedimento.id) ?? false}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcedimentosInput;