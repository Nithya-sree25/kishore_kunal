import React from "react";
import "./Journal.css";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
function Journal() {
     const [journals, setJournals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "journals"));
      const data = querySnapshot.docs.map(doc => doc.data());
      setJournals(data);
    };

    fetchData();
  }, []);
   const patents = journals.filter(item => item.category === "Patent");
    const thomson = journals.filter(item => item.category === "Thomson");
  return (
    
    <section className="journal">

      <h1 className="journal-title">Journal of Publications</h1>
        
      {/* PATENTS */}
      <div id="patent" className="journal-card">
        <h2>Patent Records</h2>
        <ol style={{ paddingLeft: "20px" }}>
  {patents.map((item, index) => (
   <li
  key={index}
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px"
  }}
>
  <span style={{ flex: 1, textAlign: "justify" }}>
    <strong style={{ marginRight: "5px" }}>{index + 1}.</strong>
    {item.author}, {item.title}, {item.year}.
  </span>

  <button
    onClick={() => window.open(item.pdf, "_blank")}
    style={{
      marginLeft: "10px",
      backgroundColor: "#e91e63",
      color: "white",
      border: "none",
      padding: "6px 12px",
      borderRadius: "6px",
      cursor: "pointer",
      whiteSpace: "nowrap"
    }}
  >
    View PDF
  </button>
</li>
  ))}
</ol>       
        
      </div>

<div id="thomson" className="journal-card">
        <h2>Thomson Reuters Journals</h2>
        <ol style={{ paddingLeft: "20px" }}>
  {thomson.map((item, index) => (
   <li
  key={index}
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px"
  }}
>
  <span style={{ flex: 1, textAlign: "justify" }}>
    <strong style={{ marginRight: "5px" }}>{index + 1}.</strong>
    {item.author}, {item.title}, {item.year}.
  </span>

  <button
    onClick={() => window.open(item.pdf, "_blank")}
    style={{
      marginLeft: "10px",
      backgroundColor: "#e91e63",
      color: "white",
      border: "none",
      padding: "6px 12px",
      borderRadius: "6px",
      cursor: "pointer",
      whiteSpace: "nowrap"
    }}
  >
    View PDF
  </button>
</li>
  ))}
</ol>       
        
      </div>


      {/* THOMSON */}
      <div className="journal-card">
        <h2>Thomson Reuters Journals</h2>
        <ol>
          <li>Saravanan, L Suresh, M Murugasan, V Mahendran, M Vairavel ,"Numerical Analysis and 
Optimization of Engine Cylinder Fins of Varying Geometry and Material", International 
journals of Research and technology, Vol 5 (2), 2015.</li>
          <li>K Manikandan, M Vairavel, "Numerical Analysis of Hybrid Natural Fiber Reinforced Polymer 
Composites using FEM", International Journal of Engineering Sciences & Research 
Technology, Vol 1316 issue 3 (3), 2014.</li>
          <li>S Eswaran, M Chandru, M Vairavel, R Girimurugan, " Numerical Study on Solar Water Heater 
using CFD Analysis", International Journal Of Engineering Sciences & Research
Technology, Vol 3, 2014.</li>
        </ol>
      </div>

      {/* WEB OF SCIENCE */}
      <div className="journal-card">
        <h2>Web of Science</h2>
        <ol>
          <li>"Quantifying and mapping sediment retention ecosystem services in a mountain landscape 
of Southern Western Ghats, India." Ecology, Environment and Conservation Journal 26 
(2020): S369-S377.</li>
          <li>“Effects of Corrosion resistance of the dissimilar materials analysis in Friction stir 
welding” Journal of Mechanics of continua and mathematical sciences, PAIDEUMA, Web of 
science, Natl poetry foundation, UNIV MAINE, ISSN: 2454 -7190, Print ISSN: 0973 -8975.</li>
          <li>“Electrical super conductivity FRPC Materials -ART of Review” , Journal of Mechanics of 
continua and mathematical sciences , PAIDEUMA , Web of science ,Natl poetry foundation
,UNIV MAINE , ISSN : 2454 -7190 ,Print ISSN : 0973 -8975</li>
          <li>Vairavel, M., Kathiresan, G., Prabakaran, M.P., Govindarasan, D. 2024 “Philosophy Analysis 
