import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from 'axios'

export default function Users(){

    const getUsers = async ()=>{
      const response = await axios.get('http://ums12.runasp.net/api/users');
      return response.data;

    }

    const {data, isError, isLoading} = useQuery({
      queryKey:['users'],
      queryFn:getUsers,
      staleTime:'10000',

    });

    if(isLoading) return <h2>loading...</h2>
    if(isError) return <h2> error ...</h2>

  return (
    <section className="users">
      {console.log(data.users.name)}
      {data.users.map( (users)=> <div className="users">
          <h2>{users.name}</h2>
      </div>)}
    </section>
  )
}