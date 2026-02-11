import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  company: string;
  text: string;
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon?: React.ReactNode; // Optional icon for steps if needed in future
}

export enum AiStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}