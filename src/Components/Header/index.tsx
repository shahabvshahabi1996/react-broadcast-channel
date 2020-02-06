import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

interface IProps {
    name? : string,
    children : any
};

interface INavProps {
    path : string , 
    link : string
};


export default class Header extends React.Component<IProps> {
    
    static defaultProps = {
        name : 'Brand Name'
    }

    public static Nav : React.FC<INavProps> = props => {
        return (
            <li><NavLink to={props.path}>{props.link}</NavLink></li>
        );
    }
    
    render() {
        return (
            <header className="header">
                <nav>
                    <h1>{this.props.name}</h1>
                    <ul>
                        {this.props.children}
                    </ul>
                </nav>
            </header>
        )
    }
}