Of Aisi 316/Aisi 410 Stainless Steel Joint By Means Of Mechanical And Metallurgical 
Properties Using Tig Welding Method” ournal of Engineering and Technology for Industrial 
Applications 10(47), pp. 1-10</li>
          <li>Murugadoss, R., Nesamani, S.L., Banushri, A., Rajini, S.N.S., Gopi, P. 2024 “A review of 
using deep learning from an ecology perspective to address climate change and air 
pollution” Global Nest Journal 26(2)</li>
          <li>Madeshwaren, V., Govindaraju, K., Pandey, P., ...Thangavel, S., Thangaraj, R. 2024 
“Predictive modeling for solar desalination using artificial neural network techniques: A 
review” Global Nest Journal 26(2)</li>
          <li>Vairavel, M., Rajpradeesh, T., Bathrinath, S., ...Kanagasabai, T., Jaichandru, K. 2024 
“Analyzing Safety Measures And Environmental Impact In The Fireworks Industry 
Using Machine Learning” Journal of Environmental Protection and Ecology 25(5), pp. 1424-
1432</li>
          <li>Madeshwaren, V., Ramamoorthy, M., Thangavel, S., ...Rajpradeesh, T. 2024 “Impact of 
morphological and mechanical components on Inconel 625 grinding using common 
cylindrical grinding wheels” Mechanical Engineering for Society and Industry 4(1), pp. 92-
102.</li>
<li>Vairavel, M., Mohanasundaram, S., Mohan, R. 2023 “Distilled water by solar desalination 
using PCM in environmental solution” Global Nest Journal 25(10), pp. 132-137</li>
<li>
    Vairavel, M., Girimurugan, R., Shilaja, C., ...Loganathan, G.B., Kumaresan, J. 2022 
“Modeling, validation and simulation of electric vehicles using MATLAB” AIP Conference 
Proceedings 2452
</li>
<li>
    Vairavel, M., Girimurugan, R., Senniangiri, N., ...Pitchia Krishnan, B., Kavitha, S. 2021 
“Tensile Behaviour of Hybrid Polymer Composites-An Experimental Study” IOP 
Conference Series: Materials Science and Engineering 1059(1)
</li>
<li>
    Vairavel, M., Poornachandiran, N., Pugazhenthi, R., ...Vijay Ananth, S., Gopala Krishnan, T. 
2020 “Investigation of mechanical properties of Al6061 with reinforcement of SiC/B C 
metal matrix composites” AIP Conference Proceedings 2283
</li>
<li>
    Madeshwaran, V., Palanichamy, R., Lakshmipathy, J., ...Kulendran, B. 2019 “Mechanical 
characteristics of fly ash reinforced aluminium metal matrix composite-art of review” 
International Journal of Advanced Research in Engineering and Technology 10(6), pp. 122-129
</li>
<li>
    Vairavel, M., Anbuchezian, A., Chandrasekaran, N. 2019 “Experimental analysis of 
traditional and NFRP concrete for frame members” International Journal of Advanced 
Research in Engineering and Technology 10(6), pp. 130-139
</li>
<li>
    Vairavel, M., Selvaraj, M., Sadagopan, P. 2019 “Review on latent heat solar air collectors”
InternationalJournal of Advanced Research in Engineering and Technology 10(6), pp. 112-121
</li>
<li>
    Vairavel, M., Raj, S.S., Kannan, T.K., ...Babu, M. 2019 “Processing and testing parametes 
of PLA reinforced with natural plant fiber composite materials - A brief review” 
International Journal of Mechanical and Production Engineering Research and Development 9,
pp. 933-940
</li>
<li>
    Vairavel, M., Muthuraman, R.K., Pugazhenthi, R., ...Vijayananth, S., Ajith Arul Daniel, S. 
2019 “Computational fluid dynamic analysis of re-entry of space vehicles” International 
Journal of Mechanical and Production Engineering Research and Development 9(Special Issue 
2), pp. 780- 791
</li>
<li>
    Vairavel, S.M., Malick, A., Sanjayankumar 2018 “People participation in biodiversity 
