// Member information data
const memberData = {
    yash: {
        name: "Yash Gupta",
        role: "President",
        year: "SE",
        class: "Comp-A",
        skills: ["Full-Stack Development", "Machine Learning", "Leadership", "Project Management", "React.js", "Python"],
        contact: "YG@gmail.com"
    },
    aman: {
        name: "Aman Gupta", 
        role: "Vice President",
        year: "SE",
        class: "Comp-A",
        skills: ["Backend Development", "Database Design", "Team Coordination", "Node.js", "MongoDB", "DevOps"],
        contact: "AG@gmail.com"
    },
    himanshu: {
        name: "Himanshu Gupta",
        role: "Technical Lead", 
        year: "SE",
        class: "Comp-A",
        skills: ["Software Architecture", "System Design", "Code Review", "Java", "Spring Boot","Full-Stack Development"],
        contact: "HG@gmail.com"
    },
    pratham: {
        name: "Pratham Gupta",
        role: "Event Coordinator",
        year: "SE",
        class: "Comp-A", 
        skills: ["Event Planning", "Public Speaking", "Social Media", "Communication", "Organization"],
        contact: "PG@gmail.com"
    },
    sumit: {
        name: "Sumit Gupta",
        role: "Marketing Head",
        year: "SE",
        class: "Comp-A",
        skills: ["Digital Marketing", "Content Creation", "Brand Management", "Social Media Strategy", "Graphic Design", "Analytics"],
        contact: "SG@gmail.com"
    },
    rishabh: {
        name: "Rishabh Jaiswal",
        role: "Secretary", 
        year: "SE",
        class: "Comp-A",
        skills: ["Documentation", "Meeting Management", "Communication", "Record Keeping", "Administrative Skills", "Time Management"],
        contact: "RJ@gmail.com"
    }
};

// Member info modal functions
function showMemberInfo(memberId) {
    const member = memberData[memberId];
    if (!member) return;

    const modalContent = document.getElementById('memberInfoContent');
    modalContent.innerHTML = `
        <h2>${member.name}</h2>
        <div class="member-info-details">
            <div class="info-section">
                <h3>Role</h3>
                <p>${member.role}</p>
            </div>
            <div class="info-section">
                <h3>Year</h3>
                <p>${member.year}</p>
            </div>
            <div class="info-section">
                <h3>Class</h3>
                <p>${member.class}</p>
            </div>
            <div class="info-section">
                <h3>Skills</h3>
                <div class="skills-container">
                    ${member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
            <div class="info-section">
                <h3>Contact</h3>
                <p>${member.contact}</p>
            </div>
        </div>
    `;

    const modal = document.getElementById('memberInfoModal');
    modal.style.display = 'block';
}

function closeMemberInfo() {
    const modal = document.getElementById('memberInfoModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('memberInfoModal');
    if (event.target === modal) {
        closeMemberInfo();
    }
    
    const teamModal = document.getElementById('teamDetailsModal');
    if (event.target === teamModal) {
        closeTeamDetails();
    }
});

