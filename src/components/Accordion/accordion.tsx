'use client'
import Accordion from 'accordion-js';
import { useRef, useEffect } from 'react';

export default function Accordion(){

    const ref = useRef(null);

    useEffect(() => {
        import('accordion-js')
          .then(module => {

            const Accordion = module.default;

            if(ref.current!==null){
                const accordion = new Accordion(ref.current);
            }
            console.log(Accordion) 
            console.log(ref) 
          })
          .catch(error => {
            console.error('Error importing client-side file:', error);
          });

      }, []);
    return(
        <div className="container container--treatments accordion-container" ref={ref}>

            <div className="ac card card--white">
            <h2 className="services__title services__title--treatments">
                <button className="ac-trigger">Wizyta fizjoterapeutyczna</button>
            </h2>
            <div className="ac-panel services__desc">
                <p className="ac-text">Wizyta fizjoterapeutyczna to rodzaj konsultacji specjalistycznej w trakcie której przeprowadzany jest dokładny wywiad medyczny, w celu ustalenia głównego problemu pacjenta. Uzyskanie informacji na temat dolegliwości i objawów pacjenta, historii choroby bądź urazu, ogólnego stanu zdrowia, a także jego stylu życia –umożliwia ukierunkowanie dalszej diagnostyki oraz określenie celu terapii.
Następnym etapem jest badanie fizjoterapeutyczne, na podstawie którego można określić stan funkcjonalny pacjenta.
Na pierwszą wizytę warto zabrać dotychczasową dokumentację medyczną, jaką posiada pacjent, wraz z wszelkimi badaniami obrazowymi m.in. RTG, USG i MR. Wszystkie zebrane informacje pozwolą na dobranie możliwie najskuteczniejszych metod terapii indywidualnie dla każdego pacjenta.
Zapisanie się na wizytę wiąże się z koniecznością podania numeru telefonu. W przypadku braku możliwości przybycia w umówionym terminie prosimy o informację dzień wcześniej lub najszybciej jak to możliwe.
Fizjoterapeuta podczas wizyty każdorazowo zobowiązany jest do uzupełniania na bieżąco dokumentacji medycznej, co wiąże się z koniecznością podania numeru PESEL. Wszelkie informacje z wizyty są do wglądu dla pacjenta</p>
            </div>
            </div>
            <div className="ac card card--white">
            <h2 className="services__title services__title--treatments">
                <button className="ac-trigger">Elektroterapia</button>
            </h2>
            <div className="ac-panel services__desc">
                <p className="ac-text">Elektrolecznictwem lub elektroterapią nazywa się dział lecznictwa fizykalnego, w którym wykorzystuje się do celów leczniczych prąd stały oraz prądy impulsowe małej i średniej częstotliwości. Prąd ma działanie przeciwbólowe i zmniejsza napięcie mięśniowe, poprawia ukrwienie, przyspiesza procesy regeneracji tkanek oraz sprawia, że obrzęki lepiej się wchłaniają.</p>
            </div>
            </div>
            <div className="ac card card--white">
            <h2 className="services__title services__title--treatments">
                <button className="ac-trigger">Światłolecznictwo</button>
            </h2>
            <div className="ac-panel services__desc">
                <p className="ac-text">Światłolecznictwo jest działem fizykoterapii, w którym wykorzystuje się promieniowanie podczerwone, widzialne oraz nadfioletowe. Światłolecznictwo pomaga zmniejszyć patologiczne napięcie mięśni, wspomaga ukrwienie oraz działa przeciwbólowo.</p>
            </div>
            </div>
            <div className="ac card card--white">
            <h2 className="services__title services__title--treatments">
                <button className="ac-trigger">Magnetoterapia</button>
            </h2>
            <div className="ac-panel services__desc">
                <p className="ac-text">Charakterystyczną cechą pola magnetycznego jest przenikanie przez wszystkie struktury ustroju. Magnetoterapia może być wykonana przez ubranie lub opatrunek gipsowy. Część ciała, która ma zostać poddana terapii należy umieścić w specjalnej obręczy. Najczęściej stosuje się ją w terapii schorzeń ortopedycznych oraz neurologicznych.</p>
            </div>
            </div>
            <div className="ac card card--white">
            <h2 className="services__title services__title--treatments">
                <button className="ac-trigger">Laseroterapia</button>
            </h2>
            <div className="ac-panel services__desc">
                <p className="ac-text">Laseroterapia wykorzystuje działanie światła o określonych cechach. Wiązka promieniowania laserowego
 przenika do tkanek ciała ludzkiego, wywołując działanie przeciwbólowe i przeciwzapalne, a także biostymulacyjne.</p>
            </div>
            </div>
            <div className="ac card card--white">
            <h2 className="services__title services__title--treatments">
                <button className="ac-trigger">Krioterapia</button>
            </h2>
            <div className="ac-panel services__desc">
                <p className="ac-text">Wskazania do stosowania krioterapii miejscowej są bardzo
rozległe i związane z ich wpływem przeciwzapalnym, przeciwbólowym,
przeciwobrzękowym oraz zmniejszającym napięcie mięśni. Należą do nich:
choroby narządu ruchu, stany po urazach i przeciążeniach, obrzęki po złamaniu kości oraz zwichnięciach i skręceniach stawów,ostre zapalenia tkanek miękkich okołostawowych choroby gośćcowe reumatoidalne zapalenie stawów w okresie ostrym oraz zaostrzenia,- stany bólowe w przebiegu choroby zwyrodnieniowej stawów i wiele innych.</p>
            </div>
            </div>
            <div className="ac card card--white">
            <h2 className="services__title services__title--treatments">
                <button className="ac-trigger">Ultradźwięki</button>
            </h2>
            <div className="ac-panel services__desc">
                <p className="ac-text">Ultradźwiękami nazywa się drgania mechaniczne o częstotliwości przekraczającej granicę słyszalności ucha ludzkiego. Ich działanie opiera się w dużej mierze na powstawaniu związków aktywnych biologicznie, wpływowi na enzymy ustrojowe oraz przyspieszaniu wchłaniania tkankowego.</p>
            </div>
            </div>
            <div className="ac card card--white">
            <h2 className="services__title services__title--treatments">
                <button className="ac-trigger">Wodolecznictwo</button>
            </h2>
            <div className="ac-panel services__desc">
                <p className="ac-text">Wodolecznictwo, czyli hydroterapia stanowi najstarszy dział fizjoterapii. Podstawę leczniczego działania stanowi działanie termiczne i hydrostatyczne wody odpowiednio użytej do zabiegu. Zabiegi wodolecznicze związane są przede wszystkim ze złożonym działaniem na organizm człowieka zespołu czynników, w którym pierwszorzędną rolę odgrywa temperatura i ciśnienie hydrostatyczne. Właściwości fizyczne wody umożliwiają bardzo subtelne dawkowanie zarówno bodźców termicznych, jak i mechanicznych, uwzględniające indywidualne różnice w reaktywności organizmu chorego.</p>
            </div>
            </div>
            <div className="ac card card--white">
            <h2 className="services__title services__title--treatments">
                <button className="ac-trigger">Masaż</button>
            </h2>
            <div className="ac-panel services__desc">
                <p className="ac-text">Zabieg fizjoterapeutyczny polegający na sprężystym odkształcaniu tkanek, ma działanie lecznicze, relaksacyjne oraz przeciwobrzękowe. Masaż pozytywnie wpływa na organizm, zarówno w ujęciu somatycznym (w odniesieniu do ciała), jak i psychosomatycznym (oddziałując na umysł).</p>
            </div>
            </div>
            <div className="ac card card--white">
            <h2 className="services__title services__title--treatments">
                <button className="ac-trigger">Fala uderzeniowa</button>
            </h2>
            <div className="ac-panel services__desc">
                <p className="ac-text">Terapia falami uderzeniowymi BTL SWT jest nieinwazyjnym nowoczesnym rozwiązaniem do eliminowania
przewlekłego bólu występującego w układzie mięśniowo − szkieletowym. Ma swoje zastosowanie w fizjoterapii,
 ortopedii i medycynie sportowej. W przewlekłych schorzeniach mięśni oraz ścięgien, takich jak: zespół bolesnego
 barku, łokieć tenisisty/golfisty, bóle kręgosłupa, ból ścięgna Achillesa, zapalenia ścięgien, punkty spustowe i inne.</p>
            </div>
            </div>

        </div>
    )
}