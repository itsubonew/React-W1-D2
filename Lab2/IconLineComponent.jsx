function IconLineComponent({icon,title}){
console.log(icon,title);
// console.log(title);
        return (
            <div className="wrapper">
                <div className="button">
                  <div className="icon">
                    <i className={'fa fa-'+icon} />
                  </div>
                  <span>{title}</span>
                  </div>
                </div>
        );
    
}
    