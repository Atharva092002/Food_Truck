// import react, { useEffect } from "react";
// import { useNavigate } from "react-router-dom"; 

// const Logout=()=>{

//     const history=useNavigate();

//     const logout=async()=>{
//         try {
//             const res=await fetch('/logout',{
//                 method:"GET",
//                 headers:{
//                     Accept:"application/json",
//                     "Content-Type":"application/json"
//                 },
//                 credentials:"include"
//             });

//             if(res.status===401||!res)
//             {
//                 window.alert("Please logout later");
//             }
//             else{
//                 history.pushState('/');
//                 window.location.reload();
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(()=>{
//         logout();
//     },[]);
// }

// export default Logout;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const history = useNavigate();

    const logout = async () => {
        try {
            const res = await fetch('/logout', {
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            });

            if(res.status === 401 || !res ){
                window.alert("Please Logout Later");
            }else{
                history.push('/');
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        logout();
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default Logout;