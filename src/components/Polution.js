import React from 'react'
import {GET_ICON_PM,units,icon_pm} from '../util/index';
export default function Polution({ pollution }) {
  const { aqius, mainus } = pollution;
  return (
    <>   
      <ul>
        <li>Unit : { units(mainus) }</li>
        <li>AQIUS : { aqius }</li>
      </ul>
    </>
  )
}