conservation” Indian Hotspots: Vertebrate Faunal Diversity, Conservation and Management 
2, pp. 325-341
</li>
<li>
    Vairavel, S.M., Easa, P.S, 2018 “Group size and composition of gaur (bos gaurus gaurus) 
in relation to environmental factors in parambikulam wildlife sanctuary, Western Ghats” 
Indian Hotspots: Vertebrate Faunal Diversity, Conservation and Management Volume 1 pp. 
111-126
</li>
        </ol>
      </div>

      {/* UGC */}
      <div className="journal-card">
        <h2>UNIVERSITY GRANT COMMISSION JOURNALS -CARE</h2>
        <ol>
          <li>C.Thiruvasagam ,Selvaraj .M , S.Saravanan , Vairavel.M, R.Girimurugan, ART OF 
REVIEW - FIBER REINFORCED POLYMER COMPOSITES, Journal of Information 
and Computational Science, VOL-9-ISSUE-11-2019, Page No: 461-466, 
DOI:10.12733.JICS.2019.V9I11.535569.1162</li>
          <li>Selvaraj .M , S.Saravanan , Vairavel.M, R.Girimurugan, C.Thiruvasagam , ART OF 
REVIEW-SOLAR ENERGY DRYING SYSTEMS: LATENT HEAT TEMPERATURE
AIR HEATING SOLAR COLLECTOR SYSTEM, Journal of Information and 
Computational Science, VOL-9-ISSUE-11-2019, Page No: 467-
470,DOI:10.12733.JICS 2019.V9I11.535569.1163.</li>
          <li>S.Saravanan , Vairavel.M, R.Girimurugan, C.Thiruvasagam ,Selvaraj .M , REVIEW -
WASTE HEAT HARVESTING SYSTEM ANALYSIS BY THERMO-ELECTRIC 
GENERATOR USED AUTOMOBILE CATALYTIC CONVERTER, Journal of
Information and Computational Science, VOL-9-ISSUE-11-2019, Page No: 471-
486,DOI:10.12733.JICS 2019.V9I11.535569.1164</li>
          <li>Vairavel.M, R.Girimurugan, C.Thiruvasagam ,Selvaraj .M , S.Saravanan , STATE -OF –
ART – REVIEW ANALYSIS OF PRESENT FLY ASH REINFORCED METAL
MATRIX COMPOSITE , Journal of Information and Computational Science, VOL-9-
ISSUE-11-2019, Page No: 487-497, DOI:10.12733.JICS 2019.V9I11.535569.1165</li>
          <li>R.Girimurugan, C.Thiruvasagam ,Selvaraj .M , S.Saravanan, Vairavel.M, 
EXPERIMENTAL ANALYSIS OF WASTE HEAT RECOVERY SYSTEM 
ANALYSIS BY TEG USED AUTOMOBILE -CATALYTIC CONVERTOR ,
Journal of Information and Computational Science, VOL-9-ISSUE-11-2019, Page No: 
498-505 ,DOI:10.12733.JICS 2019.V9I11.535569.1166</li>
          <li>N.Sundaramoorthy, S.Saravanan, K.Manikandan, M.Vairavel , Transient Analysis On 
Engine Cylinder Fins By Modifying Its Material And Geometrical Parameter , Jac : 
A Journal Of Composition Theory, Volume Xii Issue Vi June 2019
,Page No -240-246, doi:16.10089.jct.2019.v12i5.19.25153</li>
          <li>K. Manikandan, M.Vairavel, N. Sundaramoorthy, S. Saravanan , an experimental and 
dynamic analysis of nano wind turbine, Jac : A Journal Of Composition Theory, Volume 
Xii Issue Vi June 2019 , page no: 1134-1140, doi:19.18001.ajct.2019.v12i7.19.10136</li>
            <li>
                K. Manikandan, M.Vairavel, N. Sundaramoorthy, S. Saravanan, structural analysis of 
small power consumption of micro wind turbine by various optimized materials , Jac : A 
Journal Of Composition Theory, vol-12-issue-8-2019, page no: 595-601, 
doi:19.18001.ajct.2019.v12i8.19.10166
            </li>
            <li>
                S. Saravanan, k. Manikandan, M.Vairavel, N. Sundaramoorthy , wear behaviour of 
