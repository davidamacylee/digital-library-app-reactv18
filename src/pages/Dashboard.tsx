import DataTable from '../components/DataTable'
import Background from '../assets/images/reading-profile-page.jpg'

function Dashboard() {
    return (
        <div
            style={{ backgroundImage: `url(${ Background })`}}
            className='flex flex-row mx-auto bg-cover bg-fixed'
            >
            <div className="flex h-screen">
                <DataTable/>
            </div>
        </div>
    )
}

export default Dashboard
