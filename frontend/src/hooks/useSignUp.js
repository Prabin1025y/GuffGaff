import React, { useState } from 'react';
import { toast } from "react-toastify";
import { useAuthContext } from '../context/AuthContext';

const useSignUp = () => {

    const [isLoading, setIsLoading] = useState(false);

    const { setAuthUser } = useAuthContext();

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const isValid = handleValidation({ fullName, username, password, confirmPassword, gender });


        if (isValid) return;
        console.log("going");

        setIsLoading(true);
        try {

            const res = await fetch("http://localhost:8000/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
            });

            const response = await res.json();
            // console.log(response);


            if (!response.success)
                throw new Error(response.message);

            localStorage.setItem("userInfo", JSON.stringify(response.result));

            setAuthUser(response.result);
            toast.success(`Welcome to GuffGaff ${response.result.gender === "male" ? "Mr." : "Mrs."} ${response.result.fullName}`);

        } catch (error) {

            toast.error(error.message);

        } finally {
            setIsLoading(false);
        }

    }

    return { isLoading, signup };
}

function handleValidation({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill all the forms");
        return false;
    }


    if (password !== confirmPassword) {
        toast.error("Confirm password didn't match");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password length must be greater than 6");
        return false;
    }
}

export default useSignUp