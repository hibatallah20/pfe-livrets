import React from 'react';
import '../../styles/livret1.step3.css'
import Navbar from '../../components/Navbar';
import SideLeftRightButtons from '../../components/RightLeft.jsx'
import image1 from '../../assets/img1.jpeg';
import image2 from '../../assets/img2.png';
import image3 from '../../assets/img3.jpeg';
import image4 from '../../assets/img4.jpeg';
import CardMUI from '../../components/LivretCard.jsx'
import { Grid } from '@mui/material'

const data = [
    { number: '01', title: "كيفية تهديد مسار مهني واضح", text: "تمكين الباحث عن العمل من وضع رؤية مهنية واضحة ومحددة تتماشى مع طموحاته و إمكانياته" },
    {
        number: '02',
        title: "تحليل الكفاءآت الشخصية", text: "مساعدة الباحث عن عمل في التعرف على مهاراته و كفاءآته و ربطها بالوظائف المتاحة", 
        image: image3
    },
    { number: '03', title: "طرق البحث الفعالة عن فرص العمل", text: "تزويد الباحث عن العمل بفضل الأدوات والأساليب للوصول إلى فرص العمل المتاحة" },
    {
        number: '04',
        title: "إعداد ملف شخصي قوي", text: "تمكين الباحث عن العمل من إعداد ملف مهني جذاب يزيد من فرصة في التوضيف",
         image: image4
    },
    { number: '05', title: "نصائح عملية لتحديد أي عمل يمكنني أن أبحث", text: "نعرض لك أهم القواعد لمساعدتك على تنظيم و تسهيل عملية البحث عن وظيفة" },
    {
        number: '06',
        title: "خطة عملي للشهر المقبل",
        text: "نوفر لك إطارًا عمليًا لتحديد أهدافك وتنظيم خطواتك لتحقيق نتائج ملموسة",
        image: image1
    },
];

const Step3 = () => {
    return (
      <>
      <Navbar/>
        <div className='step3-container'>
            <div className='step3-header'>
                <h1 className='step3-title'>فهرس المحتوى</h1>
            </div>

            <Grid
                container
                spacing={3}
                direction="row-reverse"
                justifyContent="center"
                className='step3-grid'
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
                        className='step3-grid-item'
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
             <SideLeftRightButtons nextPage="/livret1/step4" />
             <SideLeftRightButtons prevPage="/livret1/step2" />
        </div>
        </>
    )
}


export default Step3;