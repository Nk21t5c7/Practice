
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import addTodo from '@/app/action/postTodo';

const formSchema = z.object({
    todoTitle: z.string().min(2).max(50),
    description: z.string().min(5).max(200),
})


const FormContainer = () => {
    const [formData, setFormData] = useState({});


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            todoTitle: "",
            description: "",
        },
    })

    const handleChange = (e) => {
        const name = e.target.value;
        const value = e.target.value;
        setFormData((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
        console.log(formData);
    }

    const postTodo = async (formData) => {
        const {todoTitle, description} = formData;
        addTodo({todoTitle, description});

        // e.preventDefault();
        // console.log(formData);

        // await fetch('http://localhost:3015/api/add', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         todoTitle: formData.todoTitle,
        //         description: formData.description
        //     }),
        // })
        //     .then((result) => {
        //         if (response.ok) {
        //             return response.json(); 
        //         } else {
        //             throw new Error('Failed'); 
        //         }
        //     })
        //     .catch((err) => {
        //         console.error('Error caught:', err); 
        //     });



        // axios.post(`http://localhost:3015/api/add`, { formData })


        // axios.post(`http://localhost:3015/api/add/${JSON.stringify(formData)}`)

        //     .then((result) => {
        //         console.log(result);

        //     }).catch((err) => {
        //         console.log('err', err);
        //     });

    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(postTodo)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="todoTitle"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Todo Title</FormLabel>
                            <FormControl>
                                <Input onChange={handleChange} name="todoTitle" placeholder="Java Assignment" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl className="w-[400px]">
                                <Input className="max-w-[400px]" name="description" placeholder="Assignment3 " {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};

export default FormContainer;