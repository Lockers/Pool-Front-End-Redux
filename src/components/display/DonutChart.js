import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector } from 'recharts';

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
        fill, payload, percent, value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    
    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={'green'}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={'red'}
            />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor='middle' fill="#333">{`Matches ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor='middle' fill="#999">
                {`( ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};


export default class Example extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        };
    }
    onPieEnter = (data, index) => {
        this.setState({
            activeIndex: index,
        });
    };
    
    render() {
        return (
            <PieChart width={380} height={280}>
                <Pie
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    data={this.props.stats}
                    cx={150}
                    cy={100}
                    innerRadius={60}
                    outerRadius={80}
                    fill={'blue'}
                    dataKey="value"
                    onMouseEnter={this.onPieEnter}
                />
                </PieChart>
        );
    }
}
