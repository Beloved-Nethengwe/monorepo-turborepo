'use client'; 
import { Button } from "@repo/ui/components/ui/button";
import NavBar from "@repo/ui/components/ui/NavBar";
import { useState,useEffect } from 'react'
import UserForm from "@repo/ui/components/ui/form"
import Link from 'next/link';

export default function Home() {
  return App();
}

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div className="ui-container ui-mx-auto ui-mt-10">
      <UserForm />
      </div>
    </div>
    
  );
}