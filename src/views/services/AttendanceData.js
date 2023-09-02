import EmpAttendance from '../../components/forms/attendance/EmpAttendance';
import AttendanceByDate from '../../components/forms/attendance/AttendanceByDate';
import AttendanceReport from '../../components/forms/attendance/AttendanceReport.js';


const AttendanceData=[
    {
        text:"Employee Attendance",
        icon:"fas fa-calendar",
        TagName:EmpAttendance,

    },
    {
        text:"Attendance By Date",
        icon:"fas fa-cog",
        TagName:AttendanceByDate,
    },
    {
        text:"Attendance Report",
        icon:"fas fa-cog",
        TagName:AttendanceReport,
    },

]
export default AttendanceData;