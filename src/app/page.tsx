import Sidebar from './components/Sidebar';
import Main from './components/Main';

export default function Home() {
    return (
        <div className="flex bg-gray-50">
            <Sidebar />
            <Main />
        </div>
    );
}
