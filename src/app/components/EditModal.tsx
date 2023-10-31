import { FormControl, Input, InputLabel, Modal, OutlinedInput } from '@mui/material';
import { Employee } from '../utils/types';

type Props = {
    open: boolean;
    handleClose: () => void;
    selectedEmployee: Employee | null;
};

export default function EditModal({ open, handleClose, selectedEmployee }: Props) {
    if (selectedEmployee === null) return null;

    return (
        <Modal open={open} onClose={handleClose}>
            <div className="w-1/2 h-1/2 p-6 bg-white absolute inset-1/2 -translate-x-1/2 -translate-y-1/2">
                <h2>Edit Employee</h2>
                <FormControl>
                    <InputLabel htmlFor="component-outlined">Name</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        defaultValue={selectedEmployee.fullName}
                        label="Full Name"
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="component-outlined">Name</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        defaultValue={selectedEmployee.email}
                        label="Email"
                    />
                </FormControl>
            </div>
        </Modal>
    );
}
