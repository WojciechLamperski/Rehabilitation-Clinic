import Link from "next/link"
import Carousel from "@/components/Carousel/carousel";
import ReactMarkdown from "react-markdown";

export default async function Home() {   

    const res = await fetch("http://172.28.64.1:1337/api/about");
    const about = await res.json();
    const aboutBody = about.data.attributes.about;
    
    return (
        <>
            <Carousel />

            <section className="services">

                <div className="services--container container">

                <Link href="/zabiegi" className="services__card card card--white card--shadow">
                    <div className="services__top services__top--circle services__top--circle1">
                    <svg className="services__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                        <path d="M540 975q-112 0-186-78.5T280 709v-35q-85-11-142.5-75.711T80 446V216h120v-40h60v140h-60v-40h-60v169.677Q140 517 189.5 566.5T310 616q71 0 120.5-49.5T480 445.677V276h-60v40h-60V176h60v40h120v230q0 87.578-57.5 152.289Q425 663 340 674v35q0 85 56.5 145.5T540 915q81 0 140.5-60.152T740 708.765V632q-35-10-57.5-39T660 526q0-45.833 32.118-77.917 32.117-32.083 78-32.083Q816 416 848 448.083q32 32.084 32 77.917 0 38-22.5 67T800 632v77q0 111-76.5 188.5T540 975Zm229.825-399Q791 576 805.5 561.675q14.5-14.324 14.5-35.5Q820 505 805.675 490.5q-14.324-14.5-35.5-14.5Q749 476 734.5 490.325q-14.5 14.324-14.5 35.5Q720 547 734.325 561.5q14.324 14.5 35.5 14.5Zm.175-50Z" />
                    </svg>
                    </div>
                    <div className="services__title">
                    Konsultacje lekarskie
                    </div>
                    <div className="services__desc">
                    W naszej przychodni mają państwo możliwość skorzystania z porady lekarza specjalisty w dziedzinie fizjoterapii,
                    który zdiagnozuje i zleci indywidualnie dobrane do pacjenta zabiegi.
                    </div>
                </Link>

                <Link href="/zabiegi" className="services__card card card--white card--shadow">
                    <div className="services__top services__top--circle services__top--circle2">
                    <svg className="services__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                        <path d="M480 976q-72-8-143.5-41.5t-128.5-93q-57-59.5-92.5-147T80 491.025V453h38q53 0 113 20.5T337 526q8-90 48-185.5T480 177q55 68 95 163.5T623 526q46-30 106-51.5T842 453h38v38.025Q880 607 844.5 694.5t-92.5 147q-57 59.5-128.5 93T480 976Zm8-61q-11-186-107.393-282.184Q284.213 536.632 141 514q13 193 112.5 288T488 915Zm-9-245q14-26 38.5-56t47.5-50q5-68-20-138t-65-145q-40 75-65 145t-20 138q23 20 46.5 50t37.5 56Zm69 228q47-17 93.5-45t84-73q37.5-45 63-110.5T819 514q-106 17-187 75.5T513 734q12 38 21 76.5t14 87.5Zm-69-228Zm69 228Zm-60 17Zm25-181Zm-33 242Z" />
                    </svg>
                    </div>
                    <div className="services__title">
                    Zabiegi
                    </div>
                    <div className="services__desc">
                    Oferujemy szeroką gamę zabiegów fizykoterapeutycznych, zapewniając przy tym
                    wysoką jakość usług i wykwalifikowany personel.
                    </div>
                </Link>

                <Link href="/zabiegi" className="services__card card card--white card--shadow">
                    <div className="services__top services__top--circle services__top--circle3">
                    <svg className="services__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                        <path d="M120 936v-60l87-255-87-255v-60h527l62-170 68 27-52 143h115v60l-88 255 88 255v60H120Zm332-161h60V651h124v-60H512V467h-60v124H328v60h124v124ZM182 876h596l-88-255 88-255H182l88 255-88 255Zm298-255Z" />
                    </svg>
                    </div>
                    <div className="services__title">Metody Specjalne</div>
                    <div className="services__desc">
                    W naszej przychodni mogą państwo skorzystać z takich zabiegów specjalnych jak:
                    <i>Metoda Mulligana</i> oraz <i>Kinesiotaping</i>.
                    </div>
                </Link>

                </div>

            </section>

            <section className="main__section main__section--margins">

                <div className="card__container">
                <div className="card--horizontal card">
                    <h3 className="card__top card__top--text">O nas </h3>
                    <h1 className="card__title">Witamy w NZOZ rehabilitacja majowe</h1>
                    <ReactMarkdown className="card__desc">
                        {aboutBody}
                    </ReactMarkdown>
                </div>
                <img className="card__img" alt="kobieta w trkakcie sesji chiropraktycznej, uśmiechająca się z zamkniętymi oczami" src="img/home/patient_smile.jpg" />
                </div>

            </section>
        </>
    )
}
