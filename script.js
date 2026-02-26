// Sample Job Data
const jobsData = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        company: "TechCorp",
        location: "San Francisco, CA",
        salary: 120000,
        category: "IT",
        experience: "Senior",
        jobType: "Full-time",
        description: "We are looking for an experienced Frontend Developer to join our dynamic team. You'll work on cutting-edge web applications using modern technologies.",
        requirements: [
            "5+ years of experience in frontend development",
            "Proficiency in React, Vue, or Angular",
            "Strong understanding of web performance",
            "Experience with TypeScript is a plus"
        ],
        benefits: [
            "Competitive salary and equity",
            "Health, dental, and vision insurance",
            "Flexible work hours",
            "Remote work options"
        ],
        companyDesc: "TechCorp is a leading technology company specializing in innovative web solutions.",
        postedDate: "2024-01-15",
        logo: "TC"
    },
    {
        id: 2,
        title: "UI/UX Designer",
        company: "DesignHub",
        location: "New York, NY",
        salary: 85000,
        category: "Design",
        experience: "Mid-Level",
        jobType: "Full-time",
        description: "Join our creative team to design beautiful and intuitive user interfaces for our clients' products.",
        requirements: [
            "3+ years of UI/UX design experience",
            "Proficiency in Figma and Adobe XD",
            "Strong portfolio showcasing design work",
            "Understanding of user research"
        ],
        benefits: [
            "Creative workspace",
            "Learning and development budget",
            "Health insurance",
            "Paid time off"
        ],
        companyDesc: "DesignHub is a premium design agency working with Fortune 500 companies.",
        postedDate: "2024-01-14",
        logo: "DH"
    },
    {
        id: 3,
        title: "Digital Marketing Manager",
        company: "MarketPro",
        location: "Chicago, IL",
        salary: 75000,
        category: "Marketing",
        experience: "Mid-Level",
        jobType: "Full-time",
        description: "Lead our digital marketing initiatives and drive growth through various online channels.",
        requirements: [
            "4+ years in digital marketing",
            "Experience with SEO, SEM, and social media",
            "Data-driven approach",
            "Team management experience"
        ],
        benefits: [
            "Performance bonuses",
            "Marketing conference attendance",
            "Health benefits",
            "Flexible schedule"
        ],
        companyDesc: "MarketPro is a full-service digital marketing agency.",
        postedDate: "2024-01-13",
        logo: "MP"
    },
    {
        id: 4,
        title: "Junior Python Developer",
        company: "DataSoft",
        location: "Austin, TX",
        salary: 55000,
        category: "IT",
        experience: "Fresher",
        jobType: "Full-time",
        description: "Great opportunity for fresh graduates to start their career in software development.",
        requirements: [
            "Bachelor's degree in CS or related field",
            "Knowledge of Python basics",
            "Understanding of databases",
            "Eagerness to learn"
        ],
        benefits: [
            "Mentorship program",
            "Training budget",
            "Health insurance",
            "Career growth path"
        ],
        companyDesc: "DataSoft specializes in data-driven software solutions.",
        postedDate: "2024-01-12",
        logo: "DS"
    },
    {
        id: 5,
        title: "Financial Analyst",
        company: "FinanceFirst",
        location: "Boston, MA",
        salary: 70000,
        category: "Finance",
        experience: "Mid-Level",
        jobType: "Full-time",
        description: "Analyze financial data and provide insights to drive business decisions.",
        requirements: [
            "3+ years financial analysis experience",
            "Advanced Excel skills",
            "CFA preferred",
            "Strong analytical skills"
        ],
        benefits: [
            "Competitive bonus",
            "Stock options",
            "Health benefits",
            "401(k) matching"
        ],
        companyDesc: "FinanceFirst is a leading investment management firm.",
        postedDate: "2024-01-11",
        logo: "FF"
    },
    {
        id: 6,
        title: "HR Coordinator",
        company: "PeoplePlus",
        location: "Seattle, WA",
        salary: 45000,
        category: "HR",
        experience: "Fresher",
        jobType: "Full-time",
        description: "Support our HR team in recruitment and employee engagement activities.",
        requirements: [
            "HR degree or certification",
            "Good communication skills",
            "Organized and detail-oriented",
            "HRIS experience preferred"
        ],
        benefits: [
            "HR certification support",
            "Health insurance",
            "Paid vacation",
            "Work-life balance"
        ],
        companyDesc: "PeoplePlus provides HR solutions to mid-sized companies.",
        postedDate: "2024-01-10",
        logo: "PP"
    },
    {
        id: 7,
        title: "Backend Engineer",
        company: "CloudNine",
        location: "Remote",
        salary: 110000,
        category: "IT",
        experience: "Senior",
        jobType: "Full-time",
        description: "Build scalable backend services and APIs for our cloud platform.",
        requirements: [
            "5+ years backend development",
            "Expert in Node.js or Python",
            "Cloud platform experience (AWS/GCP)",
            "Microservices architecture knowledge"
        ],
        benefits: [
            "Fully remote",
            "Stock options",
            "Unlimited PTO",
            "Home office budget"
        ],
        companyDesc: "CloudNine provides cloud infrastructure solutions.",
        postedDate: "2024-01-09",
        logo: "CN"
    },
    {
        id: 8,
        title: "Content Writer",
        company: "WriteAway",
        location: "Remote",
        salary: 35000,
        category: "Marketing",
        experience: "Fresher",
        jobType: "Part-time",
        description: "Create engaging content for blogs, social media, and marketing materials.",
        requirements: [
            "Excellent writing skills",
            "Basic SEO knowledge",
            "Creative thinking",
            "Portfolio of writing samples"
        ],
        benefits: [
            "Flexible hours",
            "Remote work",
            "Creative freedom",
            "Performance bonuses"
        ],
        companyDesc: "WriteAway is a content marketing agency.",
        postedDate: "2024-01-08",
        logo: "WA"
    },
    {
        id: 9,
        title: "Graphic Designer",
        company: "CreativeMinds",
        location: "Los Angeles, CA",
        salary: 60000,
        category: "Design",
        experience: "Mid-Level",
        jobType: "Contract",
        description: "Design visual assets for marketing campaigns and brand materials.",
        requirements: [
            "3+ years graphic design experience",
            "Proficiency in Adobe Creative Suite",
            "Strong typography skills",
            "Print design experience"
        ],
        benefits: [
            "Creative projects",
            "Flexible schedule",
            "Portfolio building",
            "Networking events"
        ],
        companyDesc: "CreativeMinds is a full-service creative agency.",
        postedDate: "2024-01-07",
        logo: "CM"
    },
    {
        id: 10,
        title: "Sales Executive",
        company: "SalesForce Pro",
        location: "Miami, FL",
        salary: 50000,
        category: "Sales",
        experience: "Fresher",
        jobType: "Full-time",
        description: "Drive sales growth through new client acquisition and relationship building.",
        requirements: [
            "Excellent communication skills",
            "Sales experience preferred",
            "Goal-oriented",
            "Team player"
        ],
        benefits: [
            "Commission structure",
            "Sales training",
            "Career advancement",
            "Travel opportunities"
        ],
        companyDesc: "SalesForce Pro provides B2B sales solutions.",
        postedDate: "2024-01-06",
        logo: "SP"
    },
    {
        id: 11,
        title: "DevOps Engineer",
        company: "InfraTech",
        location: "Denver, CO",
        salary: 115000,
        category: "IT",
        experience: "Senior",
        jobType: "Full-time",
        description: "Manage CI/CD pipelines and cloud infrastructure for our products.",
        requirements: [
            "4+ years DevOps experience",
            "Kubernetes and Docker expertise",
            "Infrastructure as Code (Terraform)",
            "Cloud certifications preferred"
        ],
        benefits: [
            "Competitive salary",
            "Certification support",
            "Health benefits",
            "Stock options"
        ],
        companyDesc: "InfraTech provides infrastructure and DevOps solutions.",
        postedDate: "2024-01-05",
        logo: "IT"
    },
    {
        id: 12,
        title: "Marketing Intern",
        company: "BrandBuilders",
        location: "New York, NY",
        salary: 25000,
        category: "Marketing",
        experience: "Fresher",
        jobType: "Internship",
        description: "Gain hands-on experience in digital marketing and brand management.",
        requirements: [
            "Marketing or business student",
            "Social media savvy",
            "Creative mindset",
            "Strong written skills"
        ],
        benefits: [
            "Learning opportunities",
            "Mentorship",
            "Flexible hours",
            "College credit"
        ],
        companyDesc: "BrandBuilders is a boutique marketing agency.",
        postedDate: "2024-01-04",
        logo: "BB"
    },
    {
        id: 13,
        title: "Mobile App Developer",
        company: "AppWorks",
        location: "San Jose, CA",
        salary: 95000,
        category: "IT",
        experience: "Mid-Level",
        jobType: "Full-time",
        description: "Develop cross-platform mobile applications for iOS and Android.",
        requirements: [
            "3+ years mobile development",
            "React Native or Flutter expertise",
            "App store publishing experience",
            "UI/UX knowledge"
        ],
        benefits: [
            "Latest tech equipment",
            "Hackathons",
            "Health insurance",
            "Conference attendance"
        ],
        companyDesc: "AppWorks creates innovative mobile applications.",
        postedDate: "2024-01-03",
        logo: "AW"
    },
    {
        id: 14,
        title: "Data Scientist",
        company: "AIInsights",
        location: "Seattle, WA",
        salary: 130000,
        category: "IT",
        experience: "Senior",
        jobType: "Full-time",
        description: "Build machine learning models and derive insights from complex datasets.",
        requirements: [
            "5+ years data science experience",
            "Python and ML frameworks",
            "Statistics and mathematics background",
            "PhD preferred"
        ],
        benefits: [
            "Research budget",
            "Publication support",
            "Stock options",
            "Relocation assistance"
        ],
        companyDesc: "AIInsights applies AI to solve real-world problems.",
        postedDate: "2024-01-02",
        logo: "AI"
    },
    {
        id: 15,
        title: "Product Designer",
        company: "InnovateLab",
        location: "Portland, OR",
        salary: 90000,
        category: "Design",
        experience: "Mid-Level",
        jobType: "Full-time",
        description: "Design end-to-end product experiences from concept to launch.",
        requirements: [
            "4+ years product design",
            "Strong UX research skills",
            "Prototyping expertise",
            "Design systems experience"
        ],
        benefits: [
            "Design conferences",
            "Prototyping tools",
            "Health benefits",
            "401(k) matching"
        ],
        companyDesc: "InnovateLab builds user-centered digital products.",
        postedDate: "2024-01-01",
        logo: "IL"
    },
    {
        id: 16,
        title: "Accountant",
        company: "FinServe",
        location: "Chicago, IL",
        salary: 55000,
        category: "Finance",
        experience: "Mid-Level",
        jobType: "Full-time",
        description: "Handle financial accounting and reporting for our clients.",
        requirements: [
            "CPA preferred",
            "3+ years accounting experience",
            "QuickBooks expertise",
            "Attention to detail"
        ],
        benefits: [
            "CPA sponsorship",
            "Health insurance",
            "Retirement plan",
            "Paid time off"
        ],
        companyDesc: "FinServe provides accounting and financial services.",
        postedDate: "2023-12-28",
        logo: "FS"
    },
    {
        id: 17,
        title: "Technical Recruiter",
        company: "TalentHub",
        location: "Remote",
        salary: 60000,
        category: "HR",
        experience: "Mid-Level",
        jobType: "Full-time",
        description: "Source and recruit top technical talent for our clients.",
        requirements: [
            "3+ years technical recruiting",
            "LinkedIn Recruiter expertise",
            "Networking skills",
            "Target-driven"
        ],
        benefits: [
            "Remote work",
            "Commission bonus",
            "Health benefits",
            "Unlimited PTO"
        ],
        companyDesc: "TalentHub connects companies with tech talent.",
        postedDate: "2023-12-25",
        logo: "TH"
    },
    {
        id: 18,
        title: "Business Development Manager",
        company: "GrowthLabs",
        location: "Austin, TX",
        salary: 85000,
        category: "Sales",
        experience: "Senior",
        jobType: "Full-time",
        description: "Lead business development initiatives and expand our client base.",
        requirements: [
            "5+ years B2B sales",
            "Proven track record",
            "Negotiation skills",
            "CRM experience"
        ],
        benefits: [
            "High commission",
            "Executive team",
            "Stock options",
            "Travel allowance"
        ],
        companyDesc: "GrowthLabs helps startups scale their business.",
        postedDate: "2023-12-22",
        logo: "GL"
    },
    {
        id: 19,
        title: "Video Editor",
        company: "MediaCraft",
        location: "Los Angeles, CA",
        salary: 50000,
        category: "Design",
        experience: "Fresher",
        jobType: "Part-time",
        description: "Edit videos for marketing campaigns and social media content.",
        requirements: [
            "Video editing experience",
            "Premiere Pro or Final Cut",
            "Creative mindset",
            "Fast turnaround"
        ],
        benefits: [
            "Creative projects",
            "Flexible hours",
            "Portfolio building",
            "Equipment provided"
        ],
        companyDesc: "MediaCraft produces video content for brands.",
        postedDate: "2023-12-20",
        logo: "MC"
    },
    {
        id: 20,
        title: "IT Support Specialist",
        company: "TechHelp",
        location: "Phoenix, AZ",
        salary: 40000,
        category: "IT",
        experience: "Fresher",
        jobType: "Full-time",
        description: "Provide technical support and troubleshooting for employees.",
        requirements: [
            "IT support experience",
            "Help desk skills",
            "Hardware and software knowledge",
            "Customer service oriented"
        ],
        benefits: [
            "Training programs",
            "Certification support",
            "Health insurance",
            "Career growth"
        ],
        companyDesc: "TechHelp provides IT support services.",
        postedDate: "2023-12-18",
        logo: "TH"
    }
];

