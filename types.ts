import { ReactNode } from 'react';

export type Page = 'home' | 'product' | 'products' | 'solutions' | 'demo' | 'inquiry' | 'support';

export interface NavLink {
  name: string;
  href: string;
  pageId?: Page;
  children?: NavLink[];
}

export interface BusinessArea {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Product {
  id: number;
  name: string;
  category: '청소로봇' | '물류로봇' | '서빙로봇' | '특수목적로봇';
  title: string;
  descriptionPoints: string[];
  imageUrl: string;
  longDescription: string;
  specs: { [key: string]: string | number }; 
}

export interface Solution {
  name: string;
  imageUrl: string;
  description: string[];
}
