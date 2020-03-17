import React from 'react';
import styles from './Home.module.css';
import Grap from '../Grap/Grap';

const data ={"chart":[{label: 'Tablet',value: 60,},{label: 'Smartphone',value: 40,}],
            "title":"Revenue",
            "colors":['#32CD32','#006400'],
            "id":"0"
            };
const data2 ={"chart":[{label: 'Tablet',value: 20,},{label: 'Smartphone',value: 80,}],
            "title":"Impresions",
            "colors":['#42adf5','#080c5c'],
            "id":"1"
            };
const data3 ={"chart":[{label: 'Tablet',value: 30,},{label: 'Smartphone',value: 70,}],
            "title":"Visits",
            "colors":['#cfc91b','#bf380f'],
            "id":"2"
            };            

const listData=[data,data2,data3];

function Home (){
  return(<div className={styles.Home} data-testid="Home">
    <div className={styles.logo}></div>
    <div className={styles.TituloHome}>PRUEBA TÉCNICA FRONTEND 1</div>
    <p></p>
    <div className={styles.SubTituloHome}>Por Israel Hernandez</div>
    <p></p>
    <div>
    <table>
    <tr>
    {listData.map((dataChart)=><td key={dataChart.id}><Grap>{dataChart}</Grap></td>)} 
    </tr>
    </table>  
    </div>
    </div>
      
  )
}

export default Home;
