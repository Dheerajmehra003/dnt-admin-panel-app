import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { DoctorApprovalView } from 'src/sections/approvals/doctor/View/DoctorApprovalView';


// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Doctor - ${CONFIG.appName}`}</title>
      </Helmet>

      <DoctorApprovalView />
    </>
  );
}
