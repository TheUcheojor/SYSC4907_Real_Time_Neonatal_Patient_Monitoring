import React from "react";

interface DeleteTripModalProps {
  trip_id: number;
  patient_id: string;
  onDelete: () => void;
}

function DeleteTripModalContent({
  trip_id,
  patient_id,
  onDelete,
}: DeleteTripModalProps) {
  return (
    <div>
      <p>
        <p>Are you sure you want to delete the following trip?</p>
        <p>patient: {patient_id}</p>
        <p>id: {trip_id}</p>
      </p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default DeleteTripModalContent;
