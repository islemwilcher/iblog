
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Bar } from 'react-chartjs-2'
import useStyles from './styles';
import { Paper } from '@material-ui/core';

const Chart = () => {
    const classes = useStyles()
    const { posts } = useSelector((state) => state.posts)
    
    const data = {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [
            {
                label: 'posts for 2022',
                data: [
                    Object.keys(posts).length,//.createdAt commpared with the month 
                ],
                backgroundColor: ['rgb(136, 165, 219)']
            }
        ]
    }
    const options ={
        title: {
            display: true,
            text: 'posts'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 9,
                        stepSize: 1,
                    }
                }
            ]
        }
    }

    return (
        <Paper>
            <Bar className={classes.chart} data={data} options={options} />
        </Paper>
        
    )
}

export default Chart
