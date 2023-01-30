import Image from "next/image";
import out_of_office from '../public/out_of_office.jpg'

// Página de erro customizada.
// Conforme https://www.youtube.com/watch?v=gkXwL6CCVeo
export default function CustomError({ statusCode }) {
  
  const refreshPage = ()=>{
    window.location.reload();
 }

  return (
    <div>

      <div>
        <Image src={out_of_office} alt='error' />
      </div>

      <h2>
        {statusCode ? 
        <div>OOPS! Status code ${statusCode}</div> 
        : 
        <div>OOPS!</div>}

      </h2>

      <button onClick={refreshPage}>Try again </button>

    </div>
  );
}