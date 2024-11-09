import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useAuthContext } from '../context/AuthContextStore';

const useGetUsers = () => {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        setLoading(true);
        const getUsers = async () => {
            try {

                const res = await fetch("/api/users");
                const response = await res.json();

                if (!res || !response) {
                    throw new Error("Some error occured while fetching");
                }

                setUsers(response.result);
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }

        getUsers();
    }, [authUser?.id])

    return { loading, users };

}

export default useGetUsers