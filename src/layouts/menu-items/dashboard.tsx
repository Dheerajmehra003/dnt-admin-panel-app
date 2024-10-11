
import { DashboardCustomizeOutlined } from '@mui/icons-material';

// icons
const icons = {
  DashboardCustomizeOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardCustomizeOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;