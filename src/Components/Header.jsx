import React from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const Header = () => {
    return ( 
        <div className="jumbotron">
            <FastfoodIcon className="foodIcon" />
            <h1 className="disply-1">Header</h1>

            <div class="input-group w-25 mx-auto">
                <input type="text" className="form-control" placeholder="Search your Recipe" />
                
                <Button variant="contained" className="btn input-group-text">
                    <SearchIcon />
                </Button>
            </div>
        </div>
    );
}
 
export default Header;