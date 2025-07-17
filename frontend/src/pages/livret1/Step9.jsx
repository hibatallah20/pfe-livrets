
import React from 'react';
import {  Container} from '@mui/material';
import Navbar from '../../components/Navbar';
import SideLeftRightButtons from '../../components/RightLeft.jsx';
import '../../styles/livret1.step2.css';
import Slide from '@mui/material/Slide';
import { text_size } from '../../utils/colors.js';

const weeklyTasks = [
    {
        id: "week1",
        week: "الأسبوع الأول",
        activity: "التعرف وتحديد الوظائف المستهدفة",
        tasks: [
            "مراجعة النقاط المكتشفة في الكتيب: التفضيلات، المهارات، الظروف المفضلة",
            "تحديث السيرة الذاتية بناءً على هذه النقاط",
            "البحث عن المتطلبات الوظيفية لكل وظيفة عبر منصات مثل ANAPEC أو Google"
        ]
    },
    {
        id: "week2",
        week: "الأسبوع الثاني",
        activity: "تحسين المهارات وإرسال الطلبات",
        tasks: [

            "حضور ورش عمل أو تسجيل في دورات تدريبية لتحسين المهارات الناقصة",
            "إعداد ملف طلب توظيف يحتوي على السيرة الذاتية، رسالة تحفيزية موجهة لكل وظيفة",
            "إرسال الطلبات عبر البريد الإلكتروني أو منصات التوظيف."
        ]
    },
    {
        id: "week3",
        week: "الأسبوع الثالث",
        activity: "التعرف على المقابلات والتواصل",
        tasks: [
            "التدرب على الإجابة عن أسئلة المقابلات الوظيفية",
            "إرسال رسائل متابعة للطلبات المرسلة،لتأكيد اهتمامك بالوظائف.",
            "تعزيز العلاقات المهنية عبر LinkedIn والانضمام إلى مجموعات مهنية",
        ]
    },
    {
        id: "week4",
        week: "الأسبوع الرابع",
        activity: "التقييم والتخطيط للمستقبل",
        tasks: [
            "تعزيز العلاقات المهنية عبر LinkedInوالانضمام إلى مجموعات مهنية.",
            "مراجعة التحديثات ووضع خطة أسبوعية أو شهريةلمتابعة عدد الطلبات المرسلة أو الردود المستلمة.",
            "تحديد الإنجازات المحققة مثل عدد الطلبات المرسلة أو الردود المستلمة"
        ]
    }
];


function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

const Step9 = () => {
   
    return (
        <Container className='step9-container'>

    <div className='step9-header'>
        <h1 className='step9-title'>خطة عمل شهرية ـ تطبيق كتيب التعرف على فرص الشغل</h1>
    </div>

    <div className="step9-table-wrapper">
        <table className="step9-table">
            <thead>
                <tr className="step9-thead-row">
                    <th className="step9-th">تم الإنجاز</th>
                    <th className="step9-th">المهام</th>
                    <th className="step9-th">الأنشطة الرئيسية</th>
                    <th className="step9-th">الأسبوع</th>
                </tr>
            </thead>
            <tbody>
                {weeklyTasks.map((item, weekIndex) => (
                    <tr
                        key={item.id}
                        className={isWeekCompleted(weekIndex) ? 'step9-tr-completed' : 'step9-tr'}
                    >
                        <td className="step9-td-checklist">
                            <ul className="step9-ul-checklist">
                                {item.tasks.map((_, taskIndex) => {
                                    const key = `mission${weekIndex + 1}_${taskIndex + 1}`;
                                    return (
                                        <li key={taskIndex}>
                                            <input
                                                type="checkbox"
                                                className="step9-checkbox"
                                                checked={completedTasks[key]}
                                                onChange={() => handleTaskToggle(weekIndex, taskIndex)}
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        </td>
                        <td className={`step9-td ${text_size}`}>
                            <ul className="step9-ul-tasks">
                                {item.tasks.map((task, index) => (
                                    <li key={index} className="step9-task-item">
                                        <span>{task}</span>
                                        <div className="step9-dot"></div>
                                    </li>
                                ))}
                            </ul>
                        </td>
                        <td className={`step9-td ${text_size}`}>{item.activity}</td>
                        <td className={`step9-td ${text_size}`}>{item.week}</td>
                    </tr>
                ))}
            </tbody>
        </table>
         <SideLeftRightButtons prevPage="/livret1/step8" />
    </div>
</Container>
    );
};

export default Step9;