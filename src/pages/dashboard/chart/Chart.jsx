
import { useSelector } from 'react-redux';

import { Bar } from 'react-chartjs-2'
import useStyles from './styles';
import { Paper } from '@material-ui/core';

const Chart = () => {
    const classes = useStyles()
    const { posts } = useSelector((state) => state.posts)
    let numberOfPosts = Object.keys(posts).length
    console.log(numberOfPosts)
    const data = {
        labels: ['2021', '2022', '2023', '2024', '2025'],
        datasets: [
            {
                label: 'posts for 2021',
                data: [
                    numberOfPosts
                ],
                backgroundColor: ['rgb(136, 165, 219)'],
            }
        ],
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
        <Paper className={classes.chart}>
            <Bar data={data} options={options} />
        </Paper>
        
    )
}

export default Chart
