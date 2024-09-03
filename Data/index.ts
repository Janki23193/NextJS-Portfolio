"use Client";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
    
]

export const gridItems = [
    {  id: 1, 
       title: "Mamia, Healthcare", 
       description: "", 
       className: "lg:col-span-2 lg:row-span-2 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
       imgClassName: "h-[250%] w-full",
       titleClassName: "justify-end",
       img: "./laptop.jpg",
       spareImg: "",
    },
    { id: 2,
      title: "I'm a full stack developer, NZ based",
      description: '',
      className: "lg:col-span-1 md:col-span-3 md:row-span-1",
      imgClassName: "" ,
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I contantly try to improve",
        className: "lg:col-span-1 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",

    },
    {
        id: 4,
        title: "Innovative Tech Enthusiast and Skilled Developer",
        description: "",
        className: "lg:col-span-1 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",

    },
    {
        id: 5,
        title: "Currently Next.js React App",
        description: "Digital Portfolio",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
     id: 6,
     title: "Interested in dicussing projects?",
     description: "",
     className: "lg:col-span-1 md:col-span-3 md:row-span-1",
     imgClassName: "",
     titleClassName: "justify-center md:max-w-full max-w-60 text-center",
     img: "",
     spareImg: "",
    }
];

export const projects = [
    {
      id: 1,   
      title: "Mamia HealthCare Web Application",
      des: "Appointments tracking, User Manager, SignInManager, Loan tracking, Azure Cloud Database",
      img: "/MamiaSnap.png",
      iconLists :["/re.svg", "/tail.svg", "/three.svg", "/fm.svg"],
      link: "/ui.earth.com",
    },
    {
        id: 2,   
        title: "Digital CV Portfoilio",
        des: "A portfolio of my work experience using Next.JS, Typescript, Tailwind CSS",
        img: "/PortSnap.png",
        iconLists :["/re.svg", "/tail.svg", "/three.svg"],
        link: "/ui.earth.com", 
    },
    {
        id: 3,   
        title: "LEADS",
        des: "Designed a CRM application using .Net, HTML, CSS, JavaScript, SQL Cloud database which allows organisation to register and admin can add all the Staff, Customer(Company) which can be future customer, leads or Prospect. ",
        img: "/p1.svg",
        iconLists :["/re.svg", "/tail.svg", "/three.svg"],
        link: "/ui.earth.com", 
    },
    {
        id: 4,   
        title: "Customer Relationship Manager",
        des: "Built an API using C#, .Net, SQL server which is integrated with react.JS frontend",
        img: "/CRM's snap.png",
        iconLists :["/re.svg", "/tail.svg", "/three.svg"],
        link: "/ui.earth.com", 
    }
];
export const Testimonials = [
    {
        quote: "Working with ProcessIT, specially with Janki was a great pleasure",
        name: "Mamia Manager",
        title: "Mamia General Manager",
    }
];
export const companies = [
    {
        id: 1,
        name: "ProcessIT",
        img: "",
        nameImg: "",
    }
];
export const workExperience = [
    {
        id: 1,
        title: "Full Stack Developer",
        desc: "",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    }
];
export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
    },
    {
        id: 2,
        img: "/twit.svg",
    },
    {
        id: 3,
        img: "/link.svg",
    }
];