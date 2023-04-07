import { ColorEnum } from "constants/ColorEnum";
import React, { useState } from "react";

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
  const [isDeleteHover, setIsDeleteHover] = useState(false);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p>
        <p>Are you sure you want to delete the following trip?</p>
        <p>patient: {patient_id}</p>
        <p>id: {trip_id}</p>
      </p>
      <button
        style={{
          backgroundColor: isDeleteHover
            ? ColorEnum.LighterRed
            : ColorEnum.LightRed,
        }}
        onClick={onDelete}
        onMouseEnter={() => setIsDeleteHover(true)}
        onMouseLeave={() => setIsDeleteHover(false)}
      >
        Delete
      </button>
    </div>
  );
}

export default DeleteTripModalContent;
