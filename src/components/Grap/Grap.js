import React from 'react';
import styles from './Grap.module.css';
import DonutChart from 'react-donut-chart';

export default class Grap extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log('props: ',props.children.chart);
    this.data=props.children.chart;
    this.state = {
      data:props.children.chart,
      colors:props.children.colors,
      title:props.children.title
    };
  }

  
  render() {
    const { data: chartData,colors: chartColors, title: chartTitle } = this.state;

  return (
    <div>
      <div className={styles.title}>
        {chartTitle}
      </div>
      <div className={styles.divchat}>
    {<DonutChart
    data={chartData} 
    colors={chartColors} 
    height={330}
    width={420}
    //innerRadius="0.70"
    //outerRadius="0.90"
    className={styles.Data}
    />}
    </div>
    </div>
    
    
    );
  }
}

