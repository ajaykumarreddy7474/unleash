import { Header } from "@/components/Header"
import Link from "next/link"

const Details = () => {
  return (
    <div>
      <Link href='/'><Header/></Link>
      <h1 className="text-4xl">Deetials here</h1>
    </div>
  )
}

export default Details