groundnut shell powder and betel fiber reinforced pla composites , Jac : A Journal Of 
Composition Theory, vol-12-issue-9-2019-1, page no : 2255-
2264,doi:19.18001.ajct.2019.v12i9.19.10547
            </li>
            <li>
                M.Vairavel, N.Sundaramoorthy, S.Saravanan, K.Manikandan, finite element analysis 
of lemon /banana peel frc material of poly lactic acid , Jac : A Journal Of 
Composition Theory, vol-12-issue-10-2019, page no : 569-
576,doi:19.18001.ajct.2019.v12i10.19.10761
            </li>
            <li>
                M.Dinesh Kumar, S.Kavitha, M.Vairavel, Vinothkumar, numerical simulation 
analysis of automobile hybrid coil spring suspension system analysis in ansys, Jac : A 
Journal Of Composition Theory, vol-12-issue-10-2019 , page no : 577-
593,doi:19.18001.ajct 2019.v12i10.19.10762
            </li>
            <li>
                M.Vairavel, N.Sundaramoorthy, S.Saravanan, K.Manikandan , Experimental 
Analysis Of Betel Nut Fiber Reinforced Pla Composite Materials , Jac : A 
Journal Of Composition Theory, Vol-12-Issue-10-2019, Page No : 594-599, 
Doi:19.18001.Ajct 2019.V12i10.19.10763
            </li>
            <li>
                N.Sundaramoorthy, S.Saravanan, K.Manikandan, M.Vairavel -Fea Of Radiator Fins To 
Increase The Conduction Efficiency Of Radiator By Using Al Alloy Grade 1101 Series, 
Titanium And Copper , Science, Technology and Development , Volume VIII Issue VI 
JUNE 2019, VOL-8-ISSUE-6-2019, ISSN : 0950-0707, Page No: 75-81, 
DOI:16.10089.ISTJ.2018.V7I3.285311.2688
            </li>
            <li>
                N.Sundaramoorthy, S.Saravanan, K.Manikandan, M.Vairavel, The 
Optimization Analysis Of Emission, Reduction, Validation Of Catalytic
Converter Used In Cfd, Science, Technology and Development, VOL-8-ISSUE-7-
2019, ISSN : 0950-0707, Page No : 39-43,
DOI:19.18001.STD.2019.V8I7.19.28109
            </li>
            <li>
                M.Dinesh Kumar, S.Kavitha, M.Vairavel, Vinothkumar , simulation analysis of rg 
velocity at gas diffusion layer velocity in a multi pass serpentine flow field pem fuel 
cell under different cell potentials using automobile vehicles , science, technology and 
development , issn : 0950-0707, page no: 603-611,
Doi:19.18001.std.2019.v8i10.19.32533
            </li>
            <li>
                S. Saravanan, k. Manikandan, M.Vairavel, N. Sundaramoorthy, development and 
analysis of hybrid pla composite from animal fiber and betel nut fiber, science, technology 
and development , vol-8-issue-10-2019, page no: 594-598, 
Doi:19.18001.std.2019.v8i10.19.32532
            </li>
            <li>
                S.Saravanan, Vairavel.M, Sachin S Raj, C.Thiruvasagam, " Design And Development -
Aero Space Navigation System Assembly Used Pro-E", Universal Review, Vol 7 (11). 
2018.
            </li>
            <li>
                Saravanan, Vairavel.M, Sachin S Raj, C.Thiruvasagam, "Development of Aluminium 
Metal Matrix Composite for Present Automobile Components", Universal Review, Vol
7(7). 2018.
            </li>
            <li>
                Sachin S Raj Thiruvasagam C, S Saravanan, Vairavel M, "A Heat Transfer 
Enhancement Analysis of Micro Flow Chennal – Review", International Journal of 
Management, Technology And Engineering, Vol 8 (7). 2018.
            </li>
            <li>
                Sachin S Raj, Vairavel .M C.Thiruvasagam , S.Saravanan, "Art Of Review on 
Advance Acoustic Control System Process of Automotive Muffler", International 
Journal of Scientific Research and Review, Vol 7 (7). 2018.
            </li>
            <li>
                Sachin S Raj Thiruvasagam C, S Saravanan, Vairavel M, "CFD Investigation on 