// State
let filteredJobs = [...jobsData];
let savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
let currentPage = 1;
const jobsPerPage = 6;

// DOM Elements
const jobCardsContainer = document.getElementById('jobCards');
const paginationContainer = document.getElementById('pagination');
const resultsCount = document.getElementById('resultsCount');
const searchInput = document.getElementById('searchInput');
const locationInput = document.getElementById('locationInput');
const searchBtn = document.getElementById('searchBtn');
const sortSelect = document.getElementById('sortSelect');
const clearFiltersBtn = document.getElementById('clearFilters');
const modal = document.getElementById('jobModal');
const closeModal = document.getElementById('closeModal');
const closeBtn = document.getElementById('closeBtn');
const saveJobBtn = document.getElementById('saveJobBtn');
const applyBtn = document.getElementById('applyBtn');
const savedJobsSidebar = document.getElementById('savedJobsSidebar');
const savedJobsToggle = document.getElementById('savedJobsToggle');
const closeSavedSidebar = document.getElementById('closeSavedSidebar');
const savedJobsList = document.getElementById('savedJobsList');
const savedCount = document.getElementById('savedCount');

// Filter checkboxes
const categoryCheckboxes = document.querySelectorAll('input[name="category"]');
const experienceCheckboxes = document.querySelectorAll('input[name="experience"]');
const jobTypeCheckboxes = document.querySelectorAll('input[name="jobType"]');
const salaryRadios = document.querySelectorAll('input[name="salary"]');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateFilterCounts();
    applyFilters();
    renderSavedJobs();
    updateSavedCount();
});

