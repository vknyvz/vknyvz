import Link from 'next/link'
import { Fa4, Fa0 } from "react-icons/fa6";
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
    
      <div className="flex items-center justify-center gap-2">
        <Fa4 className="text-4xl" /> 
        <Fa0 className="text-4xl" /> 
        <Fa4 className="text-4xl" />
      </div>

      <h2 className="flex text-2xl font-semibold">Page Not Found</h2>
      
      <div className="pt-3">
        <Link href="/">Return Home</Link>
      </div>
    </div>
  )
}