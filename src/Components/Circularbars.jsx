import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const stats = [
    { label: "HTML", value: 95, color: "#f97316" },
    { label: "CSS", value: 90, color: "yellow" },
    { label: "TailwindCSS", value: 80, color: "#f97316"},
    { label: "BootStrap", value: 50, color: "yellow"},
    { label: "JavaScript", value: 65, color: "#f97316" },
    { label: "jQuery", value: 50, color: "yellow" },
    { label: "React JS", value: 45, color: "#f97316" },
    { label: "Node JS", value: 40, color: "yellow" },
    { label: "Express JS", value: 50, color: "#f97316" },
    { label: "Java", value: 40, color: "yellow" },
];

const Circularbars = () => {
    return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-20">
        {stats.map((stat, i) => (
        <div key={i} className="flex flex-col items-center">
            <div style={{ width: 130, height: 130 }}>
            <CircularProgressbar
                value={stat.value}
                text={`${stat.value}%`}
                styles={buildStyles({
                pathColor: stat.color,
                textColor: '#fff',
                trailColor: '#2d2d2d',
                })}
            />
            </div>
            <span className="mt-2 text-white font-medium">{stat.label}</span>
        </div>
        ))}
    </div>
);
};

export default Circularbars;
