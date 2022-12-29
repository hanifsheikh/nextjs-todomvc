import React from "react";
import Header from "./header";
import Head from "next/head"
 import Todo from "./todo";
import { useRouter } from "next/router";
export default function Layout({ children }: {children: React.ReactNode}) {
  const router = useRouter();
  return (
    <>
     <Head>
     <title>NEXT.js - TodoMVC</title>
     </Head>
     <Header/>
     <Todo props={children}/> 
    </>
  );
}