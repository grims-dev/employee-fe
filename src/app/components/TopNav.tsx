import { InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

export default function TopNav() {
    return (
        <nav className="w-full bg-white shadow-lg p-4 px-6">
            <SearchIcon className="text-gray-400 mr-2" />
            <InputBase placeholder="Search" />
        </nav>
    );
}
