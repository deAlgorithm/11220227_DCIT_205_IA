function toggleDropdown(level) {
    var allDropdowns = document.querySelectorAll('.Cdropdown-content');
    var allButtons = document.querySelectorAll('.Cdropbtn');
    
    for (var i = 0; i < allDropdowns.length; i++) {
        if (allDropdowns[i].id === level) {
            if (allDropdowns[i].classList.contains('active')) {
                allDropdowns[i].classList.remove('active');
                allButtons[i].classList.remove('active');
            } else {
                allDropdowns[i].classList.add('active');
                allButtons[i].classList.add('active');
            }
        } else {
            allDropdowns[i].classList.remove('active');
            allButtons[i].classList.remove('active');
        }
    }
};

function toggledropdown(Level) {
  var allDropdowns = document.querySelectorAll('.cdropdown-content');
  var allButtons = document.querySelectorAll('.cdropbtn');
  
  for (var i = 0; i < allDropdowns.length; i++) {
      if (allDropdowns[i].id === Level) {
          if (allDropdowns[i].classList.contains('active')) {
              allDropdowns[i].classList.remove('active');
              allButtons[i].classList.remove('active');
          } else {
              allDropdowns[i].classList.add('active');
              allButtons[i].classList.add('active');
          }
      } else {
          allDropdowns[i].classList.remove('active');
          allButtons[i].classList.remove('active');
      }
  }
};

function toggleMDropdown(LEVEL) {
  var allDropdowns = document.querySelectorAll('.Mdropdown-content');
  var allButtons = document.querySelectorAll('.Mdropbtn');
  
  for (var i = 0; i < allDropdowns.length; i++) {
      if (allDropdowns[i].id === LEVEL) {
          if (allDropdowns[i].classList.contains('active')) {
              allDropdowns[i].classList.remove('active');
              allButtons[i].classList.remove('active');
          } else {
              allDropdowns[i].classList.add('active');
              allButtons[i].classList.add('active');
          }
      } else {
          allDropdowns[i].classList.remove('active');
          allButtons[i].classList.remove('active');
      }
  }
};


const faqItems = document.querySelectorAll('.faq-item h3');

faqItems.forEach(item => {
    item.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        answer.classList.toggle('show');
    });
});

