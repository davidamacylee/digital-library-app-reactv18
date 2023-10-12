import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from 'react-redux'
import { chooseTitle, chooseAuthor, choosePublisher, chooseISBN, chooseYearPrinted, choosePageLength } from '../redux/slices/RootSlice'

interface BookFormProps {
    id?: string[]
}

const BookForm = ( props: BookFormProps ) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data.title } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 1000);
        } else {
            dispatch(chooseTitle(data.title));
            dispatch(chooseAuthor(data.author));
            dispatch(choosePublisher(data.publisher));
            dispatch(chooseISBN(data.ISBN));
            dispatch(chooseYearPrinted(data.year_printed));
            dispatch(choosePageLength(data.page_length));

            server_calls.create(store.getState())
            setTimeout( () => {window.location.reload()}, 1000);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title">Title</label>
                    <Input {...register('title')} name='title' placeholder='Title'/>
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <Input {...register('author')} name='author' placeholder='Author'/>
                </div>
                <div>
                    <label htmlFor="publisher">Publisher</label>
                    <Input {...register('publisher')} name='publisher' placeholder='Publisher'/>
                </div>
                <div>
                    <label htmlFor="ISBN">ISBN</label>
                    <Input {...register('ISBN')} name='ISBN' placeholder='ISBN'/>
                </div>
                <div>
                    <label htmlFor="year_printed">Year Printed</label>
                    <Input {...register('year_printed')} name='year_printed' placeholder='Year Printed'/>
                </div>
                <div>
                    <label htmlFor="page_length">Page Length</label>
                    <Input {...register('page_length')} name='page_length' placeholder='Page Length'/>
                </div>
                <div className="flex p-1">
                    <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-yellow-700">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default BookForm
