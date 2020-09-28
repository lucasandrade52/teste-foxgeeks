import React from 'react';

import './style.scss'

import Header from '../../components/Header';
import Wheel from '../../components/Wheel';

import { ITEMS_WHEEL } from '../../constants'

export default function WheelPage() {
  return (
    <>
      <Header />
      <h1>Wheel</h1>
      <Wheel items={ITEMS_WHEEL} />
    </>  
  )
}