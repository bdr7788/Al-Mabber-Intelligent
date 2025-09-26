const sections = ['home', 'jobs', 'noor', 'register'];
function showSection(sectionId) {
    sections.forEach(id => {
        document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
    });
}

// بيانات الوظائف
const jobsData = [
    { title: "مهندس برمجيات", company: "الشركة الوطنية", location: "جدة" },
    { title: "محلل بيانات", company: "وزارة التقنية", location: "الرياض" },
    { title: "مصمم واجهات", company: "شركة الإبداع", location: "الدمام" }
];

function displayJobs() {
    const jobsList = document.getElementById('jobsList');
    jobsList.innerHTML = '';
    jobsData.forEach(job => {
        const div = document.createElement('div');
        div.className = 'job-item';
        div.innerHTML = `<strong>${job.title}</strong><br>${job.company} - ${job.location}`;
        jobsList.appendChild(div);
    });
}

// عرض الوظائف عند الدخول إلى قسم الوظائف
document.querySelector('nav a[onclick*="jobs"]').addEventListener('click', displayJobs);

// نموذج التسجيل
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`تم تسجيل ${name} بنجاح!`);
    this.reset();
    showSection('home');
});
