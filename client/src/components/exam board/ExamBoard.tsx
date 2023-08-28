import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip'
import Paper, { PaperProps } from '@mui/material/Paper';
import { Exam } from "../../data/api/courses";
import classes from './ExamBoard.module.css';
import { defaultColor } from '../../utils/defaults'

const maxDaysInMonth = 31;
interface Props {
    exams: Exam[];
}

const calcMonths = (exams: Exam[]) : number[] => {
    const months = new Set<number>();

    for (const exam of exams) {
        months.add(exam.date.getMonth());
    }

    return [...months];
}

const stringifyMonthDay = (month: number, day: number) => {
    return `M${month}/D${day}`
}
const getDatesMap = (exams: Exam[]): Map<string, { name: string, isFirst: boolean, color: string }> => {
    const datesMap =  new Map<string, {name: string, isFirst: boolean, color: string}>();

    for (const exam of exams) {
        datesMap.set(
            stringifyMonthDay(exam.date.getMonth(),
                exam.date.getDate()), {
                name: exam.course.name,
                isFirst: exam.isFirst,
                color: exam.course.color,
            });
    }

    return datesMap;
}

function getMonthShortName(monthNo: number) {
    const date = new Date();
    date.setMonth(monthNo);

    return date.toLocaleString('en-US', { month: 'short' });
}

const get2DigitString = (num: number) => {
    return num < 10 ? `0${num}` : `${num}`;
}

const StyledPaper = (props: PaperProps) => {
    return (
        <Paper
            elevation={4}
        >{ props.children }</Paper>
    )
}

function ExamBoard(props: Props) {
    let months: number[] = [];
    let datesMap: Map<string,  { name: string, isFirst: boolean, color: string }> = new Map();

    if(props.exams.length > 0){
        months = calcMonths(props.exams);
        datesMap = getDatesMap(props.exams);
    }

    const isColored = (month: number, day: number) => {
        return datesMap.has(stringifyMonthDay(month, day));
    }

    const getNameByDate = (month: number, day: number) => {
        if(!isColored(month, day)) return '';
        return datesMap.get(stringifyMonthDay(month, day))?.name;
    }

    const getIsFirstByDate = (month: number, day: number) => {
        if(!isColored(month, day)) return '';
        return datesMap.get(stringifyMonthDay(month, day))?.isFirst;
    }

    const getDataByDate = (month: number, day: number) => {
        const data = datesMap.get(stringifyMonthDay(month, day));
        return data ? data : { name: '', isFirst: '', color: 'none'};
    }
    
    return (
        <TableContainer component={StyledPaper}>
            <Table sx={{ minWidth: 20 }} size="small" aria-label="exams table by months">
                <TableHead>
                    <TableRow>
                        { months
                            .map((monthNo) =>
                                <TableCell key={monthNo}>
                                    {getMonthShortName(monthNo)}
                                </TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {[...Array(maxDaysInMonth)].map((e, i) => {
                        return <TableRow key={i}>
                            {months
                                .map((monthNo) => {
                                        const colorMe = isColored(monthNo, i + 1);
                                        const { name, isFirst, color } = getDataByDate(monthNo, i + 1);
                                        const hoverHTML = colorMe ? (
                                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                                <div>{`${get2DigitString(i + 1)}/${get2DigitString(monthNo + 1)}`}</div>
                                                <div>{getNameByDate(monthNo, i + 1)}</div>
                                                <div>{getIsFirstByDate(monthNo, i + 1) ? 'מועד א' : 'מועד ב'}</div>
                                            </div>
                                        ) : ''
                                        return (
                                        <Tooltip
                                            title={hoverHTML}
                                            followCursor>
                                            <TableCell
                                                align={'center'}
                                                key={monthNo}
                                                sx={{
                                                    borderRight: 1,
                                                    borderColor: '#E5E4E2',
                                                    background: colorMe ? color : 'none'
                                                }}
                                            >
                                            </TableCell>
                                        </Tooltip>)
                                    }
                                )}
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ExamBoard;