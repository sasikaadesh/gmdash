// BubbleChart.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const data = [
  { name: 'Company A', marketCap: 20000, growthRate: 5 },
  { name: 'Company B', marketCap: 30000, growthRate: -3 },
  { name: 'Company C', marketCap: 15000, growthRate: 10 },
  { name: 'Company D', marketCap: 40000, growthRate: 0 },
  { name: 'Company E', marketCap: 25000, growthRate: 7 },
];

const BubbleChart = ({ height }) => {
  const svgRef = useRef();

  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;

    const svg = d3.select(svgRef.current)
      .attr('width', 600)
      .attr('height', height); // Set height dynamically

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const bubbles = g.selectAll('circle')
      .data(data)
      .join('circle')
      .attr('cx', (d, i) => (i + 1) * (width / (data.length + 1))) // Spacing out the bubbles
      .attr('cy', d => height - d.marketCap / 1000 - margin.top) // Adjust vertical position
      .attr('r', d => d.marketCap / 1000) // Radius based on market cap
      .attr('fill', d => (d.growthRate > 0 ? 'green' : 'red'))
      .attr('opacity', 0.7)
      .on('mouseover', function (event, d) {
        d3.select(this).attr('stroke', 'black').attr('stroke-width', 2);
      })
      .on('mouseout', function (d) {
        d3.select(this).attr('stroke', 'none');
      });

    // Add labels
    g.selectAll('text')
      .data(data)
      .join('text')
      .attr('x', (d, i) => (i + 1) * (width / (data.length + 1)))
      .attr('y', d => height - d.marketCap / 1000 - margin.top) // Adjust vertical position for labels
      .text(d => d.name)
      .attr('text-anchor', 'middle')
      .attr('fill', 'white')
      .attr('font-size', '12px');

  }, [data, height]); // Added height to dependency array

  return <svg ref={svgRef}></svg>;
};

export default BubbleChart;
