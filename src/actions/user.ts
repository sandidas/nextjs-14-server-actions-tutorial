"use server"

import { revalidatePath } from "next/cache";
import dbConnect from "../dbConnect/dbConnect"
import User from "../modals/User";

export const createNewUser = async (formData: FormData) => {
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
        return {
            error: "There was an error saving"
        }
    }
}

export const updateUser = async (formData: FormData) => {
    try {
        await dbConnect();
        const id = formData.get('id');

        const isUserExist = await User.findOne({ _id: id })
        if (!isUserExist) {
            return {
                error: "No user exists"
            }
        } else {

            const name = formData.get('name');
            const email = formData.get('email');

            const response = await User.findByIdAndUpdate(id, {
                $set: { name, email }
            },
                { new: true }
            )
            if (!response) {
                return {
                    error: "User not updated"
                }
            } else {
                revalidatePath(`/user/${id}`);
            }
        }
    } catch (error) {
        return {
            error: "There was an error saving"
        }
    }
}


export const getUserById = async (id: string) => {
    try {
        // await new Promise(resolve => setTimeout(resolve,2000));
        await dbConnect();
        const response = await User.findOne({ _id: id })
        return response
    } catch (error) {

    }
}


export const showUsers = async ({ search }: any) => {
    try {
        //  await new Promise(resolve => setTimeout(resolve, 2000));
        await dbConnect();
        let response

        if (search) {
            const regex = new RegExp(search, 'i')

            response = await User.find({

                $or: [
                    { name: { $regex: regex } },
                    { email: { $regex: regex } },
                ]
            })

        } else {
            response = await User.find().exec()
        }
        console.log('response', response)
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
        return {
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
        return {
            error: "There was an error deleting"
        }
    }

}