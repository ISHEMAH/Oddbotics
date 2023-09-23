"use client"
import React, { useState } from 'react';
import Switch from 'react-switch';

interface ToggleSwitchProps{
    onChange:() => void,
    checked:boolean
}

function ToggleSwitch({ onChange, checked }:ToggleSwitchProps) {
  return (
    <Switch
      onChange={onChange}
      checked={checked}
      onColor="#5C6BC0" // Customize colors as needed
      offColor="#cccccc"
    />
  );
}

export default ToggleSwitch;
