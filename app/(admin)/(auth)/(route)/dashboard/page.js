"use client"
import { setAuth } from "@/data/slices/authSlices";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Dashborad() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedUser = localStorage.getItem('authUser');
    if (savedUser) {
      dispatch(setAuth(JSON.parse(savedUser)));
    }
  }, [dispatch]);

  const storeAuth = useSelector((state)=> state.auth);
  console.log(storeAuth)
  const router = useRouter();
  // if(!currentUser){
  //   router.push('/login')
  // }else{
  // }
  return (
    <div>Dashborad</div>
  )
  
}

export default Dashborad