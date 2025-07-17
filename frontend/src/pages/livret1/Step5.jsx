import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SideLeftRightButtons from '../../components/RightLeft.jsx';
import { Grid } from '@mui/material'
import  CardMUI  from '../../components/LivretCard.jsx'
import '../../styles/livret1.step2.css';


const data = [
    { number: "01", title: "كيفية تهديد مسار مهني واضح", subTitle: "كيفية تهديد", text: "تمكين الباحث عن العمل من وضع رؤية مهنية واضحة ومحددة تتماشى مع طموحاته و إمكانياته" },
    { number: "02", title: "تحليل الكفاءآت الشخصية", text: "مساعدة الباحث عن عمل في التعرف على مهاراته و كفاءآته و ربطها بالوظائف المتاحة" },
    { number: "03", title: "طرق البحث الفعالة عن فرص العمل", text: "تزويد الباحث عن العمل بفضل الأدوات والأساليب للوصول إلى فرص العمل المتاحة" },
    { number: "04", title: "إعداد ملف شخصي قوي", text: "تمكين الباحث عن العمل من إعداد ملف مهني جذاب يزيد من فرصة في التوضيف" },
    { number: "05", title: "نصائح عملية لتحديد أي عمل يمكنني أن أبحث", text: "نعرض لك أهم القواعد لمساعدتك على تنظيم و تسهيل عملية البحث عن وظيفة" },
];

const Step5 = () => {
    return (
        <>
        <Navbar/>
            <div className="step2-container">
                <div className="step2-header">
                    <h1 className="step2-title">توضيح هام للباحثين عن الشغل</h1>
                </div>
                <Grid
                    container
                    spacing={2}
                    columns={{ xs: 12, sm: 12, md: 12 }}
                    direction="row-reverse"
                    justifyContent="center"
                    className="step2-grid"
                >
                    {data.map((item, index) => (
                        <Grid
                            key={index}
                            sx={{
                                gridColumn: {
                                    xs: 'span 12',
                                    sm: 'span 6',
                                    md: 'span 4',
                                },
                            }}
                            className="step2-grid-item"
                        >
                            <CardMUI
                                maxWidth={480}
                                height={200}
                                number={item?.number || ""}
                                title={item?.title || ""}
                                subTitle={item?.subTitle || ""}
                                text={item?.text || ""}
                            />
                        </Grid>
                    ))}
                </Grid>
                <SideLeftRightButtons nextPage="/livret1/step6" />
                <SideLeftRightButtons prevPage="/livret1/step4" />
            </div>
        </>
    )
}

export default Step5;
