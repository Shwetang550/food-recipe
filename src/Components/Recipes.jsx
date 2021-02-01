import React from 'react';

const Recipes = (props) => {

    const { rec } = props;

    return (
        <div className="col">
            <div className="card h-100" style={{width: "18rem"}}>
                <img src={`${rec.image}`} className="card-img-top" alt={rec.label} />
                        
                <div className="card-body p-5">
                
                    <h5 className="card-title">{rec.label}</h5>
                    
                    <ul className="list-group list-group-flush">
                        {
                            rec.ingredientLines.map((i,index) => {
                                return <li className="list-group-item" key={index}>{i}</li>;
                            })
                        }
                    </ul>   
                </div>
            </div>
        </div>
    );
}
 
export default Recipes;