// Update filter counts
function updateFilterCounts() {
    const categories = ['IT', 'Marketing', 'Design', 'Sales', 'Finance', 'HR'];
    const experiences = ['Fresher', 'Mid-Level', 'Senior'];
    const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];

    categories.forEach(cat => {
        const count = jobsData.filter(job => job.category === cat).length;
        const countElement = document.getElementById(`count-${cat}`);
        if (countElement) countElement.textContent = count;
    });

    experiences.forEach(exp => {
        const count = jobsData.filter(job => job.experience === exp).length;
        const countElement = document.getElementById(`count-${exp}`);
        if (countElement) countElement.textContent = count;
    });

    jobTypes.forEach(type => {
        const count = jobsData.filter(job => job.jobType === type).length;
        const countElement = document.getElementById(`count-${type}`);
        if (countElement) countElement.textContent = count;
    });
}

// Apply filters
function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const locationTerm = locationInput.value.toLowerCase();

    // Get selected filters
    const selectedCategories = Array.from(categoryCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    const selectedExperiences = Array.from(experienceCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    const selectedJobTypes = Array.from(jobTypeCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    const selectedSalary = document.querySelector('input[name="salary"]:checked').value;

    // Filter jobs
    filteredJobs = jobsData.filter(job => {
        // Search filter
        const matchesSearch = job.title.toLowerCase().includes(searchTerm) ||
            job.company.toLowerCase().includes(searchTerm) ||
            job.description.toLowerCase().includes(searchTerm);

        // Location filter
        const matchesLocation = job.location.toLowerCase().includes(locationTerm);

        // Category filter
        const matchesCategory = selectedCategories.length === 0 ||
            selectedCategories.includes(job.category);

        // Experience filter
        const matchesExperience = selectedExperiences.length === 0 ||
            selectedExperiences.includes(job.experience);

        // Job type filter
        const matchesJobType = selectedJobTypes.length === 0 ||
            selectedJobTypes.includes(job.jobType);

        // Salary filter
        let matchesSalary = true;
        if (selectedSalary !== 'all') {
            if (selectedSalary === '0-30000') {
                matchesSalary = job.salary < 30000;
            } else if (selectedSalary === '30000-60000') {
                matchesSalary = job.salary >= 30000 && job.salary < 60000;
            } else if (selectedSalary === '60000-100000') {
                matchesSalary = job.salary >= 60000 && job.salary < 100000;
            } else if (selectedSalary === '100000+') {
                matchesSalary = job.salary >= 100000;
            }
        }

        return matchesSearch && matchesLocation && matchesCategory &&
            matchesExperience && matchesJobType && matchesSalary;
    });

    // Apply sorting
    sortJobs();

    // Reset to first page
    currentPage = 1;

    // Render
    renderJobs();
    renderPagination();
}

// Sort jobs
function sortJobs() {
    const sortValue = sortSelect.value;

    switch (sortValue) {
        case 'newest':
            filteredJobs.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
            break;
        case 'oldest':
            filteredJobs.sort((a, b) => new Date(a.postedDate) - new Date(b.postedDate));
            break;
        case 'salary-high':
            filteredJobs.sort((a, b) => b.salary - a.salary);
            break;
        case 'salary-low':
            filteredJobs.sort((a, b) => a.salary - b.salary);
            break;
    }
}

// Render jobs
function renderJobs() {
    const startIndex = (currentPage - 1) * jobsPerPage;
    const endIndex = startIndex + jobsPerPage;
    const jobsToShow = filteredJobs.slice(startIndex, endIndex);

    resultsCount.textContent = `Showing ${filteredJobs.length > 0 ? startIndex + 1 : 0}-${Math.min(endIndex, filteredJobs.length)} of ${filteredJobs.length} jobs`;

    if (jobsToShow.length === 0) {
        jobCardsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No jobs found</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `;
        return;
    }

    jobCardsContainer.innerHTML = jobsToShow.map(job => `
        <div class="job-card" data-job-id="${job.id}">
            <div class="job-card-header">
                <div class="company-info">
                    <div class="company-logo">${job.logo}</div>
                    <div class="job-title-company">
                        <h3 onclick="openJobModal(${job.id})">${job.title}</h3>
                        <p class="company-name"><i class="fas fa-building"></i> ${job.company}</p>
                    </div>
                </div>
                <button class="save-btn ${savedJobs.includes(job.id) ? 'saved' : ''}" onclick="toggleSaveJob(${job.id})">
                    <i class="${savedJobs.includes(job.id) ? 'fas' : 'far'} fa-bookmark"></i>
                </button>
            </div>
            <div class="job-card-body">
                <p class="job-description">${job.description}</p>
            </div>
            <div class="job-card-footer">
                <div class="job-tags">
                    <span class="job-tag"><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                    <span class="job-tag salary"><i class="fas fa-dollar-sign"></i> $${job.salary.toLocaleString()}</span>
                    <span class="job-tag experience"><i class="fas fa-chart-line"></i> ${job.experience}</span>
                    <span class="job-tag"><i class="fas fa-briefcase"></i> ${job.jobType}</span>
                    <span class="job-tag"><i class="fas fa-tag"></i> ${job.category}</span>
                </div>
                <div class="job-actions">
                    <button class="view-more-btn" onclick="openJobModal(${job.id})">View More</button>
                    <button class="apply-btn" onclick="applyJob(${job.id})">Apply Now</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Render pagination
function renderPagination() {
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }

    let paginationHTML = '';

    // Previous button
    paginationHTML += `
        <button ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
            <i class="fas fa-chevron-left"></i>
        </button>
    `;

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            paginationHTML += `
                <button class="${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
                    ${i}
                </button>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHTML += `<button disabled>...</button>`;
        }
    }

    // Next button
    paginationHTML += `
        <button ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
            <i class="fas fa-chevron-right"></i>
        </button>
    `;

    paginationContainer.innerHTML = paginationHTML;
}

// Change page
function changePage(page) {
    currentPage = page;
    renderJobs();
    renderPagination();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Open job modal
function openJobModal(jobId) {
    const job = jobsData.find(j => j.id === jobId);
    if (!job) return;

    document.getElementById('modalJobTitle').textContent = job.title;
    document.getElementById('modalCompanyName').textContent = job.company;
    document.getElementById('modalCompanyLogo').textContent = job.logo;
    document.getElementById('modalLocation').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${job.location}`;
    document.getElementById('modalSalary').innerHTML = `<i class="fas fa-dollar-sign"></i> $${job.salary.toLocaleString()}`;
    document.getElementById('modalExperience').innerHTML = `<i class="fas fa-chart-line"></i> ${job.experience}`;
    document.getElementById('modalJobType').innerHTML = `<i class="fas fa-clock"></i> ${job.jobType}`;
    document.getElementById('modalCategory').innerHTML = `<i class="fas fa-tag"></i> ${job.category}`;
    document.getElementById('modalDescription').textContent = job.description;
    document.getElementById('modalCompanyDesc').textContent = job.companyDesc;

    // Requirements
    const requirementsList = document.getElementById('modalRequirements');
    requirementsList.innerHTML = job.requirements.map(req => `<li>${req}</li>`).join('');

    // Benefits
    const benefitsList = document.getElementById('modalBenefits');
    benefitsList.innerHTML = job.benefits.map(benefit => `<li>${benefit}</li>`).join('');

    // Update save button
    const saveButton = document.getElementById('saveJobBtn');
    if (savedJobs.includes(job.id)) {
        saveButton.classList.add('saved');
        saveButton.innerHTML = '<i class="fas fa-bookmark"></i> Saved';
    } else {
        saveButton.classList.remove('saved');
        saveButton.innerHTML = '<i class="far fa-bookmark"></i> Save Job';
    }

    // Store current job ID
    saveJobBtn.dataset.jobId = job.id;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeJobModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Toggle save job
function toggleSaveJob(jobId) {
    const index = savedJobs.indexOf(jobId);
    if (index === -1) {
        savedJobs.push(jobId);
    } else {
        savedJobs.splice(index, 1);
    }

    localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
    renderJobs();
    renderSavedJobs();
    updateSavedCount();
}

// Save job from modal
function saveJobFromModal() {
    const jobId = parseInt(saveJobBtn.dataset.jobId);
    toggleSaveJob(jobId);

    const job = jobsData.find(j => j.id === jobId);
    if (savedJobs.includes(jobId)) {
        saveJobBtn.classList.add('saved');
        saveJobBtn.innerHTML = '<i class="fas fa-bookmark"></i> Saved';
    } else {
        saveJobBtn.classList.remove('saved');
        saveJobBtn.innerHTML = '<i class="far fa-bookmark"></i> Save Job';
    }
}

// Apply job
function applyJob(jobId) {
    const job = jobsData.find(j => j.id === jobId);
    if (job) {
        alert(`Applied to ${job.title} at ${job.company}!\n\nThis is a demo. In a real application, you would be redirected to the application form.`);
    }
}

// Render saved jobs
function renderSavedJobs() {
    if (savedJobs.length === 0) {
        savedJobsList.innerHTML = `
            <div class="no-saved-jobs">
                <i class="fas fa-bookmark"></i>
                <p>No saved jobs yet</p>
            </div>
        `;
        return;
    }

    const savedJobData = jobsData.filter(job => savedJobs.includes(job.id));
    savedJobsList.innerHTML = savedJobData.map(job => `
        <div class="saved-job-item">
            <h4>${job.title}</h4>
            <p>${job.company} - ${job.location}</p>
            <button class="remove-saved" onclick="toggleSaveJob(${job.id})">
                <i class="fas fa-trash"></i> Remove
            </button>
        </div>
    `).join('');
}

// Update saved count
function updateSavedCount() {
    savedCount.textContent = savedJobs.length;
}

// Clear filters
function clearFilters() {
    searchInput.value = '';
    locationInput.value = '';

    categoryCheckboxes.forEach(cb => cb.checked = false);
    experienceCheckboxes.forEach(cb => cb.checked = false);
    jobTypeCheckboxes.forEach(cb => cb.checked = false);
    salaryRadios.forEach(radio => {
        if (radio.value === 'all') radio.checked = true;
    });

    applyFilters();
}

// Event Listeners
searchBtn.addEventListener('click', applyFilters);
searchInput.addEventListener('input', debounce(applyFilters, 500));
locationInput.addEventListener('input', debounce(applyFilters, 500));
sortSelect.addEventListener('change', applyFilters);
clearFiltersBtn.addEventListener('click', clearFilters);

categoryCheckboxes.forEach(cb => cb.addEventListener('change', applyFilters));
experienceCheckboxes.forEach(cb => cb.addEventListener('change', applyFilters));
jobTypeCheckboxes.forEach(cb => cb.addEventListener('change', applyFilters));
salaryRadios.forEach(radio => radio.addEventListener('change', applyFilters));

closeModal.addEventListener('click', closeJobModal);
closeBtn.addEventListener('click', closeJobModal);
saveJobBtn.addEventListener('click', saveJobFromModal);
applyBtn.addEventListener('click', () => {
    const jobId = parseInt(saveJobBtn.dataset.jobId);
    applyJob(jobId);
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeJobModal();
    }
});

savedJobsToggle.addEventListener('click', () => {
    savedJobsSidebar.classList.add('show');
});

closeSavedSidebar.addEventListener('click', () => {
    savedJobsSidebar.classList.remove('show');
});

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeJobModal();
        savedJobsSidebar.classList.remove('show');
    }
});