the Aerodynamic Characteristics Analysis of A Nano -Sized Windturbine 
Applyed Comsol", International Journal of Management, Technology and 
Engineering, Vol 8 (11). 2018.
            </li>
            <li>
                S Saravanan M Vairavel, Sachin S Raj, C Thiruvasagam, " Computational Fluid 
Dynamic Acoustic Flow Analysis [Muffler]", Journal of Applied Science and 
Computations, Vol 5 (07). 2018.
            </li>
            <li>
                C.Thiruvasagam S.Saravanan, Vairavel.M, Sachin S Raj. "Computational Fluid
Dynamic Analysis Of Shell And Tube Heat Exchanger Influence Sugarcane Boiler", 
Universal Review, Vol 7 (9). 2018.
            </li>
            <li>
                Sachin S Raj, Vairavel .M C.Thiruvasagam , S.Saravanan, "Design and Stress And 
Deformation Analysis of A Suspension Coil Spring For Light Motor Vehicle", 
International Journal of Scientific Research and Review, Vol 7 (9). 2018.
            </li>
            <li>
                S Saravanan M Vairavel, Sachin S Raj, C Thiruvasagam, "Design Enhancement with 
Finite Element Analysis of Brake Disc", Journal of Applied Science and Computations. 
2018.
            </li>
            <li>
                C.Thiruvasagam S.Saravanan, Vairavel.M, Sachin S Raj, " Experimental Investigation 
And Enhancement of Welding Parameters on Arc Welding Process In Aisi316 By
Using Taguchi Technique And Comsol", Universal Review, Vol 7 (8). 2018.
            </li>
            <li>
                Sachin S Raj, Vairavel .M C.Thiruvasagam , S.Saravanan, "Finite Element Analysis 
of Aluminium-Flyash- Alumina Composite Applied In Piston Rings", International 
Journal of Scientific Research and Review, Vol 7 (11). 2018.
            </li>
            <li>
                Sachin S Raj Thiruvasagam C, S Saravanan, Vairavel M. "Finite Element Analysis 
of Biomechanical Stress Analysis of Human Femur Bone", International Journal of 
Management, Technology and Engineering, Vol 8 (8). 2018.
            </li>
            <li>
                Sachin S Raj Thiruvasagam C, S Saravanan, Vairavel M, "In Present Study of 
Mechanical Characteristics Analysis For Natural Fiber In Areca Nut Composite", 
International Journal of Management, Technology And Engine, Vol 8 (9). 2018.
            </li>
            <li>
                . M Vairavel, Sachin S Raj, C Thiruvasagam, S Saravanan., "Performance Based
on Computational Fluid Dynamic Spray Characteristic Analysis of Diesel Injector", 
Journal of Applied Science and Computations, 2018.
            </li>
            <li>
                S.Saravanan, Vairavel.M, Sachin S Raj, C.Thiruvasagam, "Prediction of Process 
Parameters In Machining of Aluminium Alloy 5083 Using Central Composite Design and 
Genetic Algorithm", Universal Review, Vol 7 (10), 2018.
            </li>
            <li>
                S Saravanan M Vairavel, Sachin S Raj, C Thiruvasagam, "Review -Analysis of Biodiesel 
Using Pongamia Oil With Nano Additives"Journal of Applied Science and Computations, 
2018.
            </li>
            <li>
                S.Saravanan Sachin S Raj, Vairavel .M C.Thiruvasagam, "Transient Flow Analysis of 
Engine for Power Flow Engine Cooling System", International Journal of Scientific 
Research and Review, V0l 7 (8), 2018.
            </li>
            <li>
                Thiruvasagam C, S Saravanan, Vairavel M, Sachin S Raj, “A Study - Behavior of Modeling 
And Analysis of Composite Mono Leaf Spring (Gfrp) Applied FEA”, International Journal 
of Management, Technology And Engineering, 8(10), 2018, pp 3019-3032
            </li>
            <li>
                S Saravanan M Vairavel, Sachin S Raj, C Thiruvasagam, "Performance Imprevement - Pem 
