import { CarProps } from '@/types';
import React from 'react'

interface CarDetailsProps {
   isOpen: boolean;
   closeModal: () => void;
   car: CarProps;
}
const CarDetails = () => {
  return (
   <div>cardetails</div>
  )
}

export default CarDetails