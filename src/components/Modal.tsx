import BookForm from './BookForm'

type Props = {
    id?: string[],
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>)
    return (
        <div
            onClick={ props.onClose }
            className='fixed w-full h-full flex z-1 object-contain
            justify-center align-middle bg-gray-300 bg-opacity-25 sm:shrink-0'
            >
            <div
                onClick={(e) => {
                    e.stopPropagation()
                }}
                className="max-w-600px w-4/5 fixed flex z-1 mt-5 
                bg-yellow-400 shadow-x1 rounded">
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <p
                            onClick={ props.onClose }
                            className="flex justify-start m-3 bg-yellow-800
                            p-2 rounded hover:bg-yellow-600 text-yellow-400 hover:text-yellow-200">
                            X
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center mt-3 p-2">
                        <BookForm id={ props.id }/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
