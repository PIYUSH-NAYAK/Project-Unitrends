"use client";

import React, { useEffect, useState } from 'react';
import Auth from './auth';
export default function Home() {
    const [animationData, setAnimationData] = useState(null);
  
    return (
      <div className="text-white">
        <Auth/>
       
      </div>
    );
  }