"use client";

import { useEffect, useState } from "react";

const colors = [
	"#ffb56b",
	"#fdaf69",
	"#f89d63",
	"#f59761",
	"#ef865e",
	"#ec805d",
	"#e36e5c",
	"#df685c",
	"#d5585c",
	"#d1525c",
	"#c5415d",
	"#c03b5d",
	"#b22c5e",
	"#ac265e",
	"#9c155f",
	"#950f5f",
	"#830060",
	"#7c0060",
	"#680060",
	"#60005f",
	"#48005f",
	"#3d005e",
];

export function FireTrailCursor() {
	const [coords, setCoords] = useState({ x: 0, y: 0 });
	const [circles, setCircles] = useState([]);

	useEffect(() => {
		const circles = document.querySelectorAll(".circle");
		setCircles(circles);

		circles.forEach((circle, index) => {
			circle.x = 0;
			circle.y = 0;
			circle.style.backgroundColor = colors[index % colors.length];
		});

		const handleMouseMove = (e) => {
			setCoords({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	useEffect(() => {
		let animationFrameId;

		function animateCircles() {
			let x = coords.x;
			let y = coords.y;

			circles.forEach((circle, index) => {
				circle.style.left = x - 12 + "px";
				circle.style.top = y - 12 + "px";

				circle.style.transform = `scale(${
					(circles.length - index) / circles.length
				})`;

				circle.x = x;
				circle.y = y;

				const nextCircle = circles[index + 1] || circles[0];
				x += (nextCircle.x - x) * 0.3;
				y += (nextCircle.y - y) * 0.3;
			});

			animationFrameId = requestAnimationFrame(animateCircles);
		}

		animateCircles();

		return () => {
			cancelAnimationFrame(animationFrameId);
		};
	}, [coords, circles]);

	useEffect(() => {
		const handleMouseEnter = () => {
			circles.forEach((circle) => {
				circle.classList.add("circle-hovered");
			});
		};

		const handleMouseLeave = () => {
			circles.forEach((circle) => {
				circle.classList.remove("circle-hovered");
			});
		};

		var buttons = document.getElementsByTagName("button");
		var anchors = document.getElementsByTagName("a");

		const elements = [...Array.from(buttons), ...Array.from(anchors)];

		elements.forEach(function (element) {
			element.addEventListener("mouseover", handleMouseEnter);
			element.addEventListener("mouseout", handleMouseLeave);
		});

		// Clean up event listeners
		return () => {
			elements.forEach(function (element) {
				element.removeEventListener("mouseover", handleMouseEnter);
				element.removeEventListener("mouseout", handleMouseLeave);
			});
		};
	}, [circles]);

	return (
		<>
			{Array.from({ length: 25 })
				.fill("")
				.map((_, index) => (
					<div key={index} className="circle" />
				))}
		</>
	);
}
