
// Developed by - Shwetang
// Github profile - https://github.com/Shwetang550 

import React, { useEffect, useState } from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import Recipes from './Recipes';


const app_key = "85623f2f7bafc4792e25b3c1cdc1fed2";
const app_id = "4fab9e90";


const Header = () => {

    const [search, setSearch] = useState("");
    const [reci, setReci] = useState([]);
    const [food, setFood] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        setFood(search);
    }

    useEffect(() => {
        const getData = async () => {
            const response = await Axios.get(`https://api.edamam.com/search?q=${food}&app_id=${app_id}&app_key=${app_key}&from=0&to=3&calories=591-722&health=alcohol-free`);
            setReci(response.data.hits);
        };
        getData();
    }, [food]);

    return ( 
        <>
            <div className="jumbotron">
                <FastfoodIcon className="foodIcon" />
                <h1 className="disply-1">Food Recipes</h1>

                
                <form action="submit" onSubmit={handleSearch} className="input-group w-25 mx-auto">
                    <input type="text" className="form-control" placeholder="Search your Recipe" value={search} onChange={handleChange} />
                    
                    <Button type="submit" variant="contained" className="btn input-group-text">    
                        <SearchIcon />
                    </Button>
                </form>

            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                reci.map((rec, index) => {
                    return <Recipes key={index} rec={rec.recipe} />
                })
            }
            </div>
        </>
    );
}
 
export default Header;