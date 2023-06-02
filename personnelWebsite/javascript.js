/**
 * Name: Xuemin Zhou
 * Date: Feb 25,2023
 * Section: CST 8285 section 311
 * This is the javasript.js page for my portfolio of web development work. 
-->
 */
// 获取页面元素
const searchInput = document.getElementById("search-input");
const levelFilter = document.getElementById("level-filter");
const levelSort = document.getElementById("level-sort");
const courseContainer = document.querySelector(".course-container");

// 获取所有课程元素
const courses = courseContainer.querySelectorAll(".course");

// 搜索功能
searchInput.addEventListener("input", function() {
const searchValue = searchInput.value.toLowerCase();
courses.forEach(course => {
const courseName = course.querySelector("h2").textContent.toLowerCase();
const courseCode = course.querySelector("p:nth-of-type(2)").textContent.toLowerCase();
if (courseName.includes(searchValue) || courseCode.includes(searchValue)) {
course.style.display = "block";
} else {
course.style.display = "none";
}
});
});

// 过滤功能
levelFilter.addEventListener("change", function() {
const selectedLevel = levelFilter.value;
courses.forEach(course => {
const courseLevel = course.dataset.level;
if (selectedLevel === "" || courseLevel === selectedLevel) {
course.style.display = "block";
} else {
course.style.display = "none";
}
});
});

// 排序功能
levelSort.addEventListener("change", function() {
const sortDirection = levelSort.value;
const sortedCourses = Array.from(courses).sort(function(a, b) {
const levelA = parseInt(a.dataset.level);
const levelB = parseInt(b.dataset.level);
if (sortDirection === "asc") {
return levelA - levelB;
} else {
return levelB - levelA;
}
});
sortedCourses.forEach(course => {
courseContainer.appendChild(course);
});
});

