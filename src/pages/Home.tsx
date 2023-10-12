import Background from '../assets/images/books-homepage.jpg'

function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${ Background })`}}
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className="flex place-items-center h-screen">
            <h1 className="p-5 bg-white bg-opacity-50 text-black rounded">
                The Library is officially open!
            </h1>
        </div>
    </div>
  )
}

export default Home