Fuel Cell With In Serpentine Flow Chennal" Journal of Applied Science and Computations, 
2018
            </li>
            <li>
                Sachin S Raj, Vairavel.M, C.Thiruvasagam , S.Saravanan, “Mechanical Behaviour 
Analysis of Conventional and Diametric Type Brake Disk”, International Journal of 
Scientific Research and Review, 7(10),2018, pp 853-876
            </li>
            <li>
                Sachin S Raj, M.Vairavel, G.Mohan kumar, D.Sathish kumar, C.Sreehari, S.Sathish 
kumar, N.Vijay, “Impact and cutting force measurement on PLA based bio composite 
material”, Volume 9, Issue 2, 2019, 5257-5263, ISSN no : 2249-7455
            </li>
            <li>
                Sachin S Raj, M.Vairavel, T.Dharaniesh, P.Gunasekar, N.Gopi, P.Gokulaprasanth, “Design 
and fabrication of multipurpose table rack shelf”, International journal of management, 
technology and engineering”, Volume 9, Issue 2, 2019, 5257-5263, ISSN no : 2249-7455
            </li>
            <li>
                Sachin S Raj, M.Vairavel, K.Krishnakumar, S.Dineshraja, Dinesh Ezhil Saravanan, 
S.Gobinath, “Mechanical property analysis of PLA/Areca fruit fiber bio composite 
material”, Universal review, Volume 8, Issue 2, 2019, 449-455, ISSN no : 2277-2723
            </li>
            <li>
                . Sachin S Raj, M.Vairavel, B.Karthick Raja, C.Bharathiraja, M.Boopalan, V.Jegan, 
“Mechanical property analysis of PLA/Areca nut powder based bio composite material”, 
Universal Review, Volume 8 Issue 2, 2019, 442-448, ISSN no : 2277-2723.
            </li>
            <li>
                T.Krishnamoorthi, R.Girimurugan, M.Vairavel, Numerical Analysis of Reactant Gases 
velocity at Gas Diffusion Layer Velocity in a Six Pass Serpentine Flow Field Proton 
Exchange Membrane ,International Journal of Management, Technology And Engineering
, Volume IX, Issue VIII, AUGUST/2019, Page No: 215-225.
            </li>
            <li>
                Pon.Maheskumar, R.Girimurugan, M.Vairavel, Performance Analysis of an Electro Static 
Precipitator in 210 MWThermal Power Station , International Journal of Management, 
Technology And Engineering, Volume IX, Issue VI, JUNE/2019, Page No: 3878-3871
            </li>
        </ol>
      </div>
      <div className="journal-card">
        <h2>SCOPUS JOURNAL</h2>
        <ol>
            <li>
                Madeshwaren, Vairavel, et al. "Solar still desalination techniques for the minimization of 
operational time and cost: a review." GLOBAL NEST JOURNAL 26.1 (2024). 
https://doi.org/10.30955/gnj.005382
            </li>
            <li>
                Anbuchezian, A., and M. Vairavel. "Steel Fibre Impacts On Mechanical Performance 
And Toughness Of Steel Fibre Reinforced High Strength Concrete After Normal And 
Hygrothermal Curing (SFRHSC)." NeuroQuantology 20.5 (2022): 1135.
            </li>
            <li>
                Vijayakumar, S., S. Nithiyanandam, and M. Vairavel. "Absolute Eco-Friendly Sustainable 
Fuel Production From Waste Cooking Oil Bull Bone Catalyst And Optimisation Of 
Emission Fuel Contents Operating Parameters." Journal Of Environmental Protection And 
Ecology 22.2 (2021): 760-768.
            </li>
            <li>
                Chacko, S., Kurian, J., Ravichandran, C., Vairavel, S. M., & Kumar, K. (2021). “An 
assessment of water yield ecosystem services in Periyar Tiger Reserve, Southern Western 
Ghats of India”. Geology, Ecology, and Landscapes, 5(1), 32-39.
https://doi.org/10.1007/978-981-15-8319-3_62
            </li>
            <li>
                Anbuchezian, A., and M. Vairavel. "A Novel Study on the Characteristics of Banyan Prop 
