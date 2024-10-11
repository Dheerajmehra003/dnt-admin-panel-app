import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { _users } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import CommonDeleteConfirmDialog from 'src/components/dialogs/common-delete-confirm-dialog';
import ServerSideTable from '../components/ServerSideTable';
// import {ClientSideTable} from '../components/ClientSideTable';

// import DoctorAddEditDialogue from '../components/DoctorAddEditDialogue';



// ----------------------------------------------------------------------

export function DoctorApprovalView() {

  const [modelOpen, setModelOpen] = useState<boolean>(false);
  const [modelOpenDelete, setModelOpenDelete] = useState<boolean>(false);
  const [filterName, setFilterName] = useState<string>('');
  const [isEdit, setIsEdit] = useState<boolean>(false);
  
  const toggle = (): void => { setModelOpen(!modelOpen); };
  const onClose = (): void => { setModelOpen(false); };

  const onCloseForDelete = (): void => { setModelOpenDelete(false); }
  const handleDelete = (): void => { setModelOpenDelete(!modelOpenDelete); };

  const onConfirmDelete = (): void => {
    console.log("data deleted")
  }

  const handleEdit = (): void => { setIsEdit(!isEdit); setModelOpen(!modelOpen); };
 

  return (
    <DashboardContent>
      {/* <DoctorAddEditDialogue
       open={modelOpen}
       onClose={onClose}
       isEdit={isEdit}
      //  isLoading={isLoading}
      //  setLoading={setLoading}
      //  LoadList={LoadfetchList}
      /> */}
      <CommonDeleteConfirmDialog
        open={modelOpenDelete}
        onClose={onCloseForDelete}
        onConfirm={onConfirmDelete}
        title="Doctor Delete"
        message="Are you sure to delete this Doctor Now?"
      />
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          All Doctors
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={toggle}
        >
          New Doctor
        </Button>
      </Box>

      <Card>
        <ServerSideTable />
        {/* <ClientSideTable /> */}
      </Card>
    </DashboardContent>
  );
}
