// assets

import { ChromeReaderModeOutlined, QuestionMarkOutlined } from "@mui/icons-material";


// icons
const icons = {
  ChromeReaderModeOutlined,
  QuestionMarkOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const pages = {
  id: 'page',
  title: 'Page',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: '/sample-page',
      icon: icons.ChromeReaderModeOutlined
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis/',
      icon: icons.QuestionMarkOutlined,
      external: true,
      target: true
    }
  ]
};

export default pages;