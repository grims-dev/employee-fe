import EmployeeTable from './EmployeeTable';
import TopNav from './TopNav';

export default function Main() {
    return (
        <main className="grow text-gray-900">
            <TopNav />

            <EmployeeTable />
        </main>
    );
}
