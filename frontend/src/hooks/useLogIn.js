import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { useAuthContext } from '../context/AuthContext';

const useLogIn = () => {
    const [isLoading, setIsLoading] = useState(false);

    const { setAuthUser } = useAuthContext();

    const login = async ({ username, password }) => {

        if (!username || !password) {
            toast.error("Please fill all the forms");
            return false;
        }

        setIsLoading(true);

        try {

            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            const response = await res.json();

            if (!response.success)
                throw new Error(response.message);

            localStorage.setItem("userInfo", JSON.stringify(response.result));

            setAuthUser(response.result);

        } catch (error) {

            toast.error(error.message);
            return;

        } finally {
            setIsLoading(false);
        }

    }

    return { login, isLoading };
}

export default useLogIn;