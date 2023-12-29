"use server"

import { revalidatePath } from "next/cache";
import dbConnect from "../dbConnect/dbConnect"
import User from "../modals/User";

export const createNewUser = async (formData:FormData) => {
    try {

       // await new Promise(resolve => setTimeout(resolve,2000));

        await dbConnect();
        
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
        }
        const saveUser = await new User(data).save()
        console.log('saveUser', saveUser)
        revalidatePath('/');
        
    } catch (error) {
        return{
            error: "There was an error saving"
        }
    }
}

export const showerUsers = async() =>{
    try {
        await new Promise(resolve => setTimeout(resolve,2000));
        await dbConnect();
        const response = await User.find().exec()
        return response
    } catch (error) {
        
    }
}

export const deleteAUser = async (id: string) => {
        try {
            await dbConnect();
            const result = await User.findByIdAndDelete(id)
            revalidatePath('/');
        } catch (error) {
            return{
                error: "There was an error deleting"
            }
        }

}

export const deleteAUserServerAction = async (formData: FormData) => {
    try {
        await dbConnect();
        const data = {
            id: formData.get('id'),
        }
        
        const result = await User.findByIdAndDelete(data?.id)
        revalidatePath('/');
    } catch (error) {
        return{
            error: "There was an error deleting"
        }
    }

}