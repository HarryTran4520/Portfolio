'use client'
import React from 'react';
import IntroMyself from '../../components/home/IntroMyself';
import IntroDemoTabs from '../../components/home/IntroDemoTabs';
import IntroBackground from '../../components/home/IntroBackground';

export default function Home() {
  return (
    <>
      <IntroMyself/>
      <IntroDemoTabs/>
      <IntroBackground/>
    </>
  )
}