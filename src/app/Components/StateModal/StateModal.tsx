"use client";

import { brazilStates } from "@/app/misc/brazilStates";
import React, { useState } from "react";

interface IStateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (state: string) => void;
}

export default function StateModal({
  isOpen,
  onClose,
  onSave,
}: IStateModalProps) {
  const [selectedState, setSelectedState] = useState("");

  const handleSave = () => {
    if (selectedState) {
      onSave(selectedState);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-base-white p-6 rounded-lg shadow-lg w-96 relative">
        <h2 className="text-center text-2xl font-bold text-base-title mb-4">
          Selecione seu Estado
        </h2>

        <div className="mb-6">
          <label
            htmlFor="stateSelect"
            className="block text-base-text mb-2 font-medium"
          >
            Estado
          </label>
          <select
            id="stateSelect"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full border px-3 py-2 rounded bg-base-input text-base-text focus:outline-primary-dark"
          >
            <option value="" disabled>
              Escolha um estado...
            </option>
            {brazilStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSave}
          disabled={!selectedState}
          className={`w-full py-2 rounded text-base-white font-bold ${
            selectedState
              ? "bg-primary hover:bg-primary-dark"
              : "bg-base-button text-base-label cursor-not-allowed"
          }`}
        >
          SALVAR
        </button>
      </div>
    </div>
  );
}