Root Fiber Reinforced Polymer Concrete Using Quarry Dust as Fine Aggregate." Design 
Engineering (2021): 9514-9534.
            </li>
            <li>
                Anbuchezian, A., and M. Vairavel. "Experimental and Numerical Investigations on Cold 
Formed Castellated Beams." Design Engineering (2021): 9535-9547.
            </li>
            <li>
                Vairavel, M., and R. Pugazhenthi. "Implementation of Computational Fluid Dynamics 
on Dissimilar Alloys for Friction Stir Welding Process." Design Engineering (2021):
6578-6588.
            </li>
            <li>
                Vairavel, M., and R. Pugazhenthi. "Implementation of Computational Fluid Dynamics 
on Dissimilar Alloys for Friction Stir Welding Process." Design Engineering (2021):
6578-6588
            </li>
            <li>
                Kavitha, S., R. Saravanan, and M. Vairavel. "Energy Efficient Diffuser Design For 
Dawt." Turkish Online Journal of Qualitative Inquiry 12.7 (2021).
            </li>
            <li>
                Mohanasundram, S.; Mohan, R.; Manivannan, R.; Vairavel, M. “Analysis on phase 
change material applied in solar desalination system”, International Journal of 
Mechanical and Production Engineering Research and Development, volume 10,
(2020).pp 39-48.
            </li>
            <li>
                Rahaman, GTPM Abdul, et al. "Effect of eggshell particles addition on mechanical 
properties of jute fiber rein-forced epoxy resin matrix bio-composites–an experimental 
study." Journal of critical reviews 7.04 (2020): 2726-2734.
            </li>
            <li>
                Vinothkumar, S.; Senthil Kumar, P. Vairavel, M “Effects of mechanical characterization 
analysis of banana fiber reinforced polymer composites”, International Journal of 
Mechanical and Production Engineering Research and Development, volume 10, 
(2020).pp49-60.
            </li>
            <li>
                Girimurugan, R., Vairavel, M., Shanjai, S. D., Manikandan, S., Manikkumar, R., & 
Manojkumar, R. “Experimental impact on mechanical characteristics of banana fiber 
reinforced, groundnut shell powder filled epoxy resin matrix bio composites”.
International Journal of Innovative Technology and Exploring Engineering, 9(05), 
(2020). 2279-2282.
            </li>
            <li>
                Saravanan, S., Saravanan, M., Jeyasimman, D., Vidhya, S., & Vairavel, M, “Experimental 
Prediction of Spring back in U Bending Profile Process Modeling using Artificial Neural 
Network”. International Journal of Innovative Technology and Exploring 
Engineering, 9(5), 110-115. (2020).
            </li>
            <li>
                Senniangiri, N., Girimurugan, R., Vairavel, M., Boopathiraja, C., Gnanaprakash, A., & 
Gokulakannan, S. “Exploring the mechanical properties of the polyjet printed verowhite 
specimens”. Journal of critical reviews, 7(10). (2020).
            </li>
            <li>
                M Vairavel, R Pugazhenthi, S Kavitha, K Ganesan, "Review of hibrid tool testing and 
measurment for friction stir welding", European Journal of Molecular & Clinical Medicine, 
2020.
            </li>
            <li>
                S Saravanan, M Saravanan, D Jeyasimman, S Vidhya, M Vairavel, "Art of Single Step 
Analytical Analysis for Springback Formation in “U” Bending Forming Process", 
International Journal of Innovative Technology and Exploring Engineering (IJITEE), 
Vol 9(5), 2020.
            </li>
            <li>
                K. Adithya, R. Girimurugan; M. Vairavel; M. Jawahar; K. Surya; M. Tamilselvan; P. 
Thiyagarajan, (2020). “Structural and Thermal Research of Steam Turbine Blades by Finite 
Element Method” International Journal of Innovative Technology and Exploring 
Engineering, ISSN: 2278-3075 .https://doi.org/10.35940/ijitee.e2495.039520
            </li>
            <li>
                Vairavel, M., et al. "Empirical performance analysis of VCR engine fuelled with karanja 
oil and various additives using ANOVA technique." International Journal of Ambient 
Energy 41.4 (2020): 369-373. https://doi.org/10.1080/01430750.2018.1443506
            </li>
            <li>
                K Manikandan, M Vairavel, N Sundaramoorthy, S Saravanan, "An Experimental And 
