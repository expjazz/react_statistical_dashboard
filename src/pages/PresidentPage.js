import React from 'react';
import { useParams } from 'react-router-dom';

export default function PresidentPage() {
  const { president } = useParams();
  return (
    <div>
      {president}
    </div>
  );
}