// Sample FAQ data
const faqs = [
    {
      title: "Is the Department of Computer Science involved in any collaborative research projects?",
      content: "Yes, the department collaborates with other academic institutions, industry partners, and research organizations on various research initiatives. These collaborations facilitate cutting-edge research and innovation."
    },
    {
      title: "What programming languages are taught in the Computer Science program?",
      content: "The program covers a range of programming languages including Java, Python, C/C++, JavaScript, and more. The curriculum is designed to provide a strong foundation in multiple programming paradigms."
    },
    {
      title: "Are there opportunities for international exchange programs for Computer Science students?",
      content: "Yes, the department may have partnerships with universities abroad offering exchange programs. Interested students can inquire about exchange opportunities and eligibility criteria."
    },
    {
      title: "Does the department organize hackathons or coding competitions?",
      content: "Yes, the department hosts hackathons, coding competitions, and tech events throughout the academic year. These events promote innovation, collaboration, and practical application of skills."
    },
    {
      title: "What kind of networking events or conferences does the department organize?",
      content: "The department organizes networking events, seminars, conferences, and guest speaker series inviting professionals and experts from the industry to share insights and network with students."
    },
    {
      title: "Can students apply for teaching assistant positions in the department?",
      content: "Qualified students may have opportunities to work as teaching assistants for certain courses. These positions offer valuable teaching experience and can be rewarding for students."
    },
    {
      title: "Are there opportunities for undergraduate research funding or grants?",
      content: "The department or university might offer grants or funding for undergraduate research projects. Students can explore research grant opportunities to support their projects."
    },
    {
      title: "What software and tools are available in the computer labs?",
      content: "The computer labs are equipped with software for programming, data analysis, development environments, simulation tools, and more, to support coursework and projects."
    },
    {
      title: "Is there a dedicated career services center for Computer Science students?",
      content: "The university might have a dedicated career services center offering career counseling, job placement assistance, resume workshops, and internship guidance specifically tailored for Computer Science students."
    },
    {
      title: "Are there opportunities for students to showcase their projects or research?",
      content: "The department may organize showcases or symposiums where students can present their projects, research findings, or innovations to faculty, peers, and industry professionals."
    },
    {
      title: "Can students get involved in open-source projects through the department?",
      content: "Yes, students interested in contributing to open-source projects can receive guidance and support from the department. Faculty members may mentor students on contributing to relevant projects."
    },
    {
      title: "What postgraduate opportunities are available after completing the Bachelor's program?",
      content: "Students completing the Bachelor's program have options to pursue Master's or Ph.D. programs in Computer Science or related fields, either at the University of Ghana or other institutions worldwide."
    },
    {
      title: "Is there a designated space for collaborative work or group projects?",
      content: "The department may provide collaborative spaces or project rooms where students can work together on group projects, discussions, and team-based activities."
    },
    {
      title: "Does the department provide guidance on entrepreneurship in the tech field?",
      content: "Yes, the department might offer resources, workshops, or mentorship for students interested in starting their own tech-based ventures or startups."
    },
    {
      title: "Are there opportunities for summer internships related to Computer Science?",
      content: "The department might have partnerships with companies offering summer internships for students. These internships provide practical industry experience during the summer break."
    },
    {
      title: "What extracurricular activities are available for Computer Science students?",
      content: "Apart from academic pursuits, students can engage in extracurricular activities such as tech clubs, game development groups, robotics competitions, and more."
    },
    {
      title: "Does the department offer online courses or distance learning options?",
      content: "The department might provide online courses or distance learning options for certain programs or courses to accommodate remote or part-time students."
    },
    {
      title: "Are there mentorship programs for incoming students?",
      content: "Yes, the department might have mentorship programs where senior students or faculty members guide and support incoming students in their academic journey."
    },
    {
      title: "Can students access specialized equipment or facilities for research purposes?",
      content: "The department might have specialized equipment, labs, or facilities catering to specific research needs such as AI research, robotics, networking, etc."
    },
    {
      title: "Are there opportunities for students to present papers at conferences or journals?",
      content: "Yes, students with research findings or papers can submit them to conferences or academic journals. Faculty members might guide students through the submission process."
    },
    {
      title: "Can students customize their course schedule to fit specific interests?",
      content: "Students might have elective course options allowing them to tailor their schedule towards particular interests or specializations within Computer Science."
    },
    {
      title: "What mentorship opportunities are available for women in Computer Science?",
      content: "The department might offer mentorship programs specifically designed to support and encourage women pursuing studies in Computer Science."
    },
    {
      title: "Are there student-led initiatives or innovation labs within the department?",
      content: "Students might lead innovation labs or initiatives focusing on technology innovation, entrepreneurship, or social impact projects within the department."
    },
    {
      title: "Does the department host workshops or seminars on emerging technologies?",
      content: "Yes, the department might organize workshops, seminars, or courses to introduce students to emerging technologies such as blockchain, IoT, and quantum computing."
    },
    {
      title: "Can students collaborate with faculty members on research projects?",
      content: "Yes, students can collaborate with faculty members on research projects by expressing their interest and discussing potential opportunities."
    },
    {
      title: "What support does the department offer for student-led startups?",
      content: "The department or university might provide resources, mentorship, or incubation programs to support students interested in launching their tech startups."
    },
    {
      title: "Is there a community or forum for alumni to connect with current students?",
      content: "Yes, the department may have platforms or events facilitating networking and connections between alumni and current students."
    },
    {
      title: "Can students access industry certifications or professional development courses?",
      content: "The department might collaborate with industry partners to offer certifications or professional development courses enhancing students' skills and employability."
    },
    {
      title: "Are there opportunities for collaborative projects with students from other departments?",
      content: "Yes, students can collaborate on interdisciplinary projects by partnering with students from other departments or faculties."
    },
    {
      title: "Does the department organize field trips or visits to tech companies?",
      content: "Yes, the department might organize field trips or company visits providing students with insights into industry practices and real-world applications."
    },
    {
      title: "Can students engage in social impact projects using technology?",
      content: "Yes, the department may support initiatives where students use technology to address social challenges or contribute to community development."
    },
    {
      title: "What support is available for students pursuing academic research conferences?",
      content: "Students interested in presenting at conferences can receive guidance on paper submissions, presentations, and travel grants if available."
    },
    {
      title: "Does the department offer mentorship for students interested in academia?",
      content: "Yes, students interested in pursuing academia can receive mentorship and guidance on pursuing higher education and research careers."
    },
    {
      title: "Can students publish their research findings in department journals?",
      content: "The department might have journals or publications where students can submit their research findings for review and publication."
    },
    {
      title: "Are there workshops on resume building and interview preparation?",
      content: "Yes, the department may conduct workshops to help students build resumes, prepare for interviews, and develop job-searching skills."
    },
    {
      title: "Is there a community for postgraduate students to collaborate and network?",
      content: "Yes, postgraduate students may have access to forums, clubs, or groups facilitating collaboration and networking among themselves."
    },
    {
      title: "What assistance is available for international students studying Computer Science?",
      content: "The department or university might offer support services tailored for international students, including visa assistance, housing, and cultural integration programs."
    },
    {
      title: "Does the department offer dual-degree programs in partnership with other universities?",
      content: "Yes, the department might have agreements with other universities for dual-degree programs, allowing students to earn degrees from both institutions."
    },
    {
      title: "Can students receive guidance on patenting their technological innovations?",
      content: "Yes, students with innovative ideas or inventions can receive guidance on the patenting process and intellectual property protection."
    },
    {
      title: "Are there opportunities for cross-disciplinary research within the university?",
      content: "Yes, the university promotes cross-disciplinary collaborations, allowing students to engage in research spanning multiple disciplines."
    },
    {
      title: "What resources are available for students interested in game development?",
      content: "The department might offer resources, tools, and workshops specifically aimed at students interested in game design and development."
    },
    {
      title: "Can students participate in research competitions or grants at the national level?",
      content: "Yes, students can participate in national research competitions or apply for grants supporting their innovative research projects."
    },
    {
      title: "Does the department offer pre-professional advising for students planning on careers in industry?",
      content: "Yes, the department might provide advising services tailored for students aiming for careers in the tech industry."
    },
    {
      title: "Are there opportunities for interdisciplinary courses or certificates?",
      content: "Students might have options to enroll in interdisciplinary courses or pursue certificates integrating technology with other disciplines."
    },
    {
      title: "What role does the department play in fostering diversity and inclusion?",
      content: "The department actively promotes diversity and inclusion through various initiatives, programs, and support for underrepresented groups."
    },
    {
      title: "Are there opportunities for undergraduate students to publish research papers?",
      content: "Undergraduate students with substantial research findings might have opportunities to publish their work in reputable journals or conferences."
    },
    {
      title: "Does the department have partnerships with tech companies for industry projects?",
      content: "Yes, the department may collaborate with tech companies on industry-sponsored projects allowing students to work on real-world challenges."
    }
  ];
  
  
  const generateFAQContent = () => {
    const faqList = document.querySelector('.faq-list');
    let faqHTML = '';
  
    faqs.forEach((faq, index) => {
      faqHTML += `<div class="faq-section">
        <h2 id="faq-${index + 1}">${faq.title}</h2>
        <p>${faq.content}</p>
      </div>`;
    });
  
    faqList.innerHTML = faqHTML;
  };
  generateFAQContent();
  

function toggleNav(x) {
  
  var sidenav = document.getElementById("mySidenav");
  if (sidenav.style.width === "400px") {
      sidenav.style.width = "0";
      x.classList.toggle("change");
      document.body.style.backgroundColor = "white";

  } else {
      sidenav.style.width = "400px";
      x.classList.toggle("change");
      document.getElementById("mySidenav").style.width = "400px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
}

