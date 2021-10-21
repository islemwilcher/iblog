

import { useSelector } from 'react-redux';

import { Bar } from 'react-chartjs-2'
import useStyles from './styles';

const Chart = () => {
    const classes = useStyles();
    const {posts} = useSelector((state) => state.posts);

    const data = {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [
            {
                label: 'posts for 2022',
                data: posts.post,
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
        <Bar className={classes.chart} data={data} options={options} />
    )
}

export default Chart
