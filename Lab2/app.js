const socialIcons = [
    {
        icon: "instagram",
        title: "Instagram"
    },
    {
        icon: "facebook-f",
        title: "Facebook"
    },
    {
        icon: "twitter",
        title: "Twitter"
    },
    {
        icon: "linkedin",
        title: "LinkedIn"
    },
    {
        icon: "youtube",
        title: "YouTube"
    },
    {
        icon: "github",
        title: "Github"
    },
];

const root =(
    <div className="row">
     <IconLineComponent icon={socialIcons[0].icon} title={socialIcons[0].title} />
     <IconLineComponent icon={socialIcons[1].icon} title={socialIcons[1].title} />
     <IconLineComponent icon={socialIcons[2].icon} title={socialIcons[2].title} />
     <IconLineComponent icon={socialIcons[3].icon} title={socialIcons[3].title} />
     <IconLineComponent icon={socialIcons[4].icon} title={socialIcons[4].title} />
     </div>
 )
 
 ReactDOM.render(root, document.getElementById('root'))
