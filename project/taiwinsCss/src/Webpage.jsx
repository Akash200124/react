import { Link, NavLink } from "react-router-dom"
import CurrencyCoverter from "./components/CurrencyConverter"

function Webpage() {

    document.title = "Tools- A web page devlop for help"
    document.body.style.backgroundColor = "Black"
    // document.body.style.color = "white"
    return (
        <>
            {/* //  nvabar goes here  */}
            <nav className="w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center">
                <Link to="/">
                    <div className="text-3xl text-indigo-700 font-bold">Tools</div>
                </Link>

                <ul className="md:flex font-semibold hidden">
                    <li className="mx-[10px] cursor-pointer ">Home </li>
                    <NavLink
                        to="/about">
                        <li className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-orange-700" : "text-gray-700"}}`} >About us </li>
                    </NavLink>
                    <li className="mx-[10px] cursor-pointer ">Contact us</li>
                </ul>
                <Link to="#">
                    <div className="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer">Login/Signup</div>
                </Link>
                <div className="md:hidden">
                    <a className="text-4xl font-bold " href="#">&#8801;</a>
                </div>
            </nav>
            {/* // nav completed  */}


            {/* image section  */}

            {/* our student section  */}
            <div className="h-auto w-100 flex  flex-wrap flex-col items-center text-center  text-white p-10 ">
                <div className="w-full h-auto flex  flex-wrap flex-col items-center text-center ">
                    <p className="text-indigo-800 font-bold text-3xl md:text-4xl">"Our Tools</p>
                    <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
                </div>

                <div className="w-full flex flex-wrap justify-evenly">
                    <Link  to="curr">
                        <div className="flex border-white border-2 rounded-lg p-2 items-center mb-12 w-[455px] hover:border-yellow-400 hover:cursor-pointer">
                            <img className="w-44 h-44  " src="https://images.pexels.com/photos/8566288/pexels-photo-8566288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" />
                            <div>
                                <p className="text-3xl font-bold">Currency Converter </p>
                                <p className="text-xl font-bold  text-gray-500">A tool that help you to convert the diifrent Currency</p>
                            </div>
                        </div>
                        </Link>
                        
                    <Link to="pass">
                    <div className="flex border-white border-2 rounded-lg p-2 items-center mb-12 w-[455px] hover:border-yellow-400 hover:cursor-pointer">
                        <img className="w-44 h-44 " src="https://images.pexels.com/photos/65171/pexels-photo-65171.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
                        <div>
                            <p className="text-3xl font-bold">Password Generator </p>
                            <p className="text-xl font-bold  text-gray-500">A tool that helps you to Generate Complex Passwords</p>
                        </div>
                    </div>
                    </Link>

                </div>
            </div>

            {/* our student section end here  */}



            {/* footer  section started*/}
            <footer className="w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row  flex-wrap justify-between md:px-12">
                <div>
                    <img src="" alt="" />
                    <p className="my-4">Email us:support@akskill.com</p>
                    <img src="" alt="" />
                </div>

                <div className="text-white">
                    <h2 className="font-bold text-xl mt-4">Ak Skills</h2>
                    <div className="w-32 h-1 border-b-4 border-yellow-400 rounded-2xl my-2"></div>
                    <div>
                        <p>About us</p>
                        <p>FAQs</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div className="text-white">
                    <h2 className="font-bold text-xl mt-4">Products</h2>
                    <div className="w-32 h-1 border-b-4 border-yellow-400 rounded-2xl my-2"></div>
                    <div>
                        <p>Ak skill lab</p>
                        <p>Job portals </p>
                        <p>Experience portal </p>
                        <p>Becone an affiliate</p>
                        <p>Hall of fame</p>

                    </div>
                </div>
                <div className="text-white">
                    <h2 className="font-bold text-xl mt-4">Links</h2>
                    <div className="w-32 h-1 border-b-4 border-yellow-400 rounded-2xl my-2"></div>
                    <div>
                        <p>Discord channel</p>
                        <p>Ak Youtube</p>
                        <p>Carrers</p>
                    </div>
                </div>

            </footer>
            {/* footer completede  */}

        </>

    )
}

export default Webpage