Dynamic Analysis Of Nano Wind Turbine", A Journal Of Composition Theory, Vol 12 
(7), 2019.
            </li>
            <li>
                Chacko, S., Ravichandran, C., Vairavel, S. M., & Mathew, J, "Employing measurers of 
spatial distribution of carbon storage in Periyar Tiger Reserve, Southern Western Ghats, 
India." Journal of Geovisualization and Spatial Analysis 3(1): 201.1. 
https://doi.org/10.1007/s41651-018-0024-8
            </li>
            <li>
                Kumar, M. Dinesh, SK Vinoth Kumar, and M. Vairavel. "Numerical simulation 
analysis of automobile hybrid coil spring suspension system analysis in ansys." A
Journal Of Composition Theory 12.10 (2019): 577-593
            </li>
            <li>
                Dhinakaran, R.; Muraliraja, R.; Karthigayan, K.; Shai Sundaram, V.S.; Vairavel 
(2019), “Optimization for better surface finish on aluminium 6061 alloy using taguchi 
technique in CNC lathe machine” International Journal of Mechanical and Production 
Engineering Research and Development,
            </li>
            <li>
                Raj, S. S., Kannan, T. K., Babu, M., & Vairavel, M. “Processing and testing parameters of 
PLA reinforced with natural plant fiber composite materials–A brief review”. International 
Journal of Mechanical and Production Engineering Research and Development, 9(2), 933-
940. (2019).
            </li>
            <li>
                K Manikandan, M Vairavel, N Sundaramoorthy, S Saravanan, "Structural Analysis Of 
Small Power Consumption Of Micro Wind Turbine By Various Optimized Materials", 
A Journal Of Composition Theory, Vol 12(8), 2019.
            </li>
            <li>
                Arulmozhivarman, J.; Radhika, N.; Mohanraj, T.; Vairavel, M, “The effect of biocutting fluids on surface roughness during end milling of A359 aluminium alloy”, 
International Journal of Mechanical and Production Engineering Research and 
Development, volume 9,pp 987-996. 2019.
            </li>
            <li>
                M Vairavel, N Sundaramoorthy, S Saravanan, K Manikandan, "Transient Analysis Of 
Solar Flat Plate Collector Applied In Computational Fluid Dynamics", Science, 
Technology and Development, Vol 8 (8). 2019.
            </li>
            <li>
                Vivek, P., Saravanan, R., Chandrasekaran, M., Pugazhenthi, R., Vairavel. M, " A criticalmachine based heuristic for HFS batch scheduling", International Journal of Mechanical 
Engineering and Technology, Vol 9 (8). 2018.
            </li>
            <li>
                M. Vairavel T. Vinod Kumar , M.Chandrasekaran , P. Vivek, "Evaluation of Tensile and 
Thermal Behavior Analysis of Nano Carbon Fiber Reinforced Polymer Composite" 
International Journal of Engineering & Technology, 2018.
            </li>
            <li>
                D. Jeyasimman and m.vairavel S. Saravanan, M. Saravanan, " Review – Methods And 
Measurements Of Springback Evaluation", International Journal of Mechanical 
Engineering & Technology (IJMET), Vol 9 (5), 2018.
            </li>
            <li>
                Muthukumar, M., Karthikeyan, P., Vairavel, M., Loganathan, C., Praveenkumar, S., & 
Kumar, A. S. "Numerical studies on PEM fuel cell with different landing to channel width 
of flow channel." Procedia Engineering 97 (2014): 1534-1542.
            </li>
            <li>
                M Muthukumar, P Karthikeyan, V Lakshminarayanan, AP Kumar, M Vairavel, R 
Girimurugan, "Performance studies on pem fuel cell with 2, 3 and 4 pass serpentine flow 
field designs", Applied Mechanics & Materials, 2014.
            </li>
            <li>
                Kavitha, S., M. Vairavel, and R. Saravanan. "Experimental Investigation For Slimming 
Down The Acoustic Level In Commercial Aircraft’s Jet." Design Engineering (2021): 
2931-2941.
            </li>
        </ol>
      </div>
    </section>
  );
}

export default Journal;