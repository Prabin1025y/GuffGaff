import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useAuthContext } from '../context/AuthContextStore';

const useLogOut = () => {

    const [isLoading, setIsLoading] = useState(false);
    const { setAuthUser } = useAuthContext()

    const logout = async () => {
        setIsLoading(true);
        try {

            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            });

            const response = await res.json();

            if (!response.success)
                throw new Error(response.message);

            localStorage.removeItem("userInfo");
            setAuthUser("");

        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return { logout, isLoading };

}
export default useLogOut