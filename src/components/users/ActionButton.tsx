"use client"
import React from 'react';
import { Button } from '../ui/button';
import { useFormStatus } from 'react-dom';


interface IProps{
    title: string;
}

const ActionButton = ({title}:IProps) => {
    
 const { pending } =  useFormStatus()
  

    return (
        <Button type="submit">           
           
            {
                pending ? "Working......" :  title
            }

        </Button>
    );
};

export default ActionButton;