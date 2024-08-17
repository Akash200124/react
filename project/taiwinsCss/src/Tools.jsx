
function Tools() {

    document.title = "PWskill - a web page devloment class"
    document.body.style.backgroundColor = "Black"
    // document.body.style.color = "white"
    return (
        <>
            {/* //  nvabar goes here  */}
            <nav className="w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center">
                <div className="text-2xl text-indigo-700 font-bold">Pw skill</div>
                <ul className="md:flex font-semibold hidden">
                    <li className="mx-[10px] cursor-pointer ">Home </li>
                    <li className="mx-[10px] cursor-pointer ">About us </li>
                    <li className="mx-[10px] cursor-pointer ">Contact us</li>
                </ul>
                <div className="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer">Login/Signup</div>
                <div className="md:hidden">
                    <a className="text-4xl font-bold " href="#">&#8801;</a>
                </div>
            </nav>
            {/* // nav completed  */}
            <header className="w-full h-auto">
                <img className="w-full  hidden md:block" src="https://images.pexels.com/photos/4578774/pexels-photo-4578774.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image 1 " />

                <img className="w-full md:hidden " src="https://images.pexels.com/photos/4486049/pexels-photo-4486049.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image 2" />
            </header>

            {/* image section  */}

            {/* our student section  */}
            <div className="h-auto w-100 flex  flex-wrap flex-col items-center text-center  text-white p-10 ">
                <div className="w-full h-auto flex  flex-wrap flex-col items-center text-center ">
                    <p className="text-indigo-800 font-bold text-3xl md:text-4xl">"pure Hardwork, No Shortcuts</p>
                    <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
                </div>
                <div className="w-full flex flex-wrap justify-evenly">
                    <div className="w-46 flex flex-col items-center mb-12 ">
                        <img className="w-44 h-44" src="https://images.pexels.com/photos/65171/pexels-photo-65171.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
                        <p className="text-3xl font-bold">600+</p>
                        <p className="text-2xl font-bold text-gray-500">Diffrent Courses</p>
                    </div>
                    <div className="w-46 flex flex-col items-center mb-12 ">
                        <img className="w-44 h-44" src="https://images.pexels.com/photos/65171/pexels-photo-65171.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
                        <p className="text-3xl font-bold">700,000+</p>
                        <p className="text-2xl font-bold text-gray-500">Student Enrolled</p>
                    </div>
                    <div className="w-46 flex flex-col items-center mb-12 ">
                        <img className="w-44 h-44" src="https://images.pexels.com/photos/65171/pexels-photo-65171.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
                        <p className="text-3xl font-bold">10,000+</p>
                        <p className="text-2xl font-bold text-gray-500">Sucessful Transition</p>
                    </div>
                </div>
            </div>

            {/* our student section end here  */}

            {/* Our product section  */}
            <div className="h-auto w-100 flex  flex-wrap flex-col items-center text-center  text-white  ">
                <div className="w-full h-auto flex  flex-wrap flex-col items-center text-center ">
                    <p className="text-indigo-800 font-bold text-3xl md:text-4xl">"Our Products</p>
                    <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
                </div>
                <div className="w-[90%] h-auto flex flex-wrap justify-around">
                    <div className="w-64 flex flex-col items-center text-center  border-white border-2  mb-12 rounded-xl p-2">
                        <img src="https://images.pexels.com/photos/65171/pexels-photo-65171.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <p className="text-3xl font-bold ">Ak Skill lab</p>
                        <p className="text-lg font-bold text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, minus.</p>
                    </div>
                    <div className="w-64 flex flex-col items-center text-center mb-12 rounded-xl p-2">
                        <img src="https://images.pexels.com/photos/65171/pexels-photo-65171.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <p className="text-3xl font-bold ">Ak Skill lab</p>
                        <p className="text-lg font-bold text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, minus.</p>
                    </div>
                    <div className="w-64 flex flex-col items-center text-center mb-12 rounded-xl p-2">
                        <img src="https://images.pexels.com/photos/65171/pexels-photo-65171.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <p className="text-3xl font-bold ">Ak Skill lab</p>
                        <p className="text-lg font-bold text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, minus.</p>
                    </div>
                    <div className="w-64 flex flex-col items-center text-center mb-12 rounded-xl p-2">
                        <img src="https://images.pexels.com/photos/65171/pexels-photo-65171.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <p className="text-3xl font-bold ">Ak Skill lab</p>
                        <p className="text-lg font-bold text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, minus.</p>
                    </div>
                    <div className="w-64 flex flex-col items-center text-center mb-12 rounded-xl p-2">
                        <img src="https://images.pexels.com/photos/65171/pexels-photo-65171.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <p className="text-3xl font-bold ">Ak Skill lab</p>
                        <p className="text-lg font-bold text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, minus.</p>
                    </div>

                </div>
            </div>

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

export default Tools