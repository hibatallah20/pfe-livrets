import React from 'react';
import '../../styles/livret1.step4.css'
import Navbar from '../../components/Navbar';
import SideLeftRightButtons from '../../components/RightLeft.jsx'
import image4 from '../../assets/img4.jpeg';
import CardMUI from '../../components/LivretCard.jsx'
import { Grid } from '@mui/material'


const data = [
    {
        number: "01",
        title: "هدف الخطوة",
        text: "تمكين الباحث عن العمل من وضع رؤية مهنية واضحة ومحددة تتماشى مع طموحاته وإمكانياته",
        image: image4
    },
    {
        number: "02",
        title: "تحليل الرغبات المهنية",
        subTitle: "أسأل نفسك",
        text: "- ما الوظائف التي أشعر بالشغف تجاهها؟\n- ما القطاعات التي تثير اهتمامي؟\n- كيف أرى نفسي بعد 5 سنوات؟"
    },
    {
        number: "03",
        title: "تحليل نقاط القوة والضعف",
        text: "- تدوين قائمة بالمؤهلات التي تمتلكها ومقارنتها مع متطلبات السوق\n- تحليل التجارب السابقة لتحديد النجاحات والتحديات\n- طلب آراء الأصدقاء أو المرشدين المهنيين لمعرفة مجالات التحسين"
    },
    {
        number: "04",
        title: "تحديد الأهداف المهنية",
        text: "- وضع أهداف قصيرة ومتوسطة وطويلة المدى\n- استخدام مبدأ SMART (محدد، قابل للقياس، قابل للتحقيق، ذو صلة، زمني)\n- تقسيم الأهداف إلى مهام صغيرة قابلة للتنفيذ"
    },
    {
        number: "05",
        title: "تحديد الوظائف المناسبة",
        text: "- البحث عن الوظائف التي تتماشى مع مهاراتك وشهاداتك\n- تحديد المجالات التي توفر فرصاً أكبر للنمو والتطور\n- إجراء مقابلات استكشافية مع المهنيين العاملين في المجال المستهدف"
    }
];

const Step4 = () => {
    return (
        <>
        <Navbar/>
            <div className="step4-container">
                <div className="step4-header">
                    <h1 className="step4-title">الخطوة 1: كيفية تحديد مسار مهني واضح</h1>
                </div>

                <Grid
                    container
                    spacing={3}
                    direction="row-reverse"
                    justifyContent="center"
                    className="step4-grid"
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
                                               className='step4-grid-item'
                                           >
                            <CardMUI
                            maxWidth={480}
                                height={200}
                                number={item?.number}
                                title={item?.title}
                                text={item?.text}
                                image={item?.image}
                            />
                        </Grid>
                    ))}
                </Grid>
                <SideLeftRightButtons nextPage="/livret1/step5" />
             <SideLeftRightButtons prevPage="/livret1/step3" />
            </div>
        </>
    );
};

export default Step4;
