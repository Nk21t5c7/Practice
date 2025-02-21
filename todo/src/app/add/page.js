"use client"

import { useEffect, useState } from 'react';
import FormContainer from "@/app/components/layouts/Form";



export default function TodoForm() {
    

    return (
        <div className=" font-[family-name:var(--font-geist-sans)]">
            <main className="p-6 h-[70vh] flex">
                <FormContainer />
            </main>
        </div>
    );
}