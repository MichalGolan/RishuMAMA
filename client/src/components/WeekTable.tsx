import React from 'react';
import Paper from '@mui/material/Paper';
import {
    Scheduler,
    WeekView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

import appointments from '../demo-data/today-appointments';

function WeekTable() {
    return (
        <Paper>
            <Scheduler data={appointments} height={660}>
                <WeekView startDayHour={8} endDayHour={20} excludedDays={[6]} />
                <Appointments />
            </Scheduler>
        </Paper>
    );
}

export default WeekTable;