// Team Details Modal Functions
function showTeamDetails() {
    const container = document.getElementById('teamDetailsContainer');
    
    let detailsHTML = '';
    Object.values(memberData).forEach(member => {
        // Generate initials for the photo
        const initials = member.name.split(' ').map(word => word.charAt(0)).join('');
        
        detailsHTML += `
            <div class="team-member-detail">
                <div class="member-header">
                    <h4>${member.name}</h4>
                    <div class="member-photo-small">${initials}</div>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Year:</span>
                    <span class="detail-value">${member.year}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Class:</span>
                    <span class="detail-value">${member.class}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Role:</span>
                    <span class="detail-value">${member.role}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Skills:</span>
                    <span class="detail-value">${member.skills.join(', ')}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Contact:</span>
                    <span class="detail-value">${member.contact}</span>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = detailsHTML;
    
    const modal = document.getElementById('teamDetailsModal');
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
}

function closeTeamDetails() {
    const modal = document.getElementById('teamDetailsModal');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
}

const CONFIG = {
    animationDuration: 300,
    scrollOffset: 80,
    autoScrollDelay: 2000
};

// Event data
const eventData = {
    upcoming: [
        {
            id: 1,
            name: "Webathon 2025",
            type: "Hackathon",
            date: "2025-09-25",
            time: "10:00 AM",
            venue: "YGIT Auditorium , 2nd floor",
            description: "A 24-hour web development hackathon where teams compete to build innovative web applications using cutting-edge technologies. Participants will work on real-world problems and present their solutions to industry experts.",
            rules: [
                "Teams of 2-4 members maximum",
                "Original code only - no pre-built templates",
                "All frameworks and libraries allowed",
                "Submission deadline: 10:00 AM next day",
                "Must include a presentation demo"
            ],
            registration: "Closed",
            capacity: 360,
            registered: 118,
            tags: ["Web Development", "Innovation", "Competition"],
            ideas: [
                {
                    id: 1,
                    title: "AI-Powered Task Manager",
                    description: "A smart task management app that uses AI to prioritize tasks and suggest optimal workflows based on user behavior patterns.",
                    author: "Anonymous",
                    likes: 15,
                    dislikes: 2
                },
                {
                    id: 2,
                    title: "Eco-Friendly Shopping Assistant",
                    description: "A web app that helps users find eco-friendly alternatives to products and tracks their environmental impact through their shopping choices.",
                    author: "Anonymous",
                    likes: 23,
                    dislikes: 1
                },
                {
                    id: 3,
                    title: "Virtual Study Group Platform",
                    description: "A collaborative platform where students can form virtual study groups, share resources, and have interactive learning sessions with video chat and whiteboard features.",
                    author: "Anonymous",
                    likes: 18,
                    dislikes: 3
                }
            ]
        },
        {
            id: 2,
            name: "AI Workshop Series",
            type: "Workshop",
            date: "2025-09-15",
            time: "2:00 PM",
            venue: "YGIT Seminar Hall-2 , 2nd floor",
            description: "Hands-on workshop covering machine learning fundamentals and practical AI implementation using Python and TensorFlow. Perfect for beginners and intermediate developers looking to dive into AI.",
            rules: [
                "Bring your laptop with Python installed",
                "Basic Python knowledge required",
                "All materials and datasets provided",
                "Certificate of completion available",
                "Networking session included"
            ],
            registration: "Open",
            capacity: 50,
            registered: 32,
            tags: ["Artificial Intelligence", "Machine Learning", "Python"],
            ideas: [
                {
                    id: 4,
                    title: "AI Chatbot for Student Support",
                    description: "Create an AI chatbot that can answer student queries about courses, assignments, and campus facilities using natural language processing.",
                    author: "Anonymous",
                    likes: 12,
                    dislikes: 0
                },
                {
                    id: 5,
                    title: "Automated Code Review System",
                    description: "Develop an AI system that can review code submissions and provide feedback on coding standards, potential bugs, and optimization suggestions.",
                    author: "Anonymous",
                    likes: 8,
                    dislikes: 1
                }
            ]
        },
        {
            id: 3,
            name: "Tech Talk Series",
            type: "Seminar",
            date: "2025-09-30",
            time: "4:00 PM",
            venue: "YGIT Seminar Hall-4 , 3rd floor",
            description: "Industry experts share insights on emerging technologies, career guidance, and future trends in AI and software development. Q&A session and networking opportunity included.",
            rules: [
                "Open to all students and professionals",
                "Interactive Q&A session included",
                "Networking opportunity with speakers",
                "Free attendance for students",
                "Professional development certificates available"
            ],
            registration: "Open",
            capacity: 150,
            registered: 98,
            tags: ["Career Development", "Industry Insights", "Networking"],
            ideas: [
                {
                    id: 6,
                    title: "Industry Mentorship Platform",
                    description: "A platform connecting students with industry professionals for mentorship, career guidance, and networking opportunities in the tech field.",
                    author: "Anonymous",
                    likes: 25,
                    dislikes: 2
                }
            ]
        }
    ],
    past: [
        {
            id: 4,
            name: "Summer Coding Bootcamp",
            date: "2025-07-20",
            description: "Intensive 5-day coding bootcamp covering full-stack development, algorithms, and project building. Over 80 participants learned modern web technologies and built impressive portfolio projects.",
            attendees: 85,
            satisfaction: 4.8,
            highlights: [
                "5 days of intensive coding",
                "Portfolio projects created",
                "Industry mentorship",
                "Job placement assistance"
            ],
            images: [
                "https://via.placeholder.com/400x300?text=Bootcamp+Day+1",
                "https://via.placeholder.com/400x300?text=Final+Projects",
                "https://via.placeholder.com/400x300?text=Certificate+Ceremony"
            ],
            videos: ["https://www.w3schools.com/html/mov_bbb.mp4"]
        },
        {
            id: 5,
            name: "AI Innovation Challenge",
            date: "2025-06-15",
            description: "Students presented AI solutions for real-world problems. The winning team received internship opportunities and their solution is now being implemented by a local startup.",
            attendees: 120,
            satisfaction: 4.9,
            highlights: [
                "Real-world problem solving",
                "Industry partnerships",
                "Internship opportunities",
                "Solution implementation"
            ],
            images: [
                "https://via.placeholder.com/400x300?text=AI+Challenge",
                "https://via.placeholder.com/400x300?text=Winner+Team",
                "https://via.placeholder.com/400x300?text=Demo+Day"
            ],
            videos: []
        },
        {
            id: 6,
            name: "Tech Career Fair",
            date: "2025-05-10",
            description: "Career fair with top tech companies offering internships and full-time positions to students. Over 15 companies participated with immediate job offers for qualified candidates.",
            attendees: 250,
            satisfaction: 4.7,
            highlights: [
                "15+ participating companies",
                "On-spot job offers",
                "Resume review sessions",
                "Interview preparation workshops"
            ],
            images: [
                "https://via.placeholder.com/400x300?text=Career+Fair",
                "https://via.placeholder.com/400x300?text=Company+Booths",
                "https://via.placeholder.com/400x300?text=Interview+Sessions"
            ],
            videos: []
        }
    ]
};

// FAQ data
const faqData = [
    {
        id: 1,
        question: "What is AI Zoro Club?",
        answer: "AI Zoro Club is a premier student organization focused on artificial intelligence, machine learning, and emerging technologies. We organize workshops, hackathons, and networking events to help students learn and grow in the tech field. Our mission is to bridge the gap between academic learning and industry requirements."
    },
    {
        id: 2,
        question: "How can I join the club?",
        answer: "Currently, registration for new members is closed for this semester. However, you can attend our public events and workshops to get involved. Follow our social media channels and subscribe to our newsletter for updates on when registration reopens. We typically open registrations at the beginning of each semester."
    },
    {
        id: 3,
        question: "What events do you organize?",
        answer: "We organize a variety of events including technical workshops, hackathons, seminars with industry experts, coding competitions, project showcases, and networking sessions with tech professionals. Our events cater to different skill levels from beginners to advanced practitioners."
    },
    {
        id: 4,
        question: "Do I need prior experience in AI?",
        answer: "No prior experience is required! We welcome students from all backgrounds and disciplines. Our events are designed to cater to different skill levels, from complete beginners to advanced practitioners. We provide mentorship and resources to help everyone learn and grow."
    },
    {
        id: 5,
        question: "Are events free to attend?",
        answer: "Most of our events are free for students. Some special workshops or competitions may have a nominal fee to cover materials, refreshments, and venue costs. We strive to keep our events accessible to all students regardless of their financial situation."
    },
    {
        id: 6,
        question: "How can I stay updated about upcoming events?",
        answer: "You can stay updated by following our social media channels, subscribing to our newsletter, or checking our website regularly. We also send notifications through our mobile app for registered members."
    }
];

// Team data
const teamData = [
    { id: 1, name: "Yash Gupta", role: "President", photo: "YG", bio: "Computer Science major with expertise in AI and machine learning." },
    { id: 2, name: "Aman Gupta", role: "Vice President", photo: "AG", bio: "Data Science enthusiast passionate about community building." },
    { id: 3, name: "Himanshu Gupta", role: "Technical Lead", photo: "HG", bio: "Full-stack developer and open source contributor." },
    { id: 4, name: "Pratham Gupta", role: "Event Coordinator", photo: "PG", bio: "Event management specialist with creative flair." },
    { id: 5, name: "Sumit Gupta", role: "Marketing Head", photo: "SG", bio: "Digital marketing expert and content creator." },
    { id: 6, name: "Rishabh Jaiswal", role: "Secretary", photo: "RJ", bio: "Organizational guru keeping everything running smoothly." }
];

// Utility functions
const utils = {
    // Smooth scroll to element
    scrollToElement(elementId, offset = CONFIG.scrollOffset) {
        const element = document.getElementById(elementId);
        if (element) {
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    },

    // Format date
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    // Create element with classes and content
    createElement(tag, className = '', innerHTML = '') {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (innerHTML) element.innerHTML = innerHTML;
        return element;
    },

    // Show notification
    showNotification(message, type = 'info') {
        const notification = utils.createElement('div', `notification notification-${type}`, message);
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), CONFIG.animationDuration);
        }, 3000);
    }
};

// Navigation functionality
const navigation = {
    init() {
        this.bindEvents();
        this.setActiveSection();
        this.handleScroll();
    },

    bindEvents() {
        // Navigation button clicks
        document.getElementById('dashboardBtn').addEventListener('click', () => this.navigateToSection('dashboardSection'));
        document.getElementById('upcomingBtn').addEventListener('click', () => this.navigateToSection('upcomingSection'));
        document.getElementById('pastBtn').addEventListener('click', () => this.navigateToSection('pastSection'));
        document.getElementById('faqBtn').addEventListener('click', () => this.navigateToSection('faqSection'));
        document.getElementById('membersBtn').addEventListener('click', () => this.navigateToTeamSection());

        // Scroll event for active section detection
        window.addEventListener('scroll', this.handleScroll.bind(this));
    },

    navigateToSection(sectionId) {
        utils.scrollToElement(sectionId);
        this.setActiveButton(sectionId);
    },

    navigateToTeamSection() {
        // First navigate to FAQ section, then scroll to team section
        const teamSection = document.querySelector('.team-section');
        if (teamSection) {
            teamSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            // Set active button to members using our method
            this.setActiveButton('teamSection');
        }
    },

    setActiveButton(sectionId) {
        const buttonMap = {
            dashboardSection: 'dashboardBtn',
            upcomingSection: 'upcomingBtn',
            pastSection: 'pastBtn',
            faqSection: 'faqBtn',
            teamSection: 'membersBtn'
        };

        // Remove active class from all buttons
        document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
        
        // Add active class to current button
        const activeButton = document.getElementById(buttonMap[sectionId]);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    },

    setActiveSection() {
        // Check current scroll position and set appropriate active button
        this.handleScroll();
    },

    handleScroll() {
        const sections = ['dashboardSection', 'upcomingSection', 'pastSection', 'faqSection'];
        const scrollPosition = window.scrollY;
        let activeSection = 'dashboardSection'; // Default to dashboard

        // If we're at the very top, always show dashboard as active
        if (scrollPosition < 100) {
            this.setActiveButton('dashboardSection');
            return;
        }

        // Check if we're in the team section first
        const teamSection = document.querySelector('.team-section');
        if (teamSection) {
            const teamTop = teamSection.offsetTop - 150;
            const teamBottom = teamTop + teamSection.offsetHeight;
            
            if (scrollPosition >= teamTop) {
                this.setActiveButton('teamSection');
                return;
            }
        }

        // Find the section that's currently most visible
        for (let i = 0; i < sections.length; i++) {
            const section = document.getElementById(sections[i]);
            if (section) {
                const sectionTop = section.offsetTop - 100; // Offset for navigation height
                
                // If we're past this section's start, it could be the active one
                if (scrollPosition >= sectionTop) {
                    activeSection = sections[i];
                }
            }
        }
        
        this.setActiveButton(activeSection);
    }
};

// Event management
const eventManager = {
    init() {
        this.populateUpcomingEvents();
        this.populatePastEvents();
    },

    populateUpcomingEvents() {
        const container = document.getElementById('upcomingEventsGrid');
        if (!container) return;

        container.innerHTML = eventData.upcoming.map(event => `
            <div class="event-card" data-event-id="${event.id}">
                <div class="event-header">
                    <div class="event-name">${event.name}</div>
                    <div class="event-type">${event.type}</div>
                </div>
                <div class="event-body">
                    <div class="event-detail">
                        <strong>📅 Date:</strong> ${utils.formatDate(event.date)}
                    </div>
                    <div class="event-detail">
                        <strong>⏰ Time:</strong> ${event.time}
                    </div>
                    <div class="event-detail">
                        <strong>📍 Venue:</strong> ${event.venue}
                    </div>
                    <div class="event-detail">
                        <strong>👥 Capacity:</strong> ${event.registered}/${event.capacity} registered
                    </div>
                    <div class="event-buttons">
                        <button class="btn ${event.registration === 'Closed' ? 'btn-secondary' : 'btn-primary'}" 
                                onclick="eventManager.handleRegistration('${event.name}', '${event.registration}', ${event.id})">
                            ${event.registration === 'Closed' ? 'Registration Closed' : 'Register Now'}
                        </button>
                        <button class="btn btn-secondary" onclick="eventManager.showEventDetails(${event.id}, 'upcoming')">
                            More Details
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    },

    populatePastEvents() {
        const container = document.getElementById('pastEventsGrid');
        if (!container) return;

        container.innerHTML = eventData.past.map(event => `
            <div class="event-card" data-event-id="${event.id}">
                <div class="event-header">
                    <div class="event-name">${event.name}</div>
                    <div class="event-type">${utils.formatDate(event.date)}</div>
                </div>
                <div class="event-body">
                    <p class="muted-text">${event.description.substring(0, 120)}...</p>
                    <div class="event-detail">
                        <strong>👥 Attendees:</strong> ${event.attendees}
                    </div>
                    <div class="event-detail">
                        <strong>⭐ Satisfaction:</strong> ${event.satisfaction}/5.0
                    </div>
                    <div class="event-buttons">
                        <button class="btn btn-secondary" onclick="eventManager.showEventDetails(${event.id}, 'past')">
                            View Details & Media
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    },

    handleRegistration(eventName, status, eventId) {
        if (status === 'Closed') {
            utils.showNotification(`Registration for ${eventName} is currently closed.`, 'warning');
        } else {
            // Find the event and update registration count
            const event = eventData.upcoming.find(e => e.id === parseInt(eventId));
            if (event && event.registered < event.capacity) {
                event.registered += 1;
                utils.showNotification(`Registration successful for ${eventName}! Check your email for confirmation.`, 'success');
                // Refresh the event display
                this.populateUpcomingEvents();
            } else if (event && event.registered >= event.capacity) {
                utils.showNotification(`Sorry, ${eventName} is now full. Registration is closed.`, 'warning');
                event.registration = 'Closed';
                this.populateUpcomingEvents();
            }
        }
    },

    showEventDetails(eventId, type) {
        const events = type === 'upcoming' ? eventData.upcoming : eventData.past;
        const event = events.find(e => e.id === eventId);
        
        if (!event) return;

        let content;
        if (type === 'upcoming') {
            const ideasSection = this.generateIdeasSection(event.ideas, event.id);
            content = `
                <h2>${event.name} - ${event.type}</h2>
                <div class="event-meta">
                    <p><strong>📅 Date:</strong> ${utils.formatDate(event.date)}</p>
                    <p><strong>⏰ Time:</strong> ${event.time}</p>
                    <p><strong>📍 Venue:</strong> ${event.venue}</p>
                    <p><strong>👥 Capacity:</strong> ${event.registered}/${event.capacity} registered</p>
                    <p><strong>🎯 Status:</strong> <span class="status-${event.registration.toLowerCase()}">${event.registration}</span></p>
                </div>
                
                <div class="event-tags">
                    ${event.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                
                <h3>Description</h3>
                <p>${event.description}</p>
                
                <h3>Rules & Guidelines</h3>
                <ul>
                    ${event.rules.map(rule => `<li>${rule}</li>`).join('')}
                </ul>
                
                ${ideasSection}
            `;
        } else {
            const mediaContent = this.generateMediaContent(event);
            content = `
                <h2>${event.name}</h2>
                <div class="event-meta">
                    <p><strong>📅 Date:</strong> ${utils.formatDate(event.date)}</p>
                    <p><strong>👥 Attendees:</strong> ${event.attendees}</p>
                    <p><strong>⭐ Satisfaction Rating:</strong> ${event.satisfaction}/5.0</p>
                </div>
                
                <h3>Event Overview</h3>
                <p>${event.description}</p>
                
                <h3>Key Highlights</h3>
                <ul>
                    ${event.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
                
                ${mediaContent}
            `;
        }

        modalManager.show(content);
    },

    generateMediaContent(event) {
        let mediaHtml = '';
        
        if (event.images && event.images.length > 0) {
            mediaHtml += `
                <h3>Event Gallery</h3>
                <div class="media-gallery">
                    ${event.images.map(img => `
                        <img src="${img}" alt="Event photo" class="gallery-image" onclick="modalManager.showImageModal('${img}')">
                    `).join('')}
                </div>
            `;
        }
        
        if (event.videos && event.videos.length > 0) {
            mediaHtml += `
                <h3>Event Videos</h3>
                <div class="video-gallery">
                    ${event.videos.map(video => `
                        <video controls class="gallery-video">
                            <source src="${video}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    `).join('')}
                </div>
            `;
        }
        
        return mediaHtml;
    },

    generateIdeasSection(ideas, eventId) {
        if (!ideas || ideas.length === 0) {
            return `
                <h3>💡 Project Ideas & Suggestions</h3>
                <p class="muted-text">No ideas submitted yet. Be the first to share your innovative project idea!</p>
                <div class="idea-submission">
                    <h4>Submit Your Idea</h4>
                    <form onsubmit="eventManager.submitIdea(event, ${eventId})">
                        <div class="form-group">
                            <label for="ideaTitle">Idea Title:</label>
                            <input type="text" id="ideaTitle" required>
                        </div>
                        <div class="form-group">
                            <label for="ideaDescription">Description:</label>
                            <textarea id="ideaDescription" placeholder="Describe your project idea..." required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit Idea</button>
                    </form>
                </div>
            `;
        }

        return `
            <h3>💡 Project Ideas & Suggestions</h3>
            <div class="ideas-list">
                ${ideas.map(idea => `
                    <div class="idea-card">
                        <h4>${idea.title}</h4>
                        <p>${idea.description}</p>
                        <div class="idea-footer">
                            <span class="idea-author">by ${idea.author}</span>
                            <div class="idea-actions">
                                <button class="btn-like" onclick="eventManager.likeIdea(${idea.id}, ${eventId})">
                                    👍 <span id="like-${idea.id}">${idea.likes}</span>
                                </button>
                                <button class="btn-dislike" onclick="eventManager.dislikeIdea(${idea.id}, ${eventId})">
                                    👎 <span id="dislike-${idea.id}">${idea.dislikes}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="idea-submission">
                <h4>Submit Your Idea</h4>
                <form onsubmit="eventManager.submitIdea(event, ${eventId})">
                    <div class="form-group">
                        <label for="ideaTitle">Idea Title:</label>
                        <input type="text" id="ideaTitle" required>
                    </div>
                    <div class="form-group">
                        <label for="ideaDescription">Description:</label>
                        <textarea id="ideaDescription" placeholder="Describe your project idea..." required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit Idea</button>
                </form>
            </div>
        `;
    },

    submitIdea(event, eventId) {
        event.preventDefault();
        
        const title = document.getElementById('ideaTitle').value;
        const description = document.getElementById('ideaDescription').value;
        
        // Find the event and add the new idea
        const eventObj = eventData.upcoming.find(e => e.id === eventId);
        if (eventObj) {
            if (!eventObj.ideas) {
                eventObj.ideas = [];
            }
            
            const newIdea = {
                id: Date.now(), // Simple ID generation
                title: title,
                description: description,
                author: "Anonymous",
                likes: 0,
                dislikes: 0
            };
            
            eventObj.ideas.push(newIdea);
            utils.showNotification('Your idea has been submitted successfully!', 'success');
            
            // Close and reopen modal to refresh content
            modalManager.close(document.querySelector('.close'));
            setTimeout(() => {
                this.showEventDetails(eventId, 'upcoming');
            }, 300);
        }
    },

    likeIdea(ideaId, eventId) {
        const eventObj = eventData.upcoming.find(e => e.id === eventId);
        if (eventObj && eventObj.ideas) {
            const idea = eventObj.ideas.find(i => i.id === ideaId);
            if (idea) {
                idea.likes += 1;
                document.getElementById(`like-${ideaId}`).textContent = idea.likes;
                utils.showNotification('Thanks for your feedback!', 'success');
            }
        }
    },

    dislikeIdea(ideaId, eventId) {
        const eventObj = eventData.upcoming.find(e => e.id === eventId);
        if (eventObj && eventObj.ideas) {
            const idea = eventObj.ideas.find(i => i.id === ideaId);
            if (idea) {
                idea.dislikes += 1;
                document.getElementById(`dislike-${ideaId}`).textContent = idea.dislikes;
                utils.showNotification('Thanks for your feedback!', 'info');
            }
        }
    }
};

// FAQ management
const faqManager = {
    init() {
        this.populateFAQs();
    },

    populateFAQs() {
        const container = document.getElementById('faqContainer');
        if (!container) return;

        container.innerHTML = faqData.map((faq, index) => `
            <div class="faq-item" data-faq-id="${faq.id}">
                <div class="faq-question" onclick="faqManager.toggleFAQ(${index})">
                    ${faq.question}
                </div>
                <div class="faq-answer" id="faq-${index}">
                    ${faq.answer}
                </div>
            </div>
        `).join('');
    },

    toggleFAQ(index) {
        const answer = document.getElementById(`faq-${index}`);
        if (answer) {
            answer.classList.toggle('show');
        }
    }
};

// Modal management
const modalManager = {
    show(content) {
        // Prevent body scrolling when modal is open
        document.body.classList.add('modal-open');
        
        const modal = utils.createElement('div', 'modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" onclick="modalManager.close(this)">&times;</span>
                ${content}
            </div>
        `;
        
        document.body.appendChild(modal);
        modal.style.display = 'block';
        
        // Close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.close(modal.querySelector('.close'));
            }
        });
        
        // Close on escape key
        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                this.close(modal.querySelector('.close'));
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
    },

    close(closeElement) {
        const modal = closeElement.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
            modal.remove();
            // Re-enable body scrolling
            document.body.classList.remove('modal-open');
        }
    },

    showImageModal(imageSrc) {
        const content = `
            <div class="image-modal-content">
                <img src="${imageSrc}" alt="Event photo" style="width: 100%; border-radius: 10px;">
            </div>
        `;
        this.show(content);
    }
};

// Form management
const formManager = {
    init() {
        this.bindFormEvents();
    },

    bindFormEvents() {
        const questionForm = document.querySelector('.ask-question form');
        if (questionForm) {
            questionForm.addEventListener('submit', this.handleQuestionSubmit.bind(this));
        }
    },

    handleQuestionSubmit(event) {
        event.preventDefault();
        
        const email = document.getElementById('userEmail').value;
        const question = document.getElementById('userQuestion').value;
        
        if (this.validateForm(email, question)) {
            // Simulate form submission
            utils.showNotification(`Thank you! We've received your question and will respond to ${email} soon.`, 'success');
            
            // Clear form
            document.getElementById('userEmail').value = '';
            document.getElementById('userQuestion').value = '';
        }
    },

    validateForm(email, question) {
        if (!email || !question) {
            utils.showNotification('Please fill in all required fields.', 'error');
            return false;
        }
        
        if (!this.isValidEmail(email)) {
            utils.showNotification('Please enter a valid email address.', 'error');
            return false;
        }
        
        return true;
    },

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
};

// Club management
const clubManager = {
    showJoinWarning() {
        const warning = document.getElementById('joinWarning');
        if (warning) {
            warning.classList.remove('hidden');
            warning.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        utils.showNotification('Registration is currently closed. Please check back next semester!', 'info');
    }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('AI Zoro Club Dashboard - Initializing...');
    
    try {
        navigation.init();
        eventManager.init();
        faqManager.init();
        formManager.init();
        
        console.log('AI Zoro Club Dashboard - Initialization complete!');
        
        // Add some CSS for notifications
        const notificationStyles = `
            <style>
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 15px 20px;
                    border-radius: 10px;
                    color: white;
                    font-weight: 600;
                    z-index: 10000;
                    transform: translateX(100%);
                    transition: transform 0.3s ease;
                    max-width: 300px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
                }
                .notification.show {
                    transform: translateX(0);
                }
                .notification-success {
                    background: linear-gradient(135deg, #10b981, #059669);
                }
                .notification-error {
                    background: linear-gradient(135deg, #ef4444, #dc2626);
                }
                .notification-warning {
                    background: linear-gradient(135deg, #f59e0b, #d97706);
                }
                .notification-info {
                    background: linear-gradient(135deg, #06b6d4, #0891b2);
                }
                .event-meta {
                    background: rgba(255,255,255,0.05);
                    padding: 20px;
                    border-radius: 10px;
                    margin: 20px 0;
                }
                .event-tags {
                    margin: 20px 0;
                }
                .tag {
                    display: inline-block;
                    background: linear-gradient(135deg, #06b6d4, #8b5cf6);
                    color: white;
                    padding: 5px 12px;
                    border-radius: 15px;
                    font-size: 0.8rem;
                    margin: 3px;
                }
                .media-gallery {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 15px;
                    margin: 20px 0;
                }
                .gallery-image {
                    width: 100%;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: transform 0.3s ease;
                }
                .gallery-image:hover {
                    transform: scale(1.05);
                }
                .gallery-video {
                    width: 100%;
                    border-radius: 10px;
                    margin: 10px 0;
                }
                .status-open {
                    color: #10b981;
                    font-weight: bold;
                }
                .status-closed {
                    color: #ef4444;
                    font-weight: bold;
                }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', notificationStyles);
        
    } catch (error) {
        console.error('Error initializing dashboard:', error);
    }
});

// Global functions for onclick handlers
window.showJoinWarning = clubManager.showJoinWarning;
window.eventManager = eventManager;
window.faqManager = faqManager;
window.modalManager = modalManager;
