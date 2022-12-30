import React from "react";
import Header from "./header";
import Head from "next/head"
 import Todo from "./todo";
 import Footer from "./footer";
import { useRouter } from "next/router";
export default function Layout({ children }: {children: React.ReactNode}) {
  const router = useRouter();
  return (
    <>
     <Head>
     <title>NEXT.js - TodoMVC</title>
     </Head>
    <div className="container mx-auto">
    <Header/>
     <Todo props={children}/> 
     <Footer/>
    </div>
    </>
  );
}