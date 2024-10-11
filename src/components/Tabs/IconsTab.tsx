import { BookOutlined, VerifiedUserOutlined } from '@mui/icons-material';
// import { TabPanel } from '@mui/lab'
import { Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import { TabPanel } from 'src/layouts/components/Profile/components/Util';
import { a11yProps } from 'src/utils/helper';

const IconsTab: React.FC = () => {
    const [value, setValue] = useState('0');

    const handleChange = () => {};
    return (
        <>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Profile" icon={<VerifiedUserOutlined />} iconPosition="start" {...a11yProps(0)} />
                <Tab label="Followers" icon={<BookOutlined />} iconPosition="start" {...a11yProps(1)} />
                {/* <Tab label="Friends" icon={<UsergroupAddOutlined />} iconPosition="start" {...a11yProps(2)} />
                <Tab label="Gallery" icon={<FileImageOutlined />} iconPosition="start" {...a11yProps(3)} /> */}
            </Tabs>
            <TabPanel value={value} index={0}>
                <Typography variant="h6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris
                    purus sem, sagittis eu mauris et, viverra lobortis urna.
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography variant="h6">
                    Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
                    semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
                </Typography>
            </TabPanel>
            {/* <TabPanel value={value} index={2}>
                <Typography variant="h6">
                    Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
                    cursus in nec est.
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Typography variant="h6">
                    Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
                    semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
                </Typography>
            </TabPanel> */}
        </>
    )
}

export default IconsTab
