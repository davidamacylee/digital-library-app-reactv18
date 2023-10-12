import Background from '../assets/images/books-homepage.jpg'

function About() {
  return (
    <div
      style={{ backgroundImage: `url(${ Background })`}}
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className="flex flex-col place-items-center justify-center h-screen">
            <h5 className="p-5 bg-yellow-300 bg-opacity-75 text-black mb-10 rounded text-xl">
                What is a Book?
            </h5>
            <p className="p-5 bg-white bg-opacity-50 text-black rounded">
                If you have to ask, you might not even be able to read this webpage.<br/>
                Good luck out there buddy!
            </p>
        </div>
    </div>
  )
}

export default About
