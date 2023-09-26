import { InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

import ContentContainer from './ContentContainer';

export default function TopNav() {
    return (
        <nav className="w-full bg-white shadow-md relative z-10">
            <ContentContainer className="py-4">
                <SearchIcon className="text-gray-400 mr-2" />
                <InputBase placeholder="Search" />
            </ContentContainer>
        </nav>
    );
}
