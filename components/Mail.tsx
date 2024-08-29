
const Mail = () => {
  return (
    <div className="bg-slate-100 mx-4 p-4">

        <div className="flex flex-col justify-center items-center gap-2 lg:gap-5">
<h1 className="font-bold text-4xl text-center">GET ON THE LIST</h1>
<h2 className="text-center px-2">Whats inside: new Jobs, opportunities and more</h2>
        <div className="flex justify-center items-center flex-col md:flex-row gap-2 md:gap-0">
            <h1 className=" px-12 py-1 md:px-24 md:py-3 border border-black uppercase text-center text-black/50">your email, please</h1>
            <button className=" px-4 py-1 md:px-12 md:py-3 bg-black text-white bg-gradient-to-r from-black/50 to-blue-400 border border-black  " >SUBMIT</button>
            
        </div>
        <h2 className="text-[13px] text-center">To see how may use your information, take a look at our <span className="underline cursor-pointer hover:text-blue-700">privacy policy</span></h2>
    </div>
    </div>
  )
}

export default Mail