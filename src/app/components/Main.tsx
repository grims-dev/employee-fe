import EmployeeTable from './EmployeeTable';
import TopNav from './TopNav';

export default function Main() {
    return (
        <main className="grow bg-theme-100 text-gray-900">
            <TopNav />
            <EmployeeTable />
        </main>
    );
}
