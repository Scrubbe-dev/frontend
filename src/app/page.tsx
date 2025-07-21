import { redirect } from "next/navigation";
import HomePage from "./(pages)/home/page";
import { Suspense } from "react";

export default function Home() {
  return(
    <Suspense fallback={<div>loading...</div>}>
      <HomePage />
    </Suspense>
  )
}
