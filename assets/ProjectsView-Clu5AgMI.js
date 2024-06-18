import{B as l}from"./ButtonWithTransition-CFlpWgs5.js";import{_ as n,o as a,c as s,b as t,t as o,a as h,r as m,F as p,d as u,h as f,p as g,f as y}from"./index-D3lOYnzu.js";const b={class:"project-card",tabindex:0},w=["src","alt"],_={class:"description-container"},W={class:"title"},x={class:"description"},j={__name:"ProjectCard",props:{project:{type:Object,required:!0}},setup(i){const e=i;return(d,c)=>(a(),s("li",b,[t("img",{class:"image",src:e.project.imageUrl,alt:e.project.title},null,8,w),t("div",_,[t("h2",W,o(e.project.title),1),t("p",x,o(e.project.description),1),h(l,{text:"Learn More",to:`/projects/${e.project.id}`},null,8,["to"])])]))}},v=n(j,[["__scopeId","data-v-32d995db"]]),H=[{id:1,title:"Finished office space in Amsterdam",description:"Our team renovated this office space in the heart of Amsterdam. The building was built in the 19th century and we transformed it into a modern and spacious workplace. We added a state-of-the-art HVAC system, upgraded the electrical infrastructure, and installed smart lighting.",imageUrl:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},{id:2,title:"New house in the countryside",description:"We built a new house in the countryside for a family of three. The house was designed with energy efficiency in mind and features a solar panel system. We also installed a smart thermostat and a smart home security system. The house has a spacious living area, a well-equipped kitchen, and two comfortable bedrooms.",imageUrl:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},{id:3,title:"Renovation of a historic building",description:"We renovated a historic building in the city center. The building dates back to the 17th century and was previously used as a warehouse. We preserved the building's original façade and restored its original charm. We upgraded the electrical and HVAC systems, added smart lighting, and created a modern and functional office space. We also added a rooftop terrace with a stunning view of the city.",imageUrl:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},{id:4,title:"Modern condominium complex",description:"We built a modern condominium complex in the city. The complex consists of 100 apartments and a community center. We designed the building with energy efficiency in mind and installed a state-of-the-art HVAC system. We also added smart lighting and a smart home security system. The apartments are spacious and well-equipped with modern appliances and amenities.",imageUrl:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},{id:5,title:"New retail space in the city center",description:"We built a new retail space in the city center. The space features a variety of shops and restaurants. We designed the building with energy efficiency in mind and installed a state-of-the-art HVAC system. We also added smart lighting and a smart home security system. The space is well-lit and visually appealing, with comfortable seating areas and restrooms.",imageUrl:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},{id:6,title:"Modern industrial building",description:"We built a modern industrial building for a tech company. The building is well-equipped with state-of-the-art machinery and technology. We designed the building with energy efficiency in mind and installed a state-of-the-art HVAC system. We also added smart lighting and a smart home security system. The building is well-lit and visually appealing, with comfortable workspace and amenities for employees.",imageUrl:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},{id:7,title:"Renovation of a historic theater",description:"We renovated a historic theater in the city. The theater was built in the 19th century and was previously used for live performances. We preserved the building's original façade and restored its original charm. We upgraded the electrical and HVAC systems, added smart lighting, and created a modern and functional auditorium. We also added a rooftop terrace with a stunning view of the city.",imageUrl:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},{id:8,title:"Modern museum",description:"We built a modern museum in the city. The museum features a variety of exhibits and artifacts. We designed the building with energy efficiency in mind and installed a state-of-the-art HVAC system. We also added smart lighting and a smart home security system. The building is well-lit and visually appealing, with comfortable seating areas and restrooms.",imageUrl:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},{id:9,title:"New public park",description:"We built a new public park in the city. The park features a variety of recreational facilities and green spaces. We designed the park with energy efficiency in mind and installed a state-of-the-art HVAC system. We also added smart lighting and a smart home security system. The park is well-lit and visually appealing, with comfortable seating areas and restrooms.",imageUrl:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"}],T=i=>(g("data-v-89801faf"),i=i(),y(),i),B={class:"container"},k=T(()=>t("h1",{class:"heading"},"Completed Projects",-1)),q={class:"project-grid"},M={__name:"ProjectsView",setup(i){const e=m(H);return(d,c)=>(a(),s("main",null,[t("div",B,[k,t("ul",q,[(a(!0),s(p,null,u(e.value,r=>(a(),f(v,{key:r.id,project:r},null,8,["project"]))),128))])])]))}},D=n(M,[["__scopeId","data-v-89801faf"]]);export{D as default};
